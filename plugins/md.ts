const fileRegex = /\.(md)$/

//将md文件解析成vue能识别的组件
const compileSFC = require('@vue/compiler-sfc');
const compileDOM = require('@vue/compiler-dom')

//解析md文件
const Hyperdown = require('hyperdown');

const  marked  = require('marked').marked

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export default function markdownLoader() {
    return {
        //插件名字
        name: 'markdown-loader',
        transform(src, id) {
            //判断是不是md结尾的文件
            if (fileRegex.test(id)) {
                //将md文件内容转成html，这个转换的插件也是可以自己写
                let hyperdown = new Hyperdown();
                // let html = hyperdown.makeHtml(src);
                let html = mdToJs(src)

                //生成vue能解析的格式
                // const ret = compileSFC.parse(`<template><div>${html}</div></template>`);
                // const code = compileDOM.compile(ret.descriptor.template.content, { mode: 'module' }).code;
                // const render = `${code};
                // let __script = {};
                // __script.render = render;
                //   export default __script;`
                return {
                    code: html,
                    map: null
                }
            }
        },
    }
}
