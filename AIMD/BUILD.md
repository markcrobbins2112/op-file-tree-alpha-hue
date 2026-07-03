---
title: BUILD
---

<!-- # TEMPLATE: BUILD.template.md -->
<!-- 
# BUILD
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file serves as the system construction guide. It must document building blocks,
# dependencies installation commands, target directory structures, packing pipelines,
# and runtime execution.
-->

<!-- markdownlint-disable MD013 -->

# BUILD

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
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
- [[#📋 Prerequisites & Toolchain Setup]] ^toc-prereq
- [[#🛠️ Build & Packaging Pipeline]] ^toc-pipeline
- [[#🚀 Execution & Packing Commands]] ^toc-commands
- [[#🧪 Post-Build Verification Rules]] ^toc-verify
- [[#🚀 Go to...]] ^toc-goto

## 📋 Prerequisites & Toolchain Setup
[[#^toc-prereq|TOC]]
- **Compiler/Runtime:** Node.js v18.x or greater (LTS Recommended) & npm v9.x+
- **Global System Variables Required:**
  - `OBSIDIAN_VAULT_PATH`: Optional local directory path directly pointing to your development vault's `.obsidian/plugins/file-tree-alpha-hue/` folder to automate hot-reloading testing cycles.

---

## 🛠️ Build & Packaging Pipeline
[[#^toc-pipeline|TOC]]
- The build architecture ingests source files (typically TypeScript or standard vanilla JavaScript modules) and processes them through an efficient Bundler engine (`esbuild`). This compiler pathway transpiles potential modern syntax, evaluates import chains, marks the core `obsidian` dependency library as external, and combines everything into a singular production bundle called `main.js`. This compiled script drops alongside static `manifest.json` parameter arrays directly into the target execution folder.

### 📦 Key Components
- **`main.js`**: The final generated distribution module file holding minified, bundled business logic run via Obsidian's built-in V8 core engine.
- **`manifest.json`**: Static configuration declaration matrix defining plugin id, target API version hooks, name descriptors, and initial system entry flags.
- **`esbuild.config.mjs`**: The configuration build router containing bundling directives, source-mapping flags, platform switches (`node`), and target output directory pathways.

---

## 🚀 Execution & Packing Commands
[[#^toc-commands|TOC]]
- **Install Dependencies**:
  ```bash
  npm install
  ```
- **Local Dev Server / Watch Mode**:
  ```bash
  npm run dev
  ```
- **Verification / Linting**:
  ```bash
  npm run lint
  ```
- **Production Package Compilation**:
  ```bash
  npm run build
  ```

---

## 🧪 Post-Build Verification Rules
[[#^toc-verify|TOC]]
- 1. **Size Checking:** Verify that the output executable or bundle size is greater than `0 KB`. (Typically checking `main.js` ranges between `4 KB` and `30 KB`).
- 2. **Path Verification:** Check that the output file is located exactly within the target distribution directory layout. (Root folder or sub-target path specified by `.obsidian/plugins/file-tree-alpha-hue/`).
- 3. **Smoke Test Command:** `node -e "require('./main.js')"` *(Ensures that structural CommonJS module packaging compiles correctly and lacks parsing crashes).*

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: BUILD.template.md -->
