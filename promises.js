// const getComments =(number) =>{

import axios from "axios";

//     return new Promise((resolve,reject)=> {


//         if(number==1){
//         resolve("Comments");
//     }
//         reject("Bir problem oluştu");
//     });


// };

// getComments(2)
// .then((data) => console.log(data))
// .catch((e) => console.log(e));
//*************************************************************** */
// const getUsers =() =>{

//     return new Promise(async(resolve,reject)=> {

//         const {data} = await axios("https://jsonplaceholder.typicode.com/users");
//         resolve(data);

//     });

// };

// const getPost =(postid) =>{

//     return new Promise(async(resolve,reject)=> {

//         const {data} = await axios("https://jsonplaceholder.typicode.com/posts/1"+postid);
//         resolve(data);

//     });

// };


// (async()=>{

//     try{
//         const users=await getUsers();
//         const post=await getPost(1);
    
//         console.log(users);
//         console.log(post);
//     }
//     catch(e){
//         console.log(e);
//     }

    

// })();
/***************************************************** */


const getUsers =() =>{

    return new Promise(async(resolve,reject)=> {

        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);

        //reject("Bir Sorun Oluştu");

    });

};

const getPost =(postid) =>{

    return new Promise(async(resolve,reject)=> {

        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/1"+postid);
        resolve(data);

    });

};


Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log);
