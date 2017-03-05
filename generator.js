var request=require('request');
var hget=require('hget');
var marked=require('marked');
var Term=require('marked-terminal');

function getRandomPonyFooArticle(gen){
    var g=gen();
    request('https://ponyfoo.com/articles/random',(err,res,body) => {
        if(err){
            g.throw(err);return;
        }
        g.next(body)
    });
}

getRandomPonyFooArticle(function* printRandomArticle(){
    var html=yield;
    console.log('a');
    var md=hget(html, {
        markdown:true,
        root:'main',
        ignore:'.at-subscribe,.mm-comments,.de-sidebar'
    });
    console.log(md);
    var txt= marked(md,{
        renderer: new Term()
    });
    console.log(txt);
})