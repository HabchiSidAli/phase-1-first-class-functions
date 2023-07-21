function hello (){
    console.log('hello guys');
}

function receivesAFunction (hello) {
    hello();
}

function returnsANamedFunction (){
    return function namedFunction () {
        console.log('we meet again');
    }
}

function returnsAnAnonymousFunction(){
        return (() => console.log("Stretch! Work that core!"));
}