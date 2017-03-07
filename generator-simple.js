/**
 * Created by Dell on 2017. 03. 06..
 */

function* generator(){
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

var gen=generator();

gen.next();
gen.next("Leonard");
gen.next("Penny");
gen.next("Hofstadter");