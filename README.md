# YouGotMail

*Open Source SMTP server built with Node.js and nodemailer.*

## 📖 Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Live Demo](#live-demo)
4. [Technologies](#technologies)
5. [Quick Install](#quick-install)
6. [How to Use](#how-to-use)
7. [Contributing](#contributing)
8. [License](#license)

<a id="description"></a>

## 📝 Description

**YouGotMail** is an open-source SMTP server built with **Node.js** and **nodemailer**, offering fast, flexible email delivery. Ideal for notification systems, newsletter automation, and custom email workflows.

<a id="features"></a>

## 🚀 Features

* Configurable SMTP transport for customizable email sending.
* CORS support and environment variables for scalability.
* Clean separation of backend and frontend code.
* Modular architecture ready for extension.

<a id="live-demo"></a>

## 🎥 Live Demo

> *Coming soon*: dashboard access and delivery metrics.

<a id="technologies"></a>

## 🛠 Technologies

* **Backend**: Node.js, Express, nodemailer, CORS, dotenv.
* **Frontend**: React.js, Vite, Axios, ESLint, React Hooks.
* **Development**: nodemon, vite, ESLint plugins.

<a id="quick-install"></a>

## ⚙️ Quick Install

> **Prerequisite**: Node.js and npm installed.

### Backend Setup

```bash
cd server
npm install cors dotenv express nodemailer nodemon
```

### Frontend Setup

```bash
cd client
npm install axios react react-dom
npm install --save-dev @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
```

<a id="how-to-use"></a>

## ▶️ How to Use

### Backend (Server Side)

### Configure server port in `.env`:

```ini
PORT=4000  
```

Default: `http://localhost:4000`

### Configure SMTP credentials in `.env`:

```ini
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=supersecret
```

### Start Backend

```bash
cd server
npm start
```

### Frontend (Client Side)

### Start Frontend

```bash
cd client
npm run dev
```

Default: `http://localhost:5173`

<a id="contributing"></a>

## 🤝 Contributing

1. Fork and create a branch: `git checkout -b feature/your-feature`.
2. Commit changes: `git commit -m "feat: concise description"`.
3. Push to branch: `git push origin feature/your-feature`.
4. Open a Pull Request.

> Contributions open! 🚀

<a id="license"></a>

## 📝 License

MIT © 2025 YouGotMail
