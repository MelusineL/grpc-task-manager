# The 12 factors

## 1- Codebase
Un seul repo pour tout

## 2- Dépendences
Déclarer et isoler les dépendances (sécurité, maintenabilité...)

## 3-Config
Variables d'environnement pour la configuration
Permet de modifier sans problème au besoin
Ex : URL BDD, ports, API keys...

## 4- Backing services
= services qui permettent le fonctionnement
ex : redis
Les traiter comme des ressources attachées

## 5- Build, release, run
Strictement séparer le build du run

## 6- Processes
Exécuter l'application en tant que des processus stateless

## 7- Port binding
Export services via port binding

## 8- Concurrency
Scalability horizontale plutôt que verticale :
on préfère multiplier les processus que de trop en demander à une seule machine

## 9- Disposability
Gérer l'arrêt des processus de façon propre

## 10- Dev/prod parity
Garder les différents environnements (dev, staging, prod) aussi proches que possibles

## 11- Logs
Traiter les logs comme des flux d'événements
= agréger les logs pour les retrouver au même endroit

## Admin processes
Run admin/management tasks as one-off processes
> Enregistrer un script par tâche pour pouvoir le réutiliser
