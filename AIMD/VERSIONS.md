<!-- # TEMPLATE: VERSIONS.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with semantic version history and deployment updates.
#
# INSTRUCTIONS FOR THE AI AGENT:
# Use this document to trace the evolution of the software across versions. 
# When deploying a new stable release or version milestone, document it at the TOP of this file using semantic versioning.
-->

<!-- markdownlint-disable MD013 -->
# VERSIONS

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
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔸 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#🚀 Stable Releases & Milestones]] ^toc-stable
- [[#🏗️ Pre-Release Iterations (Alpha/Beta Sandbox)]] ^toc-prerelease
- [[#🚀 Go to...]] ^toc-goto

## 🚀 Stable Releases & Milestones
[[#^toc-stable|TOC]]

### 🏷️ v1.1.0 (2026-06-25) - Performance Optimization & Scope Hardening
- **Added / Enhanced:**
  - Integrated an isolated container targeting rule restricting DOM scanning loops exclusively to `.nav-files-container`.
  - Added a 10ms execution micro-debounce layer to batch sequential multi-node expansions into a single processor pass.
  - Implemented a value divergence check inside `.setAttribute()` routines to bypass rewriting DOM parameters when the existing state is identical.
- **Fixed / Patched:**
  - Corrected an issue where workspace toggles or markdown canvas operations triggered global body re-evaluations and introduced user interface stutter.
  - Fixed a potential processing lock that occurred when heavy, high-volume folder structural trees expanded recursively all at once.
- **Breaking Changes & Remediations:**
  - The broad, unthrottled `MutationObserver` targeting `document.body` was completely stripped out to secure performance constraints.
    - *Remediation:* No human intervention required. The system upgrades automatically, discarding legacy listeners cleanly upon initial reload.

### 🏷️ v1.0.0 (2026-06-23) - Baseline Production Launch
- **Summary:** Initial public release stabilizing the core alpha character token match parser and programmatic HSL spectrum styles configuration layout engine.
- **Core Capabilities:**
  - Dynamic generation of 26 customized a-z HSL palette selector blocks injected on startup.
  - Automated regex title evaluation that handles alphabetical character extraction and default token styling fallbacks.
  - Seamless layout-safe hover effects and uninstallation hooks that wipe the DOM clean when turning the plugin off.

---

## 🏗️ Pre-Release Iterations (Alpha/Beta Sandbox)
[[#^toc-prerelease|TOC]]

### 🏷️ v0.1.0-beta (2026-06-15)
- **Milestone:** Initial alpha build confirming sandbox communication layers, style injection targets, and basic event registrations inside standard Obsidian workspaces.

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
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔸 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: VERSIONS.template.md -->
