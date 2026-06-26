<!-- # TEMPLATE: SPEC.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file tracks formal specifications, comparing originally requested guidelines 
# against actual implemented items. Document architectural challenges, optimization rules,
# compatibility constraints, and platform limits.
-->

<!-- markdownlint-disable MD013 -->
# SPEC

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
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#🔗 External Application Protocols & URI Schemes]] ^toc-uri
- [[#💻 Native OS Integration Details]] ^toc-os
- [[#📋 Originally Requested Specifications]] ^toc-requested
- [[#🎯 Implemented Technical Concerns & Optimization Features]] ^toc-optimization
- [[#🚦 Internal Function Signatures & System Exit Codes]] ^toc-codes
- [[#Go to...]] ^toc-goto

This document compiles the user requirements and instructions from `AGENTS.md` and related files and provides detailed documentation of how the extension was architected and built.

---

## 🔗 External Application Protocols & URI Schemes
[[#^toc-uri|TOC]]

### Obsidian Application Link Contract
- **Target Schema:** `obsidian://open`
- **Query String Map:**

  | Parameter | Type | Required | Description / Constraints |
  | :--- | :--- | :--- | :--- |
  | `vault` | `String` | Yes | Target vault name or unique identifier. Must be URL-encoded (UTF-8). |
  | `file` | `String` | No | Optional absolute or relative file path to open immediately inside the workspace. |

---

## 💻 Native OS Integration Details
[[#^toc-os|TOC]]

### Registry / Configuration Mappings
- **System Hook Target:** Desktop Environment Window Configs (Handled by Electron / Chromium Runtime Layer)
- **Properties Mapping:**
  - `hardwareAcceleration` (Default): `"true"`
  - `"gpu-rasterization"`: Enabled via hardware runtime to render high-frequency CSS `transition` calculations smoothly on multi-monitor displays.

### File & Folder Attribute Masks
- **Configuration Context Target:** `.obsidian/plugins/file-tree-alpha-hue/` (Must preserve standardized structural read/write access permissions).
- **Directory Workspace Parent:** Root folder configuration maps require proper permissions so node files can be updated dynamically via local IDE instances.

---

## 📋 Originally Requested Specifications
[[#^toc-requested|TOC]]
- **Alphabetical Color Assignment**: Scan file explorer navigation item titles on the fly, isolate the first alphabet character via regex filtering, and paint both text fragments and cogs along a 360-degree color ring.
- **Dynamic Mutation Handling**: Track asynchronous DOM mutations immediately as folders expand or contract to keep visual decoration layers in sync without requiring full view reloads.

---

## 🎯 Implemented Technical Concerns & Optimization Features
[[#^toc-optimization|TOC]]
- **Target-Isolated Scoped Mutation Tracking**:
  - **The Problem**: Running a generic global observer against `document.body` triggers processing loops on every text edit, search match, or sidebar toggle, crashing large vault configurations.
  - **The Solution / Code Implementation**: Swapped the tracking target to `.nav-files-container`. This isolates node observation exclusively to the file navigation column.
- **Micro-Debounced Microtask Batching**:
  - **The Problem**: Rapidly opening folders or generating note paths causes sequential mutation cascades, inducing severe UI stuttering and thread locks.
  - **The Solution / Code Implementation**: Wrapped execution calls inside Obsidian's native `debounce()` block at a 10ms gate. This batches overlapping mutations into a single layout sweep.
- **Stateless DOM Guard Nodes**:
  - **The Problem**: Constantly invoking `.setAttribute()` updates on elements forces the browser to recalculate layouts over and over, triggering reflow thrashing.
  - **The Solution / Code Implementation**: Implemented strict defensive checks (`parentRow.getAttribute('data-alpha-char') !== targetChar`). Changes are written only when data markers diverge.

---

## 🚦 Internal Function Signatures & System Exit Codes
[[#^toc-codes|TOC]]

### Engine Error / Exit Status Codes

| Code (Integer) | Semantic Definition | Trigger Condition |
| :--- | :--- | :--- |
| `0` | `Success` | Complete flawless lifecycle termination or cleanup via `onunload()`. |
| `1` | `ERR_MISSING_NAV_CONTAINER` | The target DOM selector `.nav-files-container` was missing or unreadable during initialization. |
| `2` | `ERR_INVALID_STYLE_INJECTION` | The dynamic HTML `<style>` injector element failed to parse or could not bind to `document.head`. |

### Data Models & State Layouts
```ini
; Simulated memory attribute layout applied directly to the browser DOM nodes
[.tree-item-self[data-alpha-char="a"]]
color="hsl(0, 80%, 50%)"
transition="color 0.2s ease-in-out"
```

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
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: SPEC.template.md -->
