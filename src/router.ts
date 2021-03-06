import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
// import SwitchDemo from "./components/SwitchDemo.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemoVue from "./components/DialogDemo.vue";
import TabsDemo from './components/TabsDemo.vue'
import CheckBoxDemo from './components/CheckBoxDemo.vue'
import InputDemoVue from "./components/InputDemo.vue";
import InputNumberDemoVue from "./components/InputNumberDemo.vue";
import SelectDemo from './components/SelectDemo.vue'
import LayoutDemo from "./components/LayoutDemo.vue";
import CarouselDemo from "./components/CarouselDemo.vue";


import { h } from 'vue'
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'


const history = createWebHashHistory()
const md = (string: any) => h(Markdown, { content: string, key: string })
// const md = (string) => h(Markdown, { class: 'bar', innerHTML: 'hello' })


export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemoVue },
        { path: "tabs", component: TabsDemo },
        { path: "checkbox", component: CheckBoxDemo },
        { path: "input", component: InputDemoVue },
        { path: "inputNumber", component: InputNumberDemoVue },
        { path: "select", component: SelectDemo },
        { path: "layout", component: LayoutDemo },
        { path: "carouse", component: CarouselDemo },


      ]
    }
  ]
})