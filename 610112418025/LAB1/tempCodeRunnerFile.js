function add (a,b){
    return a*b;
}

var addFn= function (a,b){
    return a*b;
};
console.log(add(5,3));
console.log(addFn(4,5));

//es6
const addEs6=(a,b)=> a*b;
let multiAdd=(a,b)=> {
    let c=a*b;
    return c;
}
console.log(addEs6(10,5));