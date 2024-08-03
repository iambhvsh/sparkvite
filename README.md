# ⚡ SparkVite

Welcome to **SparkVite** — the sophisticated template crafted to supercharge your development process using Vite and Tailwind CSS. Designed for seamless integration and performance, SparkVite accelerates your development workflow, enabling the creation of visually stunning and highly optimized web applications.

## 🚀 Getting Started

### Clone the Repository

To get started, clone the SparkVite repository with:

```bash
git clone https://github.com/iambhvsh/sparkvite.git
```

### Install Dependencies

Navigate to your project directory and install the necessary dependencies:

```bash
npm install
```

### Initial Setup

Begin by editing `index.html` for initial configurations. To add new pages, simply create a new `.html` file in the `pages` directory.

## 📂 Project Configuration

To streamline your build and development processes, configure the following scripts in your `package.json`:

```json
"scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css",
    "build": "npm run build:css && vite build",
    "dev": "npm run build:css && vite",
    "preview": "vite preview",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

### Vercel Deployment Configuration

For Vercel deployments, ensure you have a `vercel.json` file in your project root with the following configuration:

```json
{
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/pages/:path*.html"
    },
    {
      "source": "/(.*)",
      "destination": "/pages/404.html"
    }
  ]
}
```

## 🏗️ Build & Development

### Development Server

Launch the development server with:

```bash
npm run dev
```

This command starts Vite’s development server with hot module replacement (HMR) for a smooth development experience.

### Production Build

To generate a production-ready build, execute:

```bash
npm run build
```

This creates optimized assets for deployment.

### Local Preview

Preview your production build locally with:

```bash
npm run preview
```

## 📝 Fixed Issues and Ongoing Enhancements

### ✅ Fixed Issues

- **Page Management**: Manual updates to `vite.config.js` were previously required to add new pages. This has been streamlined with dynamic page handling in `index.js`.

### 🔧 Ongoing Enhancements

- **Dynamic Page Integration**: The template dynamically includes `.html` files from the `pages` directory. Future improvements will focus on refining error handling and enhancing performance.

## 🤝 Contributions and Feedback

We value community contributions and feedback! Your insights and suggestions help us continually enhance SparkVite. Explore the project, report issues, and contribute through pull requests. Together, we can elevate this development experience.

- **Report Issues:** [Open an Issue](https://github.com/iambhvsh/sparkvite/issues)
- **Fork the Repository:** [Fork SparkVite](https://github.com/iambhvsh/sparkvite)

Thank you for choosing SparkVite. We look forward to seeing the amazing projects you create! 🚀✨
