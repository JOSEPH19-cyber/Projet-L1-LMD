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



//----------------------------FORMULAIRE D'ENREGISTREMENT---------------------------------//

const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.querySelector(".message");

    // Vérification du mot de passe
    const isNumeric = /^\d+$/.test(password);

    if (!isNumeric || password.length < 4) {
        message.textContent = "Le mot de passe doit contenir au moins 4 chiffres.";
        message.style.color = "white";
        form.reset();
        return; 
    }

    // Vérification des données déjà stockées
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername === username) {
        if (savedPassword === password) {
            // Même nom, même mot de passe → déjà inscrit
            message.textContent = "Vous êtes déjà inscrit(e).";
            message.style.color = "white";
            form.reset();
        } else {
            // Même nom, mot de passe différent → proposer mise à jour
            const confirmUpdate = confirm("Ce mot de passe est différent. Voulez-vous le mettre à jour ?");
            if (confirmUpdate) {
                localStorage.setItem("password", password);
                message.textContent = "Mot de passe mis à jour avec succès.";
                message.style.color = "white";
                form.reset();
            } else {
                message.textContent = "Mot de passe non modifié.";
                message.style.color = "white";
                form.reset();
            }

        }
    } else if (savedUsername === null) {
        // Aucun utilisateur enregistré → enregistrement
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        message.textContent = "Inscription réussie !";
        message.style.color = "white";
        form.reset();
    } else {
        // Un autre utilisateur est déjà inscrit dans ce navigateur
        message.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        message.style.color = "white";
        form.reset();
    }

});


