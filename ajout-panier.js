//  Sélectionne tous les boutons "Ajouter au panier" de la page
const buttons = document.querySelectorAll(".button");

//  Parcourt chaque bouton individuellement
buttons.forEach(button => {
  //  Ajoute un écouteur d’événement pour le clic
  button.addEventListener("click", () => {

    //  Récupère les informations d’inscription depuis le localStorage
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    //  Si aucun utilisateur n’est inscrit, on bloque l’ajout
    if (!username || !password) {
      alert("Vous n'êtes pas inscrit. Dirigez-vous vers la page contact pour vous inscrire.");
      return; //  Stoppe l’exécution ici
    }

    //  Trouve la carte produit qui contient le bouton cliqué
    const carte = button.closest(".product-card");

    //  Récupère les informations du produit (nom et prix)
    const nom = carte.querySelector(".product-name").textContent;
    const prix = carte.querySelector(".product-price").textContent;

    //  Récupère le panier depuis localStorage (ou tableau vide si rien encore)
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    //  Crée un objet représentant le produit cliqué
    const product = {
      name: nom,
      price: prix,
      quantity: 1 //  Commence avec une quantité de 1
    };

    //  Vérifie si le produit existe déjà dans le panier (même nom + prix)
    let existingProduct = panier.find(item => item.name === product.name && item.price === product.price);

    //  Si le produit existe, on augmente juste la quantité
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      //  Sinon, on ajoute ce nouveau produit au panier
      panier.push(product);
    }

    //  Sauvegarde le panier mis à jour dans localStorage
    localStorage.setItem("panier", JSON.stringify(panier));

    //  Message de confirmation à l'utilisateur
    alert(`Le produit ${nom} a été ajouté au panier.`);
  });
});
