---
title: DESIGN
---

<!-- # TEMPLATE: DESIGN.template.md -->
<!-- 
# DESIGN
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# Use this document as the single source of truth for the system's design patterns, constraints, and data flow. 
# Do not propose code or modifications that violate the patterns, structural layouts, or database schemas defined below.
-->

<!-- markdownlint-disable MD013 -->

# DESIGN

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#🗺️ System Topology & Context Map]] ^toc-topology
- [[#💻 High-Level Components & Communication]] ^toc-components
- [[#💾 Data Architecture & Schema Rules]] ^toc-data
- [[#📂 Core File Structure Layout]] ^toc-layout
- [[#🚦 Design Principles & Guardrails]] ^toc-guardrails
- [[#🚀 Go to...]] ^toc-goto

## 🗺️ System Topology & Context Map
[[#^toc-topology|TOC]]
- **Architecture Style:** Event-Driven Observer with Selector Inject Layer (Decoupled DOM Decoration Pattern)
- **Primary Language Stack:** JavaScript / ECMAScript (CommonJS execution standard)
- **Frameworks & Core Runtimes:** Obsidian Application Shell API (Electron / Chromium V8 runtime abstraction layers)

## 💻 High-Level Components & Communication
[[#^toc-components|TOC]]
- **Frontend/Client:** Obsidian File Explorer Navigation Split View (`.nav-files-container`). This component represents the isolated visualization layer manipulated via declarative CSS rules.
- **Backend Core:** Plugin Class Router Lifecycle (`onload`/`onunload`). Manages state registration, teardown cleanup, styles injection, mutation debouncing, and event listeners bound to workspace changes.
- **External Integration:** DOM Native `MutationObserver` Engine and HTML5 CSS Custom Component Architecture. Intercepts asynchronous structural shifts without passing overhead out to local OS kernels.

---

## 💾 Data Architecture & Schema Rules
[[#^toc-data|TOC]]
- **Storage Type:** Volatile Element Attributes (`data-alpha-char`) and Dynamic Document Style Sheets (`<style id="obsidian-file-tree-alpha-hue">`).
- **State Constraints:** The plugin operates as a completely stateless engine. Persistent configuration layers are avoided; alpha sorting traits and coloring rules are derived dynamically on the fly from file text headings inside the active DOM tree view.

## 📂 Core File Structure Layout
[[#^toc-layout|TOC]]
```text
📂 Project Root/
├── 📂 .github/            # GitHub automated workflows and configuration policies
├── 📂 AIMD/               # AI System Core Engineering documentation folders
├── 📄 esbuild.config.mjs  # Build compilation pipeline routing engine script
├── 📄 main.js             # Compiled, single-file distribution plugin bundle 
├── 📄 manifest.json       # Obsidian structural ecosystem manifest parameters
└── 📄 styles.css          # Optional static layout structural additions sheet
```

---

## 🚦 Design Principles & Guardrails
[[#^toc-guardrails|TOC]]
- **Dependency Minimization:** Avoid adding external packages/libraries unless natively impossible. Rely completely on native browser APIs and built-in Obsidian abstractions (`debounce`).
- **Separation of Concerns:** Keep presentation/UI entirely decoupled from system-level business logic. The JS engine calculates alpha metadata states exclusively, delegating all colorization states, theme overrides, transitions, and hover states to the browser CSS engine via matching custom `[data-alpha-char]` selectors.
- **Security Constraints:** Ensure file system titles evaluated via text token patterns match explicit alphabetical filtering templates (`/[a-zA-Z]/`) to guarantee zero-risk exposure to string formatting anomalies or structural script injections.

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: DESIGN.template.md -->
