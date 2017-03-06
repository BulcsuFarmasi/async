var request=require('request');
var hget=require('hget');
var marked=require('marked');
var Term=require('marked-terminal');

function getRandomPonyFooArticle(){
    return new Promise((resolve,reject) => {
        request('https://ponyfoo.com/articles/random', (err, res, body) => {
            if(err){
                reject(err);return;
            }
            resolve(body);
        })
    });
}

async function read () {
    var html = await getRandomPonyFooArticle();
    var md = hget(html, {
        markdown: true,
        root: 'main',
        ignore: '.at-subscribe,.mm-comments,.de-sidebar'
    });
    var txt = marked(md, {
        renderer: new Term()
    });
    return txt;
}

async function write(){
    var txt=await read();
    console.log(txt);
}

write();