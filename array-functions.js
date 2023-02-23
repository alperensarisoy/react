const users = [
    {name: "Mehmet",
    age:18
}, {name:"Mehmet",
    age:25
}, {name: "Murat",
   age:31}];
//push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

//map

// users.map((item)=>{

//     console.log(item.name);
// })

// find

// const findIt= users.find((item)=>item.name=="Mehmet"&& item.age>20);
// console.log(findIt);

//filter

// const filtered= users.filter((item) => item.name =="Mehmet"&& item.age<20) ;
// console.log(filtered);

// some

// const some= users.some(item => item.age==18);
// console.log(some);


//every

// const every= users.every((item)=>item.age>32);
// console.log(every);

//includes

const meyveler =["elma", "armut","muz"];

const isIncluded = meyveler.includes("muz");

console.log(isIncluded);