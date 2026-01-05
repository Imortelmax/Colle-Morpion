# Colle Morpion

## Description
Ce projet est une application web de jeu de **Morpion** (Tic-Tac-Toe) classique, permettant à deux joueurs de s'affronter sur une interface interactive.

## Fonctionnalités
* **Système de jeu complet** : Alternance entre le Joueur 1 (X) et le Joueur 2 (O).
* **Détection de victoire et match nul** : Le script vérifie automatiquement les combinaisons gagnantes après chaque coup.
* **Compteur de scores** : Suivi des victoires pour chaque joueur affiché dynamiquement.
* **Interface immersive** :
    * Design moderne avec une grille de 3x3 cellules.
    * Effets sonores pour les actions de jeu et la victoire (utilisant `win.mp3`, `cling.mp4` et `crayon.mp4`).
    * Affichage dynamique du tour actuel du joueur.
* **Bouton Rejouer** : Permet de réinitialiser la grille et de recommencer une partie sans recharger la page.

## Structure du projet
* `index.html` : Définit la structure de la page, la grille de jeu et les contrôles.
* `styles/main.css` : Gère la mise en page (Flexbox), les animations de victoire et l'aspect visuel global.
* `scripts/morpion.js` : Contient toute la logique du jeu, la gestion des événements de clic et les conditions de victoire.
* `assets/` : Contient les fichiers multimédias comme l'icône de favori (`favicon.ico`) et le son de victoire (`win.mp3`).

## Technologies utilisées
* **HTML5** : Structure de l'application.
* **CSS3** : Design responsive et animations.
* **JavaScript (ES6)** : Logique métier et manipulation du DOM.

## Installation et Utilisation

### En local
1.  Ouvrez le dossier du projet.
2.  Lancez le fichier `index.html` dans votre navigateur web.

### Avec Docker
Si vous utilisez la configuration Nginx recommandée :
1.  **Construire l'image** :
    ```bash
    docker build -t morpion-app .
    ```
2.  **Lancer le conteneur** :
    ```bash
    docker run -d -p 8080:80 morpion-app
    ```
3.  Accédez au jeu via `http://localhost:8080`.