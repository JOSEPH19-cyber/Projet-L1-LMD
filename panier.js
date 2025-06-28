//---------------------------DECLARATION DES VARIABLES-------------------------------------//

const menu  = document.querySelector(".hamburger-icon"); 
const openMenu = document.querySelector(".menu-list");
const closeMenuBtn = document.querySelector(".close-icon");

//---------------------------DECLARATION DES VARIABLES-------------------------------------//


//----------------------------OUVERTURE DU MENU HAMBURGER----------------------------------//

menu.addEventListener("click", () =>{
    openMenu.classList.add("open");
});

//----------------------------OUVERTURE DU MENU HAMBURGER----------------------------------//


//----------------------------FERMETURE DU MENU HAMBURGER----------------------------------//

closeMenuBtn.addEventListener("click", () =>{
    openMenu.classList.remove("open");
});

//----------------------------FERMETURE DU MENU HAMBURGER----------------------------------//













const tbody = document.getElementById("panier-table-body"); 

let panier = JSON.parse(localStorage.getItem("panier")) || [];

panier.forEach(product => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // Colonnes du tableau (td)
    const td_name = document.createElement("td");
    const td_price = document.createElement("td");
    const td_quantity = document.createElement("td");
    const td_delete = document.createElement("td");
    const td_total = document.createElement("td");

    // Remplir les colonnes avec les données du produit
    td_name.textContent = product.name;
    td_price.textContent = product.price;
    td_quantity.textContent = product.quantity;

    // Créer le bouton de suppression
    const btn_delete = document.createElement("button");
    btn_delete.textContent = "Supprimer";
    td_delete.appendChild(btn_delete);

    // Ajouter les colonnes à la ligne
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_quantity);
    tr.appendChild(td_total)
    tr.appendChild(td_delete);

    // Écouteur sur le bouton "Supprimer"
    btn_delete.addEventListener("click", () => {
        const nom = product.name;
        const prix = product.price;

        //  Confirmation avant suppression
        if (confirm(`Voulez-vous vraiment supprimer ${nom} du panier ?`)) {
            // Supprimer du tableau
            panier = panier.filter(item => !(item.name === nom && item.price === prix));

            // Mettre à jour le localStorage
            localStorage.setItem("panier", JSON.stringify(panier));

            // Supprimer du HTML
            tr.remove();
        }
    });

    btnVider = document.getElementById("vider-panier");

    btnVider.addEventListener("click", () => {
        if(confirm("Voulez-vous vraiment vider tout le panier"))
        {
            localStorage.removeItem("panier");
            tbody.innerHTML = "";

            confirm("Le panier a été vidé.");
        }
    });

    //calcul du total
    let prix = product.price.replace("$", "");
    let prixNum = parseFloat(prix);
    let totalProduit = prixNum * product.quantity;

    td_total.textContent = totalProduit.toFixed(2) + "$";

    // calcul du panier total

    // 1. Cibler la balise <p id="panier-total">
    let total = document.getElementById("panier-total");

    // 2. Initialiser le total général à 0
    let totalgeneral = 0;

    // 3. Parcourir chaque produit du panier
    panier.forEach(product => {
        // Supprimer le symbole $ du prix
        let prix = product.price.replace("$", "");

        // Convertir en nombre
        let prixArt = parseFloat(prix);

        // Ajouter au total général : prix * quantité
        totalgeneral += prixArt * product.quantity;
    });

    // 4. Afficher le total dans la balise <p>
    total.textContent = "TOTAL GENERALE : " + totalgeneral.toFixed(2) + "$";

});
