# 🚀 satya-portfolio-cli

![npm](https://img.shields.io/npm/v/satya-portfolio-cli)
![license](https://img.shields.io/npm/l/satya-portfolio-cli)
![downloads](https://img.shields.io/npm/dt/satya-portfolio-cli)

Generate hacker-style terminal portfolio websites directly from your CLI.

---

## ⚡ Features

- Interactive terminal portfolio
- Dynamic commands
- Hacker-style UI
- Resume support
- Smart command suggestions
- Dynamic projects, skills, certifications, education
- Personalized shell identity
- ASCII branding using figlet
- Supports local resume PDF or resume URL
- Fully generated static portfolio website

---

## 📦 Installation

Run instantly using:

```bash
npx satya-portfolio-cli
```

OR install globally:

```bash
npm install -g satya-portfolio-cli
```

---

## 🖥️ Commands Supported

Inside generated portfolio:

```bash
help
about
skills
projects
experience
education
certs
contact
resume
whoami
clear
```

---

## ✨ Example

```bash
? Your name: Satya
? Terminal username: neo
? Terminal hostname: matrix
? Skills: React, FastAPI, Node.js
```

Generates:

```txt
neo@matrix:~ ❯
```

Interactive terminal portfolio website.

---

## ⚙️ Workflow

```mermaid
flowchart TD

A[User Runs CLI] --> B[Interactive Prompts]
B --> C[Collect Portfolio Data]
C --> D[Generate HTML Portfolio]
D --> E[Create Resume Integration]
E --> F[Export Portfolio Folder]
F --> G[Open index.html]
```

---

## 🏗️ Architecture Diagram

```mermaid
flowchart LR

A[CLI Interface]
--> B[Inquirer Prompts]

B --> C[Portfolio Data Object]

C --> D[HTML Template Engine]

D --> E[Generated Portfolio Website]
```

---

## 💻 Terminal Command Flow

```mermaid
flowchart TD

A[User Types Command]
--> B{Command Exists?}

B -->|Yes| C[Render Section]

B -->|No| D[Show Suggestions]

C --> E[Display Terminal Output]
D --> E
```

---

## ⚙️ How It Works

```txt
npx satya-portfolio-cli
        ↓
Interactive CLI prompts
        ↓
Portfolio data collection
        ↓
HTML template generation
        ↓
Interactive terminal portfolio website
```

---

## 📁 Generated Structure

```txt
portfolio/
 ├── index.html
 └── resume.pdf
```

---

## 🔥 Screenshots

### Terminal Portfolio Preview

<img width="1145" alt="Demo 1" src="https://github.com/user-attachments/assets/36708432-fb89-4cef-bbea-d93ab0f7aaa4" />

<img width="1467" alt="Demo 2" src="https://github.com/user-attachments/assets/459c988a-74af-4d2b-b5c2-6df1956a25ad" />

<img width="1640" alt="Demo 3" src="https://github.com/user-attachments/assets/26bf07da-ae40-45d5-bed2-612fd5fa3c2c" />

---

## 🛠️ Tech Stack

- Node.js
- Inquirer.js
- Chalk
- Figlet
- fs-extra

---

## 🚀 Publish Your Portfolio

After generation:

- Open `portfolio/index.html`
- Deploy using:
  - GitHub Pages
  - Netlify
  - Vercel

---

## 🚧 Roadmap

- [x] Interactive terminal portfolio
- [x] Resume support
- [x] Smart command suggestions
- [x] Dynamic portfolio generation
- [ ] Multiple themes
- [ ] One-click deployment
- [ ] AI resume-to-portfolio generation
- [ ] Live preview mode

---

## 📌 npm Package

```bash
npm install -g satya-portfolio-cli
```

OR

```bash
npx satya-portfolio-cli
```

---

## 👨‍💻 Author

Satyavardhan Koyalkar

GitHub:
https://github.com/satyavardhankoyalkar

LinkedIn:
https://www.linkedin.com/in/satyavardhan-koyalkar-5ba794/

---

## ⭐ Support

If you like this project:

- Star the repo
- Share it
- Build cool portfolios 😎

---

## 📄 License

MIT License
