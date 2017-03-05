/**
 * Created by Dell on 2017. 03. 05..
 */
var request=require('request');

function getRandomPonyFooArticle(){
    return new Promise((resolve,reject) => {
        request('https://ponyfoo.com/articles/random',(err, res, body) => {
            if(err){
                reject(err);return;
            }
            resolve(body);
        })
    });
}