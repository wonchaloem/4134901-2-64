//Objects are Mutable
let person={
    firstName:"Toey",
    lastName:"Monk",
    age:22,
    sex:"man",

    fullName:function(){
        return this.firstName+ "  " +this.lastName;
    },
};
console.log(person);


const p=person;
p.age=10;
console.log(p);

person.age=20;
console.log(person.age);//value
console.log(person.fullName);//property
console.log(person.fullName());//return


//destructuring เอาค่าที่อยู่ใน ออฟเจค มาใช้งาน
const{firsName,lastName,age:a,sex:s}=person;
console.log(firsName);
console.log(s);

//string 
const S1="Hello World !!";
const S2="My Name is";
const Rname="Toey";
const conCat=S1+S2+Rname;
console.log(conCat);
//``backtick
conCat= ` I
        Love
        IT. ${S2} ${S3}
`;
console.log(conCat);

//spread Op (...)
const A1 = [2,3,4];
const A2 = [5,6,7];
const comArr=[A1,A2];
console.log(comArr);
comArr=[...A1, ...A2];
console.log(comArr);

sum=(...comArr)=>{
    let total=0;
    for(value of comArr) total+=value;
    return total;
};
console.log(sum(comArr));