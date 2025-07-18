# 🧠 docsnao-core

**docsnao-core** is an AI-powered CLI tool designed to automatically generate clear, detailed, and accurate documentation for your source code, leveraging the power of **OpenAI GPT-4o**. It simplifies and accelerates your code documentation process, significantly reducing manual effort.

---

## 🚀 Features

- **Automated Documentation:** Instantly generate documentation comments for your code.
- **Rust Optimized:** Initially tailored for Rust, with an easily extensible architecture to support additional languages.
- **Clean, Modular Architecture:** Inspired by Clean Architecture and Domain-Driven Design, making it maintainable and scalable.
- **Language-specific Prompts:** Delivers precise and idiomatic documentation tailored to each programming language.

---

## 📂 Project Structure

```
src/
├── presentation/    # CLI and IDE plugin interfaces
├── usecase/         # Core documentation logic
├── domain/          # Language-specific logic and entities
├── infra/           # Integration with OpenAI GPT and other external systems
└── shared/          # Common utilities such as I/O and logging
```

---

## 🔨 Technology Stack

- **TypeScript:** Ensures type safety and enhances maintainability.
- **OpenAI GPT-4o:** Provides intelligent and context-aware documentation.
- **Commander.js:** Handles CLI argument parsing robustly.
- **dotenv:** Manages secure and flexible environment configuration.

---

## 🛠 Getting Started

### Prerequisites

- Node.js v18+
- OpenAI API Key

### Installation

```bash
git clone <your-repo-url>
cd docsnao-core
npm install
```

### Setup

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your-api-key-here
```

### Usage

Build the project:

```bash
npm run build
```

Generate documentation for a Rust file:

```bash
node dist/index.js --language rust --file path/to/your_file.rs
```

---

## 🌱 Roadmap

- Expand support to Python, JavaScript, Java, and Go.
- Create IDE plugins for VS Code, IntelliJ, and Neovim.
- Implement optional in-place documentation updating.

---

## ⚖️ License

MIT License © Kimi no Nawa

---
