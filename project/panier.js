//---------------------------------- MENU HAMBURGER ----------------------------------//

const menu  = document.querySelector(".hamburger-icon"); 
const openMenu = document.querySelector(".menu-list");
const closeMenuBtn = document.querySelector(".close-icon");

menu.addEventListener("click", () => {
    openMenu.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
    openMenu.classList.remove("open");
});



//---------------------------------- PANIER ----------------------------------//

const tbody = document.getElementById("panier-table-body");
const totalPanier = document.getElementById("panier-total");
const btnVider = document.getElementById("vider-panier");

let panier = JSON.parse(localStorage.getItem("panier")) || [];

//  Affichage des produits du panier
panier.forEach(product => {
    
    const tr = document.createElement("tr");
    const td_name = document.createElement("td");
    const td_price = document.createElement("td");
    const td_quantity = document.createElement("td");
    const td_total = document.createElement("td");
    const td_delete = document.createElement("td");

    // Remplir les colonnes
    td_name.textContent = product.name;
    td_price.textContent = product.price;
    td_quantity.textContent = product.quantity;

    //  Calculer le total pour ce produit
    let prix = product.price.replace("$", "");
    let prixNum = parseFloat(prix);
    let totalProduit = prixNum * product.quantity;
    td_total.textContent = totalProduit.toFixed(2) + "$";

    //  Créer le bouton de suppression
    const btn_delete = document.createElement("button");
    btn_delete.textContent = "Supprimer";
    td_delete.appendChild(btn_delete);

    //  Ajouter les colonnes à la ligne
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_quantity);
    tr.appendChild(td_total);
    tr.appendChild(td_delete);

    tbody.appendChild(tr);

    //  Événement sur le bouton Supprimer
    btn_delete.addEventListener("click", () => {
        const nom = product.name;
        const prix = product.price;

        if (confirm(`Voulez-vous vraiment supprimer ${nom} du panier ?`)) {
            //  Supprimer du tableau
            panier = panier.filter(item => !(item.name === nom && item.price === prix));

            //  Mettre à jour le localStorage
            localStorage.setItem("panier", JSON.stringify(panier));

            //  Mettre à jour le total général
            updateTotal();

            //  Supprimer la ligne du tableau HTML
            tr.remove();
        }
    });
});

//  Événement sur le bouton "Vider le panier"
btnVider.addEventListener("click", () => {
    if (confirm("Voulez-vous vraiment vider tout le panier ?")) {
        localStorage.removeItem("panier");
        tbody.innerHTML = "";
        totalPanier.textContent = "TOTAL GENERALE : 0.00$";
        alert("Le panier a été vidé.");
    }
});

//  Fonction de mise à jour du total général
function updateTotal() {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let totalgeneral = 0;

    panier.forEach(product => {
        let prix = product.price.replace("$", "");
        let prixNum = parseFloat(prix);
        totalgeneral += prixNum * product.quantity;
    });

    totalPanier.textContent = "TOTAL GENERALE : " + totalgeneral.toFixed(2) + "$";
}

//  Calcul initial du total au chargement de la page
updateTotal();
