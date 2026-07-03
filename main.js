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
    // 1. Find the sidebar element cleanly
    const sidebarContainer = document.querySelector('.nav-files-container');

    // 2. If the sidebar isn't fully loaded yet, wait 500ms and try again
    if (!sidebarContainer) {
      setTimeout(() => this.initializeAlphaObserver(), 500);
      return;
    }

    // 3. Set up the observer to ONLY watch the sidebar structure
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

    // 4. Critical Fix: We observe 'sidebarContainer' instead of 'document.body'
    this.observer.observe(sidebarContainer, {
      childList: true,
      subtree: true
    });
    
    console.log('[File Tree Alpha Hue] Targeted sidebar observer successfully locked on.');
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
      /* Clear transition configurations across text nodes and sidebar folder icons */
      .tree-item-self[data-alpha-char] .tree-item-inner,
      .tree-item-self[data-alpha-char] .nav-folder-title-content,
      .tree-item-self[data-alpha-char] .nav-file-title-content,
      .tree-item-self[data-alpha-char] .collapse-icon svg {
        transition: color 0.2s ease-in-out, stroke 0.2s ease-in-out !important;
      }
    `;

    // Map characters 'a' through 'z' (0 to 25 steps) across 360 degrees of hue
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      const hue = Math.round((i / alphabet.length) * 360);
      
      // Calculate a 10% darker resting state and full-brightness hover targets
      const restingLightness = '50%';
      const hoverLightness = '65%';

      cssRules += `
        /* Resting State Rules: Targets explicit text and icon wrappers to override themes */
        .tree-item-self[data-alpha-char="${char}"] .tree-item-inner,
        .tree-item-self[data-alpha-char="${char}"] .nav-folder-title-content,
        .tree-item-self[data-alpha-char="${char}"] .nav-file-title-content {
          color: hsl(${hue}, 80%, ${restingLightness}) !important;
        }
        .tree-item-self[data-alpha-char="${char}"] .collapse-icon svg {
          stroke: hsl(${hue}, 80%, ${restingLightness}) !important;
        }

        /* Hover State Triggers: Lightens text and folder icons up to normal brightness levels */
        .tree-item-self[data-alpha-char="${char}"]:hover .tree-item-inner,
        .tree-item-self[data-alpha-char="${char}"]:hover .nav-folder-title-content,
        .tree-item-self[data-alpha-char="${char}"]:hover .nav-file-title-content {
          color: hsl(${hue}, 85%, ${hoverLightness}) !important;
        }
        .tree-item-self[data-alpha-char="${char}"]:hover .collapse-icon svg {
          stroke: hsl(${hue}, 85%, ${hoverLightness}) !important;
        }
      `;
    }

    styleEl.innerHTML = cssRules;
    document.head.appendChild(styleEl);
    console.log('[File Tree Alpha Hue] Enhanced text and icon selector style rules successfully registered.');
  }

};
