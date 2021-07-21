import { Vnode } from "./vnode";
export default class Engine {
    render(tmpl, data) {
        let re = /\{\{((\w+)|(\w+)\.(\w+))\}\}|"(\w+)\.(\w+)"/gm;//替换数据
        while (re.test(tmpl)) {
            tmpl = tmpl.replace(re, (s0, s1, s2, s3,s4,s5,s6) => {
                console.log('data',data)
                console.warn('hjg--engine','s0',s0,'s1',s1,'s2',s2,'s3', s3,'s4',s4,'s5',s5,'s6',s6);
                if(s2) {
                    return data[s2]
                } 
                if(s3){
                    return data[s3][s4];
                }
                if(s5){
                    return data[s5][s6];
                }
                
                // return '123'
            });
        }
        console.log("result result>>", tmpl);
        return tmpl;

        
    }
}

// function parseToDom(htmlString){
//     const tpl = document.createElement('template');
//     tpl.innerHTML = htmlString;
//     return tpl.content;
// }

// const el = parseToDom('<h1>123</h1>');
// document.body.append(el);