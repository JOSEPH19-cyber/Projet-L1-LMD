# N-store

Bienvenue sur le projet **N-store**, un site de présentation d’articles de mode (maillots, cargos, baskets) avec possibilité d’ajout au panier.

## Présentation

Ce projet a été développé dans le cadre d’un exercice universitaire entre **mi-mai et fin juin 2025**.  
Il met en œuvre des technologies fondamentales du web pour créer un site e-commerce simple, dynamique et responsive.

## Lien de visualisation

[Accéder au site en ligne](https://joseph19-cyber.github.io/Projet-L1-LMD/)

## Objectif du projet

- Présenter la collection d’articles de la boutique N-store.
- Permettre aux utilisateurs d’ajouter des produits au panier.
- Gérer les produits ajoutés avec `localStorage` (stockage local).
- Offrir une navigation fluide avec un menu responsive.

## Technologies utilisées

- **HTML5** : structure des pages
- **CSS3** : mise en forme et responsive design
- **JavaScript** : interactivité, gestion du panier
- **LocalStorage** : sauvegarde des produits ajoutés
- **Git & GitHub** : versionnement du projet et hébergement en ligne

## Fonctionnalités

- Navigation entre pages (maillots, cargos, baskets, contact, panier…)
- Menu responsive avec hamburger et overlay
- Formulaire d’inscription (avec nom d’utilisateur et mot de passe)
- Stockage des utilisateurs dans le `localStorage`
- Ajout d’un produit au panier
- Incrémentation de la quantité si un produit est ajouté plusieurs fois
- Suppression d’un seul article ou vidage complet du panier
- Calcul dynamique du total général du panier
- Rendu responsive (mobile, tablette, desktop)

## Limites actuelles

- Pas de base de données réelle (tout est stocké dans le navigateur)
- Aucun système de connexion réelle ni vérification serveur
- Pas d’envoi de formulaire (pas de traitement backend)
- Les produits ne sont pas filtrés ni classés par catégorie dynamique
- Les informations utilisateur ne sont pas sécurisées (localStorage = accessible)

## Guide d’utilisation

1. Ouvrir le site depuis ce lien : [https://joseph19-cyber.github.io/Projet-L1-LMD/](https://joseph19-cyber.github.io/Projet-L1-LMD/)
2. Naviguer dans les sections (Maillots, Cargos, Baskets) pour découvrir les articles
3. Cliquer sur **“Ajouter au panier”** pour ajouter un article
4. Si vous n’êtes pas encore inscrit, une alerte vous demandera de remplir le formulaire dans la page **Contact**
5. Une fois inscrit, retournez sur les pages produit pour ajouter des articles
6. Rendez-vous sur la page **Panier** pour :
   - Voir la liste des articles
   - Supprimer un seul produit ou vider tout le panier
   - Consulter le **montant total** automatiquement calculé

## Arborescence du projet

Projet-L1-LMD/
│
├── projet/
│   ├── index.html
│   ├── maillots.html
│   ├── cargos.html
│   ├── baskets.html
│   ├── panier.html
│   ├── contact.html
│   ├── style.css
│   ├── panier.js
│   ├── images/
│   │   └── ...
│
├── docs/
│   └── cahier-des-charges.pdf
│
├── README.md  
└── .gitignore

## Auteur

Développé par **Mbiki Mahenzi Joseph**, étudiant en L1 LMD.

---

> Ce projet est encore en amélioration. N’hésitez pas à faire un `fork` ou à l’utiliser comme base pour vos propres travaux.
