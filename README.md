▪︎ Khan Talha SCO  
▪︎ Bouhadjera Mohammed Arslène MIAGE
▪︎ Sylla Sidi MIAGE

Étape 01 : Initialisation du Projet

- Création du projet Hono avec BUN.
- Initialisation du dépôt Git et création de branches pour chaque étape.
- Mise en place de la structure de dossiers.
- Création des fonctions utilitaires toSlug et generateRandomNumberId.
- Création des types et modèles pour City, Parking, Spot, et Park.
- Création de la pseudo base de données statique.

Étape 02 : Mise en Place de l'Architecture MVC

- Création des routes et contrôleurs pour la gestion des parkings et des villes.
- Création des vues HTML dynamiques avec TSX (composant layout est utilisé dans les fichiers tsx ).
- Gestion des erreurs HTTP et personnalisation des pages d'erreur (erreur externe (users) et erreurs internes) .



Étape 03 : Base de Données SQLite

- Installation et configuration de SQLite.
- Installation et configuration de Prisma pour faciliter les interactions avec la base de données.
- Création et remplissage des tables de la base de données.
- Adaptation des contrôleurs pour effectuer des requêtes SQL.
- Gestion asynchrone des requêtes et des erreurs.


Étape 04 : Spécifications fonctionnelles
 - E01 - Facturation
 les autres fonctionnalités de l'étape 4 ne sont pas encore prêtes pour committer elles sont encours !!

Tests
-	Tests unitaires : Vérification des utilitaires (toSlug, generateRandomNumberId) ils sont dans  le dossier test .
-	Tests fonctionnels : Tests des routes avec  bruno vous les trouverez dans le dossier Parking_test_bruno 

 Problèmes Rencontrés

- Difficultés à récupérer et afficher les données associées, comme le nom de la ville associée à un parking.
- Problèmes de typage lors de la transformation des données primitives en instances des classes.
- Problème de connexion à la bd.

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000
