# Quool Solutions Web App

A premium, modern marketing website for **Quool Solutions**, built with high-performance standards, sleek design aesthetics, and a smooth user experience.

---

## 🚀 Tech Stack & Core Libraries

- **Frontend Library:** [React 19](https://react.dev/) (Functional components, Hooks, and modern React design patterns).
- **Build Tooling:** [Vite 8](https://vite.dev/) (Extremely fast hot-module replacement and optimized asset bundling).
- **Styling:** Vanilla CSS (Tailored HSL color palettes, custom grid/flex layouts, and interactive micro-animations).
- **Iconography:** [Lucide React](https://lucide.dev/) (Clean, modern SVG vectors for clean visuals).

---

## 🛠️ Infrastructure & Services

This project is configured with a fully automated, modern deployment pipeline and cloud services:

- **Version Control & Collaboration:** Hosted on [GitHub](https://github.com/) at [hbasare/quoolsolutions](https://github.com/hbasare/quoolsolutions).
- **Hosting Platform:** [Vercel](https://vercel.com/) (Free tier CDN, providing automatic build previews for pull requests and instant production deployments on pushes to `main`).
- **Domain Registry:** [GoDaddy](https://godaddy.com/) (Managing the custom domain `quoolsolutions.ca`).
- **SSL / Security:** Automatically provisioned and renewed with a free Let's Encrypt SSL certificate via Vercel.
- **Contact Form Handling:** Powered by [Web3Forms](https://web3forms.com/) (Allows submissions from the contact form to be delivered directly to your email address without needing a custom database or server).

---

## 📂 Project Structure

```
quoolsolutions-web/
├── public/                  # Static assets (Favicons, shared SVG maps)
├── src/
│   ├── assets/              # Component-specific images and branding assets
│   ├── components/          # Reusable UI sections
│   │   ├── ContactSection.jsx (and .css)
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MethodologySection.jsx
│   │   ├── Navbar.jsx
│   │   └── ServicesSection.jsx
│   ├── App.jsx              # Application root layout assembly
│   ├── App.css              # Global layout styles
│   ├── index.css            # Base stylesheet containing design system & variables
│   └── main.jsx             # React entry mount point
├── index.html               # Main HTML shell
├── package.json             # Scripts, dependencies, and configuration
└── vite.config.js           # Vite configuration settings
```

---

## 💻 Local Development

Follow these steps to run the application locally on your machine:

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Git](https://git-scm.com/)

### 2. Installation & Setup
Clone the repository:
```bash
git clone https://github.com/hbasare/quoolsolutions.git
cd quoolsolutions-web
```

Install dependencies:
```bash
npm install
```

### 3. Available Scripts
Inside the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- **`npm run build`**: Builds the app for production to the `dist` folder. It bundles and optimizes the code for the best performance.
- **`npm run preview`**: Locally previews the production build.
- **`npm run lint`**: Runs ESLint to find and fix code style/linting errors.

---

## 🌐 Deployment Pipeline (CI/CD)

The project utilizes automated CI/CD integrated directly with **Vercel**:
1. Every time a commit is pushed to the `main` branch, Vercel automatically fetches the code.
2. Vercel runs `npm run build` to compile the React application down to static files in the `dist` folder.
3. The built files are distributed to Vercel's global Edge Network.
4. Your website is instantly accessible globally via [quoolsolutions.ca](https://quoolsolutions.ca).
