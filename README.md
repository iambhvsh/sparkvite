# Introduction

This template is designed for developers who want to seamlessly integrate Tailwind CSS with HTML and JavaScript, leveraging Vite for accelerated build times and optimized performance. To get started, initialize your project with the following command:

```bash
npm init -y
```

This command sets up Tailwind CSS, which builds your **./src/input.css** and generates **./src/output.css** with only the classes used in your HTML files. By using Vite, the build process is optimized, ensuring that only the necessary CSS is included, resulting in faster page loads and improved performance.

## Project Configuration

To streamline your development workflow, the following scripts have been defined in your `package.json`:

```json
"scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css",
    "build": "npm run build:css && vite build",
    "dev": "npm run build:css && vite"
}
```

### Adding New Pages

To add additional pages to your project, create them in the `pages` directory and ensure their paths are included in **vite.config.js**:

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html')
      }
    }
  }
});
```

## Getting Started

To begin using this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/iambhvsh/lighted.git
cd lighted
npm install
npm run dev
```

This will start the development server. For production builds, use:

```bash
npm run build
```

## Future Enhancements

Currently, each new page requires manual updates to the **vite.config.js** file to specify its path. I am actively working on an enhancement to automate this process by dynamically locating all `.html` files and setting up their paths automatically. This improvement aims to simplify the configuration process, allowing for more efficient development.

## Contributions and Feedback

We welcome contributions and feedback from the community. Your input is invaluable in helping us improve and refine this template. Feel free to explore the project, report issues, and submit pull requests. Together, we can create a more efficient and robust development experience.

Thank you for choosing this template for your Tailwind CSS and Vite projects. We look forward to seeing what you build!
