const { Plugin } = require('obsidian');

module.exports = class FileTreeAlphaHuePlugin extends Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.observer = null;
  }

  async onload() {
    console.log('%c[File Tree Alpha Hue]%c Initializing Character Spectrum Engine...', 'color: #ff6b6b; font-weight: bold;', 'color: default;');

    // 1. Inject the baseline clears and alpha spectrum HSL stylesheet layers into document head
    this.injectStyles();

    // 2. Run an immediate initial sweep once the workspace layouts are ready
    this.app.workspace.onLayoutReady(() => this.calculateAlphaCharacters());

    // 3. Re-evaluate values whenever layout panels toggle or structural leaves shift
    this.registerEvent(
      this.app.workspace.on('layout-change', () => this.calculateAlphaCharacters())
    );

    // 4. Set up a MutationObserver to instantly capture expanding/collapsing folder trees
    this.initializeAlphaObserver();
  }

  onunload() {
    console.log('%c[File Tree Alpha Hue]%c Stripping alpha attributes and restoring theme configurations...', 'color: #ff6b6b; font-weight: bold;', 'color: default;');
    
    if (this.observer) this.observer.disconnect();

    const styleEl = document.getElementById('obsidian-file-tree-alpha-hue');
    if (styleEl) styleEl.remove();

    // Wipe all attributes to completely restore original theme layout layers cleanly
    const stampedItems = document.querySelectorAll('[data-alpha-char]');
    stampedItems.forEach(item => item.removeAttribute('data-alpha-char'));
  }

  initializeAlphaObserver() {
    // Intercepts newly rendered file rows right as a human expands directory trees
    this.observer = new MutationObserver((mutations) => {
      let shouldProcess = false;
      for (let i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          shouldProcess = true;
          break;
        }
      }
      if (shouldProcess) {
        this.calculateAlphaCharacters();
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  calculateAlphaCharacters() {
    // Target the inner row title text containers across folders and file components
    const titleElements = document.querySelectorAll('.tree-item-inner.nav-folder-title-content, .tree-item-inner.nav-file-title-content');
    
    titleElements.forEach((titleEl) => {
      const parentRow = titleEl.closest('.tree-item-self');
      if (!parentRow) return;

      const rawText = titleEl.textContent || '';
      
      // RegEx filters out leading special parameters/dots, grabbing the first true alphabet letter
      const match = rawText.match(/[a-zA-Z]/);

      if (match) {
        const firstLetter = match[0].toLowerCase();
        
        // Stamp token onto the row wrapper box element if the value diverged
        if (parentRow.getAttribute('data-alpha-char') !== firstLetter) {
          parentRow.setAttribute('data-alpha-char', firstLetter);
        }
      } else {
        if (parentRow.getAttribute('data-alpha-char') !== 'default') {
          parentRow.setAttribute('data-alpha-char', 'default');
        }
      }
    });
  }

  injectStyles() {
    if (document.getElementById('obsidian-file-tree-alpha-hue')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'obsidian-file-tree-alpha-hue';

    let cssRules = `
      /* Universal Reset: Clear transition timelines and baseline parameters across title text wrappers */
      .tree-item-self[data-alpha-char] .tree-item-inner {
        transition: color 0.2s ease-in-out !important;
      }
    `;

    // Map characters 'a' through 'z' (0 to 25 steps) across 360 degrees of hue
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      const hue = Math.round((i / alphabet.length) * 360);
      
      // Calculate a 10% darker resting state and full-brightness hover targets
      const restingLightness = '35%';
      const hoverLightness = '45%';

      cssRules += `
        /* Resting State Rule: Muted alpha coloring */
        .tree-item-self[data-alpha-char="${char}"] .tree-item-inner {
          color: hsl(${hue}, 80%, ${restingLightness}) !important;
        }

        /* Hover State Trigger: Lightens up text content instantly to full brightness */
        .tree-item-self[data-alpha-char="${char}"]:hover .tree-item-inner {
          color: hsl(${hue}, 85%, ${hoverLightness}) !important;
        }
      `;
    }

    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
    console.log('[File Tree Alpha Hue] Alphabetical HSL theme spectrum stylesheets successfully registered.');
  }
};
