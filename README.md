# ⚡ Spark 

Spark is a modern template designed to ignite your development workflow with Vite and Tailwind CSS. It offers a streamlined setup for fast, optimized builds and an efficient development experience, helping you create stunning web applications with ease. 

Follow the instructions below to get started.

## 🚀 Getting Started

To initialize your project, run:

```bash
npm init -y
```

### 🛠️ Install Dependencies

Install the necessary dependencies:

```bash
npm install tailwindcss
npm install --save-dev vite glob
npx tailwindcss init
```

This configuration sets up Tailwind CSS to build your **./src/input.css** and generate **./src/output.css** with only the classes used in your HTML files, optimizing performance and page load times.

## 📂 Project Configuration

Define the following scripts in your `package.json`:

```json
"scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css",
    "build": "npm run build:css && vite build",
    "dev": "npm run build:css && vite",
    "preview": "vite preview",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Create a `vercel.json` if it doesn't exists in your project and add this code:

``` json
{
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/pages/:path*.html"
    }
  ]
}
```

## 🏗️ Build & Development

To start the development server, run:

```bash
npm run dev
```

This will serve the project with Vite’s development features, including hot module replacement (HMR).

To create a production build, use:

```bash
npm run build
```

This command generates optimized production assets ready for deployment.

To preview the production build locally, use:

```bash
npm run preview
```

## 📝 Fixed Issues and Ongoing Improvements

### ✅ Fixed Issues

- **Manual Page Updates**: Previously, adding new pages required manual updates to **vite.config.js**. This has been resolved with dynamic page inclusion in `index.js`.

### 🔧 Ongoing Improvements

- **Dynamic Page Handling**: The system now dynamically locates and includes `.html` files from the `pages` directory. Future enhancements may include improved error handling and performance optimizations.

## 🤝 Contributions and Feedback

We welcome contributions and feedback from the community! Your input helps us enhance and refine this template. Explore the project, report issues, and submit pull requests. Together, we can improve this development experience.

Thank you for using the Lighted Template for your Tailwind CSS and Vite projects. We look forward to seeing what you build!
