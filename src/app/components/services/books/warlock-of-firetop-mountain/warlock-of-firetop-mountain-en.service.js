let self;
class WarlockOfFiretopMountainService {

    /*@ngInject*/
    constructor(constants) {
        self = this;
        self.constants = constants;
        self.book = {
            id : 'warlock-firetop-mountain',
            version : self.constants.version,
            language : 'fr',
            name : 'Le Sorcier de la Montagne de Feu',
            authors : 'Steve Jackson & Ian Livingstone',
            isbn :'978-2-07-064740-8',
            stats : [
                {
                   name : 'Habilité',
                   init: { sixDiceQuantity : 1, constant : 6},
                   battle: {
                       displayed: true,
                       enemyDefaultValue : 5,
                       editableForEnemy : true
                   }
                },
                {
                   name : 'Endurance',
                   init: { sixDiceQuantity : 2, constant : 12},
                   battle: {
                       displayed : true,
                       enemyDefaultValue : 4,
                       editableForEnemy : true
                   }
                },
                {
                   name : 'Chance',
                   init: { sixDiceQuantity : 1, constant : 6},
                   battle: {
                       displayed : true,
                       enemyDefaultValue : undefined,
                       editableForEnemy : false
                   }
                }
            ],
            items : [
                {
                   quantity : 1,
                   description : 'Epée'
                },
                {
                   quantity : 1,
                   description : 'Bouclier'
                },
                {
                   quantity : 1,
                   description : 'Armure de cuir'
                },
                {
                   quantity : 1,
                   description : 'Sac à dos'
                },
                {
                   quantity : 1,
                   description : 'Lanterne'
                },
                {
                   quantity : 10,
                   description : "Repas (restitue 4 points d'endurance)"
                },
                {
                   quantity : 2,
                   description : "Mesures de potion d'Adresse (rend vos points d'HABILITE)"
                },
                {
                   quantity : 2,
                   description : "Mesures de potion de Vigueur (rend vos points d'ENDURANCE)"
                },
                {
                   quantity : 2,
                   description : "Mesures de Bonne Fortune (rend vos points de CHANCE + 1 point)"
                }
            ],
            startParagraphNr : 1,
            notes : [
                { note : "Veuilliez choisir soit la potion d'habilité, de force ou de chance (supprimez les potions non choisies de l'inventaire)." }
            ]
        };

        self.book.paragraphs = [
            {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 1,
                description: "Caverne sombre",
                choices: [{
                    paragraphNr: 71,
                    description: "Bifurquer vers l'ouest"
                }, {
                    paragraphNr: 278,
                    description: "Bifurquer vers l'est"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 21,
                description: "Le coffre est solide et bien fermé.",
                choices: [{
                    paragraphNr: 339,
                    description: "Briser la serrure avec votre épée"
                }, {
                    paragraphNr: 293,
                    description: "Quitter la pièce"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 42,
                description: "Vous arrivez au bout du couloir avec un croisement.",
                choices: [{
                    paragraphNr: 257,
                    description: "Aller à l'ouest"
                }, {
                    paragraphNr: 113,
                    description: "Aller à l'est"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 71,
                description: "Lutin endormi dans une guérite du passage. Tentez votre chance pour passer devant lui sans le réveiller.",
                choices: [{
                    paragraphNr: 301,
                    description: "Réussite : le lutin ne se réveille pas."
                }, {
                    paragraphNr: 248,
                    description: "Échec : le lutin se réveille"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 82,
                description: "Petite pièce avec créature endormie et une petite boîte en bois. Tentez votre chance pour essayer de voler la boîte sans réveiller la créature",
                choices: [{
                    paragraphNr: 208,
                    description: "Quitter la pièce et continuer vers le nord"
                }, {
                    paragraphNr: 147,
                    description: "Réussite : la créature ne se réveille pas"
                }, {
                    paragraphNr: 33,
                    description: "Échec : la créature se réveille"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 92,
                description: "Croisement caverne",
                choices: [{
                    paragraphNr: 71,
                    description: "Avancer droit devant"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 113,
                description: "Une autre bifurcation",
                choices: [{
                    paragraphNr: 285,
                    description: "Aller au nord"
                }, {
                    paragraphNr: 78,
                    description: "Poursuivre vers l'est"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 116,
                description: "Attaquez les FARFADETS un par un. Ajouter 1 point à votre force d'attaque car ils sont surpris.\n1er FARFADET à HABILITÉ:5, ENDURANCE:4; 2ème FARFADET a HABILITÉ:5, ENDURANCE:5",
                choices: [{
                    paragraphNr: 378,
                    description: "Vous sortez vainqueur"
                }, {
                    paragraphNr: 42,
                    description: "Vous prenez la fuite"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 145,
                description: "La boîte contiens une clé avec le chiffre 99. Ajouter un point de CHANCE",
                choices: [{
                    paragraphNr: 363,
                    description: "Poursuivre"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 147,
                description: "Contenu de la boîte : 1 Pièce d'Or. Gain de 2 points de CHANCE",
                choices: [{
                    paragraphNr: 208,
                    description: "Continuer"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 156,
                description: "Test de l'enfoncement de la porte: 2d6 <= HABILITÉ",
                choices: [{
                    paragraphNr: 343,
                    description: "Porte enfoncée"
                }, {
                    paragraphNr: 92,
                    description: "Échec. Rebrousser à la bifurcation"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 168,
                description: "Il y a un coffre au centre de la pièce. Une créature de taille humaine fouette une autre créature semblable.",
                choices: [{
                    paragraphNr: 372,
                    description: "Attaquer les deux créatures"
                }, {
                    paragraphNr: 65,
                    description: "Attaquer uniquement le fouetteur"
                }, {
                    paragraphNr: 293,
                    description: "Quitter la pièce et retourner au croisement"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 201,
                description: "Il y a 25 Pièces d'Or, 1 dose de Potion d'Invisibilité, un gant de soie noire. Ranger une de ces trois trouvailles. Vous pouvez prendre un Repas.",
                choices: [{
                    paragraphNr: 293,
                    description: "Quittez la pièce"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 208,
                description: "Passage ayant une porte du côté ouest",
                choices: [{
                    paragraphNr: 397,
                    description: "Ouvrir la porte"
                }, {
                    paragraphNr: 363,
                    description: "Poursuivre votre chemin"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 240,
                description: "Un petit serpent jaillit de la boîte et vous mord au poignet.\nSERPENT a HABILITÉ:5, ENDURANCE:2",
                choices: [{
                    paragraphNr: 145,
                    description: "Si vous sortez vainqueur du combat"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 257,
                description: "Le passage aboutit à une porte. Vous entendez des cris de colère qui proviennent de la pièce.",
                choices: [{
                    paragraphNr: 168,
                    description: "Entrer dans la pièce"
                }, {
                    paragraphNr: 293,
                    description: "Revenir sur vos pas"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 278,
                description: "Passage se termine avec une porte fermée à clé",
                choices: [{
                    paragraphNr: 156,
                    description: "Enfoncer la porte"
                }, {
                    paragraphNr: 92,
                    description: "Rebrousser chemin"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 285,
                description: "Il y a une porte le long du mur du passage. Vous entendez un homme appeler à l'aide par le trou de serrure.",
                choices: [{
                    paragraphNr: 213,
                    description: "Ouvrir la porte"
                }, {
                    paragraphNr: 314,
                    description: "Poursuivre votre chemin"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 293,
                description: "Vous retournez à la bifurcation et parter vers l'est",
                choices: [{
                    paragraphNr: 113,
                    description: "Aller vers l'est"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 296,
                description: "La boîte contiens une formule magique de l'auteur Farrigo Di Maggio qui permet de neutraliser les Dragons. La page de la formule se consume une fois celle-ci retenue.",
                choices: [{
                    paragraphNr: 42,
                    description: "Quitter la pièce"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 301,
                description: "Passage avec porte d'où l'on entend des ronflements",
                choices: [{
                    paragraphNr: 82,
                    description: "Ouvrir la porte"
                }, {
                    paragraphNr: 208,
                    description: "Continuer vers le nord"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 339,
                description: "Peu après avoir ouvert le coffre, une fléchette vient vous atteindre à l'estomac. Réduisez un dé de points d'ENDURANCE.",
                choices: [{
                    paragraphNr: 201,
                    description: "Si vous survivez"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 343,
                description: "Fosse. Perte de 1 point d'ENDURANCE",
                choices: [{
                    paragraphNr: 92,
                    description: "Hisser hors de la fosse et faire rebrousse-chemin"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 363,
                description: "Il y a une porte dans le mur ouest du passage d'où l'on entend une cacophonie de voix chanter",
                choices: [{
                    paragraphNr: 370,
                    description: "Entrer dans la pièce"
                }, {
                    paragraphNr: 42,
                    description: "Poursuivre le long du passage"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 370,
                description: "Pièce avec une table autour de laquelle deux créatures éméchées sont assises. Il y a une petite boîte sous la table.",
                choices: [{
                    paragraphNr: 116,
                    description: "Combattre les créatures"
                }, {
                    paragraphNr: 42,
                    description: "Refermer la porte et courir le long du passage"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 372,
                description: "CHEF DES FARFADETS a HABILITÉ : 7, ENDURANCE : 6\nSERVITEUR a HABILITÉ : 5, ENDURANCE : 3",
                choices: [{
                    paragraphNr: 21,
                    description: "En cas de succès"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 378,
                description: "La boîte est intitulé \"Farrigo Di Maggio\"",
                choices: [{
                    paragraphNr: 296,
                    description: "Ouvrir la boîte"
                }, {
                    paragraphNr: 42,
                    description: "Quitter la pièce sans l'examiner"
                }]
             }, {
                bookId : self.book.id,
                version : self.constants.version,
                paragraphNr: 397,
                description: "Petite pièce avec une table. Sous la table, il y a une petite boîte.",
                choices: [{
                    paragraphNr: 240,
                    description: "Ouvrir la boîte"
                }, {
                    paragraphNr: 363,
                    description: "Quitter la pièce"
                }]
             }
           ];
    }

    getBook() {
        return self.book;
    }
}

export default WarlockOfFiretopMountainService;