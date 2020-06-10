# Dojos semaine 13

  
## Proposition n°1 - Noël App (Bdd/back/front)
### Mardi :


C’est bientôt Noël et le père Noël demande une application pour que les enfants (nom, prénom, niveau de sagesse) puissent ajouter des cadeaux(nom) à leur liste.
Si un enfant n'est pas sage, le père Noël pourra supprimer ces cadeaux. 

**Bonus**
> Plus noël approche, plus les timings deviennent serrés, il va bientôt commencer l'exploitation de centaines de lutins(nom,prénom). Un lutin travaille seul sur chaque cadeau et quand il a finis il passe au cadeau suivant. Attention il faudra surement rajouter un statut todo/doing/done aux cadeaux.

 1. Modélisation BDD
 2. Création BDD  _(Vous ajouterez manuellement des enfants/cadeaux/bonus-lutin dans la base)_
 3. Initialisation projet Node(express/mysql)
 4. Config MySQL
 5. Création des routes express
	 1. Récupérer une liste d’enfants avec leurs cadeaux
	 2. Ajouter un cadeau 
	 3. Supprimer la liste d'un enfant
	 **bonus**
	 4. Associer un lutin à un cadeau
	 5. Valider la fabrication du cadeau (statut table cadeau ok) 

  

### jeudi :

 1. Initialiser un projet react/angular
 2. Connecter le front au back (fetch/httpClient)
 3. Afficher la liste d'enfant et leurs cadeaux
 4. Bouton de suppression de la liste d'un enfant
 5. Formulaire d'ajout de cadeaux pour un enfant
 **bonus**
 6. Afficher la liste de lutin
 7. Associer un lutin à un cadeaux

  
## Proposition n°2 - Dojo project (bdd/back/front)

  Vous connaissez maintenant vos projets mieux que nous. 
  Vous avez normalement une modélisation de bdd valide, si elle n'est pas complète ce n'est pas gave. 
  Concentrer ce dojos sur 2 ou 3 tables liées par des jointures. 

> Ex: Une plateforme e-commerce: les utilisateurs (nom, prénom, email) ont une liste de produits (nom, catégorie, prix) dans leur panier.

 1. Création BDD (Uniquement les tables séléctionnées) 
 2. Initialisation projet Node(express/mysql) ou utilisation des ressources fournis par le formateur
 3. Configuration MySQL
 4. Création des routes express
	 **exemple**
	 1. Récupérer un utilisateur
	 2. Ajouter / Mettre à jour / Supprimer des utilisateurs
	 3. Ajouter / Mettre à jour / Supprimer des produits
	 4. Afficher une liste de produits en fonction d’une catégorie

  

### Jeudi :

 1. Initialiser un projet react/angular
 2. Connecter le front au back (fetch/httpClient)s
 3. Afficher un utilisateur
 4. Créer un formulaire de création d'utilisateur
 5. Réutiliser le formulaire de création pour la modification.
 **bonus**
 7. Idem pour les autres routes

