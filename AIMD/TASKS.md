<!-- # TEMPLATE: TASKS.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file tracks immediate development tasks and feature checklists.
# Always update this backlog at the beginning of your turn (when new chat instructions 
# are received) and mark items completed ([x]) once verified.
-->

<!-- markdownlint-disable MD013 -->
# TASKS

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔸 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#💬 Incoming tasks from chat]] ^toc-chat
- [[#🔄 New Changes]] ^toc-changes
- [[#⚙️ New Settings]] ^toc-new-settings
- [[#🕹️ New Commands]] ^toc-new-commands
- [[#⌨️ New Bindings]] ^toc-new-bindings
- [[#🚀 New Features]] ^toc-new-features
- [[#🛑 Blocked Items & Impediments]] ^toc-blocked
- [[#🗃️ Completed Backlog (Archive)]] ^toc-backlog
- [[#🛠️ Settings]] ^toc-arch-settings
- [[#💻 Commands]] ^toc-arch-commands
- [[#🔗 Bindings]] ^toc-arch-bindings
- [[#📦 Features]] ^toc-arch-features
- [[#🚀 Go to...]] ^toc-goto

## 💬 Incoming tasks from chat
[[#^toc-chat|TOC]]
- [ ] Implement Obsidian Configuration Settings Tab UI [2026-06-25]
  - Create `FileTreeAlphaHueSettingTab` class inheriting from `PluginSettingTab`
  - Render individual element toggles and sliders for lightness controls
- [ ] Add Custom Palette Blacklist Filtering [2026-06-25]
  - Integrate a setting input field to accept an array of strings or regex blocks to ignore specific note file prefixes

## 🔄 New Changes
[[#^toc-changes|TOC]]
- [ ] Migrate Vanilla Javascript Module to Strict TypeScript (`.js` ➔ `.ts`)
  - Add explicit types for MutationObserver payloads and create structural interfaces for plugin metadata settings container

## ⚙️ New Settings
[[#^toc-new-settings|TOC]]
- [ ] `restingLightness`
  - Float value (0.0 to 1.0) adjusting the base resting text luminosity state inside the side pane layout
- [ ] `hueSaturation`
  - Percentage value (0% to 100%) configuring overall vibrance saturation across generated HSL color styles

## 🕹️ New Commands
[[#^toc-new-commands|TOC]]
- [ ] Command: `file-tree-alpha-hue:force-recalculate`
  - Registers a user-accessible palette update macro to clear out and recreate element classes manually

## ⌨️ New Bindings
[[#^toc-new-bindings|TOC]]
- [ ] Binding: `Ctrl+Alt+R`
  - Binds hotkey to launch the `file-tree-alpha-hue:force-recalculate` workspace command routine

## 🚀 New Features
[[#^toc-new-features|TOC]]
- [ ] Feature Name: Dynamic Folder Color Overrides
  - Allows vault operators to specify distinct hardcoded colors for high-priority root system folders, overriding the alpha match logic

---

## 🛑 Blocked Items & Impediments
[[#^toc-blocked|TOC]]
- *None currently logged. System architecture is stable and performing efficiently.*

---

## 🗃️ Completed Backlog (Archive)
[[#^toc-backlog|TOC]]
- [x] **TASK-001 - Baseline Core Layout Refactor** (By AI on 2026-06-25)
- [x] **TASK-002 - Mitigate Mutation Performance Overhead** (By AI on 2026-06-25)

### 🛠️ Settings
[[#^toc-arch-settings|TOC]]
- [x] `data-alpha-char` - Dynamic element attribute node markers established

### 💻 Commands
[[#^toc-arch-commands|TOC]]
- [x] `calculateAlphaCharacters()` - Core evaluation logic mapped to Obsidian layout changes

### 🔗 Bindings
[[#^toc-arch-bindings|TOC]]
- [x] `layout-change` - System event registered directly to workspace updates

### 📦 Features
[[#^toc-arch-features|TOC]]
- [x] **10ms Execution Debounce** - Protects CPU overhead by batching cascading DOM update mutations safely

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔸 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: TASKS.template.md -->
<!-- # TEMPLATE: TASKS.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file tracks immediate development tasks and feature checklists.
# Always update this backlog at the beginning of your turn (when new chat instructions 
# are received) and mark items completed ([x]) once verified.
-->

<!-- markdownlint-disable MD013 -->
# TASKS

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔸 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#💬 Incoming tasks from chat]] ^toc-chat
- [[#🔄 New Changes]] ^toc-changes
- [[#⚙️ New Settings]] ^toc-new-settings
- [[#🕹️ New Commands]] ^toc-new-commands
- [[#⌨️ New Bindings]] ^toc-new-bindings
- [[#🚀 New Features]] ^toc-new-features
- [[#🛑 Blocked Items & Impediments]] ^toc-blocked
- [[#🗃️ Completed Backlog (Archive)]] ^toc-backlog
- [[#🛠️ Settings]] ^toc-arch-settings
- [[#💻 Commands]] ^toc-arch-commands
- [[#🔗 Bindings]] ^toc-arch-bindings
- [[#📦 Features]] ^toc-arch-features
- [[#🚀 Go to...]] ^toc-goto

## 💬 Incoming tasks from chat
[[#^toc-chat|TOC]]
- [ ] Implement Obsidian Configuration Settings Tab UI [2026-06-25]
  - Create `FileTreeAlphaHueSettingTab` class inheriting from `PluginSettingTab`
  - Render individual element toggles and sliders for lightness controls
- [ ] Add Custom Palette Blacklist Filtering [2026-06-25]
  - Integrate a setting input field to accept an array of strings or regex blocks to ignore specific note file prefixes

## 🔄 New Changes
[[#^toc-changes|TOC]]
- [ ] Migrate Vanilla Javascript Module to Strict TypeScript (`.js` ➔ `.ts`)
  - Add explicit types for MutationObserver payloads and create structural interfaces for plugin metadata settings container

## ⚙️ New Settings
[[#^toc-new-settings|TOC]]
- [ ] `restingLightness`
  - Float value (0.0 to 1.0) adjusting the base resting text luminosity state inside the side pane layout
- [ ] `hueSaturation`
  - Percentage value (0% to 100%) configuring overall vibrance saturation across generated HSL color styles

## 🕹️ New Commands
[[#^toc-new-commands|TOC]]
- [ ] Command: `file-tree-alpha-hue:force-recalculate`
  - Registers a user-accessible palette update macro to clear out and recreate element classes manually

## ⌨️ New Bindings
[[#^toc-new-bindings|TOC]]
- [ ] Binding: `Ctrl+Alt+R`
  - Binds hotkey to launch the `file-tree-alpha-hue:force-recalculate` workspace command routine

## 🚀 New Features
[[#^toc-new-features|TOC]]
- [ ] Feature Name: Dynamic Folder Color Overrides
  - Allows vault operators to specify distinct hardcoded colors for high-priority root system folders, overriding the alpha match logic

---

## 🛑 Blocked Items & Impediments
[[#^toc-blocked|TOC]]
- *None currently logged. System architecture is stable and performing efficiently.*

---

## 🗃️ Completed Backlog (Archive)
[[#^toc-backlog|TOC]]
- [x] **TASK-001 - Baseline Core Layout Refactor** (By AI on 2026-06-25)
- [x] **TASK-002 - Mitigate Mutation Performance Overhead** (By AI on 2026-06-25)

### 🛠️ Settings
[[#^toc-arch-settings|TOC]]
- [x] `data-alpha-char` - Dynamic element attribute node markers established

### 💻 Commands
[[#^toc-arch-commands|TOC]]
- [x] `calculateAlphaCharacters()` - Core evaluation logic mapped to Obsidian layout changes

### 🔗 Bindings
[[#^toc-arch-bindings|TOC]]
- [x] `layout-change` - System event registered directly to workspace updates

### 📦 Features
[[#^toc-arch-features|TOC]]
- [x] **10ms Execution Debounce** - Protects CPU overhead by batching cascading DOM update mutations safely

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔸 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: TASKS.template.md -->
