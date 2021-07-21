import Engine from "./engine"

export default class V1 {
    constructor() {
        this.root = null;
        this.engine = new Engine();
    }

    render(template, data) {
        console.log('template',template)
        let dom = this.engine.render(template, data);
        console.log(dom);
        // this.root.appendChild(dom);
        
        
        const childDom = this.parseToDom(dom);
        console.log('hjg--childDom',childDom)
        // document.body.append(childDom);
        this.root.append(childDom)
    }

    mounted(dom) {
        this.root = dom;
        return this;
    }
    parseToDom(htmlString){
        console.log('hjg--htmlString',htmlString)
        const tpl = document.createElement('template');
        tpl.innerHTML = htmlString;
        console.log('tpl222',tpl);
        console.log('tpl-content',tpl.content)
        return tpl.content;
    }
}