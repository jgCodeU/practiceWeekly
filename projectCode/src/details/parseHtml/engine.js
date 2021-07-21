export default class Engine {
    render(tmpl, data) {
        // let re = /<(\w+)\s*([^>]*)>([^<]*)<\/\1>/gm;
        // let re = /(\{\{\w\.\w\}\})/gm;
        // let re = /(\{\{(\w+)\.(\w+)\}\})/gm;//用到
        // let re = /\{\{((\w+)|(\w+)\.(\w+))\}\}/gm;//替换数据
        // let re = /\{\{((\w+)|(\w+)\.(\w+))\}\}/gm;
        // let re = /"(\w+)\.(\w+)"/gm//判断条件
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
    }
}
