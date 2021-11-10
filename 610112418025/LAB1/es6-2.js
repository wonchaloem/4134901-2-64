//array
const cars=["Toyota","Kubota","Mazda"];
const planes=[];
planes[4]="F16";
planes[1]="Boing777"; 
console.log(cars);
console.log(planes);
const citites=new Array("Buriram",31000);
console.log(citites[1]);

//Array Medthod
let car = cars.pop;
console.log(cars);
cars.push("Honda");
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Tata");
console.log(cars);

const jpCars=cars.slice(1,3);
console.log(jpCars);
cars.splice(1,1,"Subaru","Lexus");
console.log(cars);

//concat
const mixArr=cars.concat(planes);
console.log(mixArr);
const mixString=mixArr.toString();
console.log(mixString);

//for of
for(let value of mixArr){
    console.log(value);
}
console.log(mixArr.length);
for(let index of mixArr.keys()){
    console.log(index);
}

//forEach
let text="";
mixArr.forEach(conString);
console.log(text);

function conString(value,index,arry){
    text+=value+":";
}

//mapfuntion รวมข้อมูล
const numbs=[10,20,15,5,2];
const numbs2=numbs.map(multi2)
console.log(numbs2);

function multi2(value,index,array){
    return value*3;
}

//filter กรอกข้อมูล
const over15=numbs2.filter(over10fn)
console.log(over15);

function over10fn(value){
    return value>15;
}