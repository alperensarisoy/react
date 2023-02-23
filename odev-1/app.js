import axios from "axios";

async function getData(sayi) {
    try {
        const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/" +sayi)
        const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?id=" +sayi)

        console.log("USERS : ", users)
        console.log("POSTS : ", posts)
    }
    catch(e) {
        console.log(e)
    }
}


export default getData
