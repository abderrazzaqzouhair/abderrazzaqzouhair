table = [{"ISBN":"01234","titre":"Langage C","image":"langagec.jpg","prix":150},{"ISBN":"56789","titre":"Programmation Javascript","image":"javascript.jpg","prix":250},{"ISBN":"11778","titre":"Laravel","image":"laravel.jpg","prix":200}]

function charger(){ 
    let select = document.getElementById("select");
    table.forEach(element => {
        let option = document.createElement("option");
        option.value = element.titre;
        option.innerHTML = element.titre
        select.appendChild(option)
        
    });
}
charger()
function afficher() {
    let select = document.getElementById("select");
    select.onchange = function() {
        let isbn = document.getElementById("isbn") ;
        let title = document.getElementById("title") ;
        let image = document.getElementById("image") ;
        let prix = document.getElementById("prix") ;
        table.forEach(element =>{
            if (element.titre == select.value){
                isbn.innerHTML= "isbn  :" + element.ISBN;
                title.innerHTML= "title : " + element.titre;
                image.src = element.image;
                prix.innerHTML= "prix : " + element.prix + " DH";
                

            }
            
        })
        

    };
}
afficher()
let panier = [];
let id = 0
function ajouter(){
    let select = document.getElementById("select");
    panier.push({id:id, name:select.value});
    id++
    let prix = 0 ;
    let prixx = document.getElementById("ll");
    panier.forEach(element=>{
        table.forEach(ele =>{
            if (element == ele.titre){
                prix += ele.prix;
            }
        })
    })
    console.log(panier)
    prixx.innerHTML = "le prix totle est :  " + prix;   


    
}


function retirer(){
    let select = document.getElementById("select");
    let prix = 0 ;
    let prixx = document.getElementById("ll");
    panier.forEach((element, ind)=>{
        if(element == select.value){
            panier.splice(ind, 1)
        }
        table.forEach(ele =>{
            if (element == ele.titre){
                prix += ele.prix;       
            }
        })
    })
    prixx.innerHTML = "le prix totle est :  " + prix;  



}

