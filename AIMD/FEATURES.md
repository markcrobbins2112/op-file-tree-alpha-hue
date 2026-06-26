<!-- # TEMPLATE: FEATURES.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file structures user-facing capabilities and functional features.
# Group related software parts into "Feature Groups" (with tags and anchors),
# then list them alphabetically under "All Features".
-->

<!-- markdownlint-disable MD013 -->
# FEATURES

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#📦 Feature Groups]] ^toc-groups
- [[#🗄️ All Features]] ^toc-all-features
- [[#📉 Deprecated / Removed Features]] ^toc-deprecated
- [[#🚀 Go to...]] ^toc-goto

Welcome to File Tree Alpha Hue! This plugin dynamically colors file explorer folders and notes inside Obsidian according to the first alphabetical character of their titles. By automating visual segregation through an optimized 360-degree HSL hue spectrum, it drastically improves vault navigation speed and structural readability for data-heavy workspaces.

## 📦 Feature Groups
[[#^toc-groups|TOC]]

### 🎨 1. Decorative UI Styling Layer ^z1
This capability tier focuses on generating, injecting, and cleaning up the declarative presentation rules that style the interface without conflicting with core user themes.
- **[Dynamic HSL Alphabet Spectrum Rendering](#[Dynamic-HSL-Alphabet-Spectrum-Rendering])** - Generates custom 360-degree color shades mapping precisely to characters a-z for smooth, automated index sorting aesthetics.
- **[Theme-Compliant Transitions & Hovers](#[Theme-Compliant-Transitions-&-Hovers])** - Injects high-performance, layout-safe css transitions that brighten text nodes and folder cogs dynamically upon hover.

### ⚡ 2. Performance-Optimized DOM Traversal ^z2
This group isolates the event hooks, observers, and throttle configurations engineered to process layout evaluations instantly with negligible resource overhead.
- **[Debounced Navigation Parsing](#[Debounced-Navigation-Parsing])** - Collapses rapid layout adjustments or recursive folder expansions into a singular execution macro using structured timing loops.
- **[Target-Isolated Mutation Tracking](#[Target-Isolated-Mutation-Tracking])** - Configures a scoped observer engine to process interface adjustments exclusively inside the side navigation drawer.

---

## 🗄️ All Features
[[#^toc-all-features|TOC]]

### Debounced Navigation Parsing
- **Group:** [[#^z2|Performance-Optimized DOM Traversal]]
Protects application performance by processing file tree calculations behind a 10ms micro-debounce timer. When bulk folder shifts occur or many elements render simultaneously, the engine aggregates these overlapping callbacks and evaluates the DOM layout exactly once.

### Dynamic HSL Alphabet Spectrum Rendering
- **Group:** [[#^z1|Decorative UI Styling Layer]]
Upon loading, the script evaluates characters `a` through `z` across 26 fractional increments of a 360-degree HSL color cylinder. It dynamically hooks text blocks and SVGs matching these attributes to a resting 50% lightness level, separating content blocks cleanly.

### Target-Isolated Mutation Tracking
- **Group:** [[#^z2|Performance-Optimized DOM Traversal]]
Binds a native browser MutationObserver specifically to the `.nav-files-container` target zone. The plugin completely ignores canvas mutations, active document textual modifications, and search panels, firing text-match routines exclusively when file explorer navigation trees physically change.

### Theme-Compliant Transitions & Hovers
- **Group:** [[#^z1|Decorative UI Styling Layer]]
Appends custom rules targeting text tags and `.collapse-icon svg` structural parameters with an explicit `transition: color 0.2s ease-in-out` flag. On hover events, the element smoothly steps up to a vivid 65% lightness value, highlighting selections without displacing layout positioning.

---

## 📉 Deprecated / Removed Features
[[#^toc-deprecated|TOC]]
- **[!] Global Body Mutation Observer:** The legacy architecture observed the entire document body framework (`document.body`) and ran query sweeps across the entire DOM tree whenever any user actions changed page layouts. This introduced critical CPU lag spikes and severe visual stutters in medium-to-large vault profiles.
  - **Replacement Pattern:** Migrated tracking hooks onto a scoped container target (`.nav-files-container`) and funneled evaluation tasks through an internal Obsidian `debounce` macro to safely collapse sequential updates.

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: FEATURES.template.md -->
