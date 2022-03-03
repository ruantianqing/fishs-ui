import "./index.scss";
import "./lib/gulu.scss";

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './assets/svg.js'
import 'github-markdown-css'

import Markdown from './components/Markdown.vue';






createApp(App)
  .use(router, Markdown)
  // .use(Markdown)
  .mount('#app')
// app.component("Markdown", Markdown)

  
