import { defineConfig } from 'vite';
import { resolve } from 'path';
import glob from 'glob';

function getHtmlFiles(dir) {
  const files = glob.sync(`${dir}/**/*.html`);
  const inputFiles = {};
  files.forEach(file => {
    const name = file.replace(`${dir}/`, '').replace('.html', '').replace(/^\//, '');
    inputFiles[name] = resolve(__dirname, file);
  });
  return inputFiles;
}

const inputFiles = {
  main: resolve(__dirname, 'index.html'),
  ...getHtmlFiles('pages')
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputFiles
    }
  }
});
