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
    }

    mounted(dom) {
        this.root = dom;
        return this;
    }
}