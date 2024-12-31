
// Fake api url for products list 
const url="https://fakestoreapi.com/products";

let resultContent=document.getElementById("content");

//function for get product list from fake api url
async function getData(){
    try{
        const response = await fetch(url);  // fetch data from fake api url
        if(!response.ok){                   // when url gives wrong response
            throw new Error(`Response Status: ${response.status}`);
        }

        const json=await response.json();   //get json data

        //create dynamic html elements for showing product list
        let divEle=document.createElement("div");
        let h1Ele=document.createElement("h1");
        h1Ele.innerHTML="Products list";
        divEle.setAttribute("class","subs");
        json.forEach(element => {
            divEle.innerHTML+=`<ul>
            <li>Title : ${element.title}</li>
            <li>Category : ${element.category}</li>
            <li>Price : ${element.price}</li></ul>`;
        });
        resultContent.appendChild(h1Ele);
        resultContent.appendChild(divEle);
    }
    catch(error){                   // catching error
        console.error(error);
    }
    
}
