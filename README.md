
A template for those who want to use Tailwind CSS with Html and JavaScript, in this I have used Vite for the build to be faster and used

``` bash
npm init -y
```
for the installation of Tailwind CSS.

This command builds your **./src/input.css** and generates a **./src/output.css** with the classes used by you in your Html file this way the Vite makes your build optimized and generate only the CSS that is needed for your project for faster page load.

``` .json
"scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css",
    "build": "npm run build:css && vite build",
    "dev": "npm run build:css && vite"
}
```

You can also create more pages in the pages directory, make sure to add them in the 
