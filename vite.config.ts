import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import markdownLoader from './plugins/md'
const path = require('path')

// import path from "path";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";


const vitePluginVue = {
  name: "demo",
  transform(code, id) {
    if (
      !/\/src\/components\/.*\.demo\.vue/.test(id) ||
      !/vue&type=demo/.test(id)
    ) {
      return;
    }

    let path = `.${id.match(/\/src\/components\/.*\.demo\.vue/)[0]}`;
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find(n => n.tag === "demo");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [markdownLoader(), vue(), ViteComponents({
    customComponentResolvers: [AntDesignVueResolver()],
  }), vitePluginVue],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'type': path.resolve(__dirname, './src/type')
    }
  },
})


// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// // import vitePluginMd2Vue from "./plugins/md";
// import vitePluginMd2Vue from "vite-plugin-md2vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vitePluginMd2Vue()]
// })


