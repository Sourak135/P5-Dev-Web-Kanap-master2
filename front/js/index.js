/**
fetch(`http://localhost:3000/api/products`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(erreur => alert ("erreur accès API :("));
*/
 

/**
let p = document.createElement("p");
document.getElementById("items").appendChild(p);
p.innerHTML = "test";
*/

/**
fetch(`http://localhost:3000/api/products`,{method: "GET" 
    })
    .then(res=>res.json())
    .then(item=>console.log(item[0].imageUrl));
console.log(items);
*/

/**
let items = fetch(`http://localhost:3000/api/products`,{method: "GET" 
    })
    .then(res=>res.json())    
    .then(item=> {
        h3.innerText = `(item[0].price)`           
    }); 
//console.log(items);
*/

/**

fetch(`http://localhost:3000/api/products`)
    .then(res=>res.json())
    .then((items)=>{
        console.log(items);
        produits(items);
    })
    .catch((error)=>{
        console.log("erreur 404 cm" + error);
    })

function produits(index){
    let zoneArticle = document.querySelector("#items");
    for(let article of index){
        zoneArticle.innerHTML += `<a href="./product.html?id=42">
        <article>
            <img src="${article.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
            <h3 class="productName">Kanap name1</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
      </a>`;}        
    }

*/

fetch(`http://localhost:3000/api/products`)
    .then(res=>res.json())
    .then((items)=>{
        produits(items);
    })
    .catch(erreur => alert ("erreur accès API :("));
 
function produits(index){
   let zoneArticle= document.getElementById("items");
    for (article of index){
        zoneArticle.innerHTML += `<a href="./product.html?id=${article._id}">
        <article>
            <img src="${article.imageUrl}" alt="${article.altTxt}">
            <h3 class="productName">${article.name}</h3>
            <p class="productDescription">${article.description}</p>
        </article>
      </a>`;
    }    
}


