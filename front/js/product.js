fetch(`http://localhost:3000/api/products`)
    .then(res=>res.json())
    .then((items)=>{
        trouverProduit(items);
    })
    .catch(erreur => alert ("erreur accès API :("));
 
let str = window.location.href; //récupère url de la page courante
let url = new URL(str); //transforme url pour qu'elle soir exploitable avec searchParams
let id = url.searchParams.get("id"); //récupère l'id dans l'adresse
console.log(id);

function trouverProduit(index){  

    for (article of index){     
        console.log(id);
        if (`${article._id}`== id){
            let imageProduit = document.getElementById("item__img");
            imageProduit.innerHTML += `<img src="${article.imageUrl}" alt="${article.altTxt}">`; 
            let titreProduit = document.getElementById("title");
            titreProduit.innerHTML += `${article.name}`;
            let prixProduit = document.getElementById("price");
            prixProduit.innerHTML += `${article.price}`;
            let descriptionProduit = document.getElementById("description"); 
            descriptionProduit.innerHTML += `${article.description}`;
            let couleurProduit = document.getElementById("colors");            
            for(let i=0; i<article.colors.length; i++){
                couleurProduit.innerHTML += `<option value="${article.colors[i]}">${article.colors[i]}</option>`;
            }
            break;
        }                
    }   
}

//choix couleur
//choix quantité
//bouton commander

//a réfléchir!!!
let panier = [{id, quantite, couleur}];

let panierTemporaire = [{id, quantite, couleur}];

function commande(id, quantite, couleur){
    this.id=id
    this.quantite=quantite
    this.couleur=couleur
}

//fonction comparer les id et couleurs des objets
//

new commande()
//tableau tempo
//tri
//tableau tempo

//dans autre js
//push
//tableau définitif

push //-> sauve local storage (json stringify)

let quantite = 0;
let couleur = "${article.colors[0]";

function ajoutProduit(id,quantite,couleur){    
    if((id == panier.id) && couleur == panier.couleur){
        panier.quantite+=quantite;
    }
    

}



document.getElementById(id).addEventListener("click", function(e) {

});
 