//setTimeout(()=>{
//console.log("Merhaba");
//}, 5000);


// setInterval (()=>{

//     console.log("Merhaba ben her saniye çalışacağım");

// },1000);

/**********************************************/

// const sayHi= (cb)=> {

//     cb();
// }
// sayHi(()=> {
//     console.log("Hello");
// });

// ***************************************
// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) =>console.log(users));
// *****************************************
// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) =>{

// console.log("users Yüklendi", users);
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(data =>data.json())
// .then(posts => console.log("postlar yüklendi",posts));
// });

// *************************************************

// import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) =>{

// console.log("users Yüklendi", users);
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(data =>data.json())
// .then(posts =>{ console.log("post 1 yüklendi",posts)
// fetch("https://jsonplaceholder.typicode.com/posts/2")
// .then((data) => data.json())
// .then(data => console.log("Post 2 yüklendi",data));

// });
// });


// ************************************************

// async function getData(){
//     const users=await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1=await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2=await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();




//     console.log("users",users);
//     console.log("post1",post1);
//     console.log("post2",post2);
// }

// getData();

// ********************************************

import axios from "axios";


(async ()=>{
    const {data:users}=await axios("https://jsonplaceholder.typicode.com/users");

    const {data:post1}=await axios("https://jsonplaceholder.typicode.com/posts/1");

    const {data:post2}=await axios("https://jsonplaceholder.typicode.com/posts/2");




    console.log("users",users);
    console.log("post1",post1);
    console.log("post2",post2);
})();
