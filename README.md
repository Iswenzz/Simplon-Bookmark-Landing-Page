![](https://i.imgur.com/XFvRaaO.png)
# Simplon HTML CSS TP

![](https://i.imgur.com/xGwJ3oM.jpg)
## Bookmark landing page
Intégration en HTML et CSS d'une landing page depuis une maquette graphique complexe.
Livrables
Les fichiers HTML et CSS d'intégration de la maquette graphique. Ces fichiers devront être envoyés sur un dépôt Gitlab.
Contexte du projet

Un client vous demande de créer la landing page de son extension de bookmark pour navigateur web. Cette page va premettre d'expliquer le fonctionnement de l'extension, de pouvoir la télécharger et de permettre de s'inscrire à la newsletter, avec un formulaire. Le client vous met à disposition les différentes maquettes graphique, avec les differents états (mobile), ainsi que les images à intégrer. Cette page devra être réalisée en HTML et en CSS. Vous devez déposer votre travail sur un dépot Gitlab public pour que votre client puisse s'occuper de sa mise en ligne.
Modalités pédagogiques

* Le site doit être responsive
* Vous devez utiliser Bootstrap
* Vous devez utiliser animate.css pour animer les éléments de l’interface (par ex le hover sur les icônes)
* Faire en sorte qu'un message d'erreur apparait lorsqu'on envoit le champs de newsletter (en bas) : si le champs est vide ou si le champs ne contient pas un adresse mail valide.
* Il faut aussi creer les formes de fond avec du code (carré bleu avec un bord arrondi)

Le TP est à rendre sur Gitlab et Simplonline le vendredi 26 juin au soir.

## Compiling SASS
Run the following commands to compile SASS files.
```bash
npm install -g sass
sass assets/scss:dist/css
```