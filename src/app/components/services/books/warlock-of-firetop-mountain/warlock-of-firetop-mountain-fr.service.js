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
            numberOfParagraphs : 400,
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
                paragraphNr: 92,
                description: "Croisement caverne",
                choices: [{
                    paragraphNr: 71,
                    description: "Avancer droit devant"
                }]
            }, {
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
                paragraphNr: 145,
                description: "La boîte contiens une clé avec le chiffre 99. Ajouter un point de CHANCE",
                choices: [{
                    paragraphNr: 363,
                    description: "Poursuivre"
                }]
            }, {
                paragraphNr: 147,
                description: "Contenu de la boîte : 1 Pièce d'Or. Gain de 2 points de CHANCE",
                choices: [{
                    paragraphNr: 208,
                    description: "Continuer"
                }]
            }, {
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
                paragraphNr: 201,
                description: "Il y a 25 Pièces d'Or, 1 dose de Potion d'Invisibilité, un gant de soie noire. Ranger une de ces trois trouvailles. Vous pouvez prendre un Repas.",
                choices: [{
                    paragraphNr: 293,
                    description: "Quittez la pièce"
                }]
            }, {
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
                paragraphNr: 240,
                description: "Un petit serpent jaillit de la boîte et vous mord au poignet.\nSERPENT a HABILITÉ:5, ENDURANCE:2",
                choices: [{
                    paragraphNr: 145,
                    description: "Si vous sortez vainqueur du combat"
                }]
            }, {
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
                paragraphNr: 293,
                description: "Vous retournez à la bifurcation et parter vers l'est",
                choices: [{
                    paragraphNr: 113,
                    description: "Aller vers l'est"
                }]
            }, {
                paragraphNr: 296,
                description: "La boîte contiens une formule magique de l'auteur Farrigo Di Maggio qui permet de neutraliser les Dragons. La page de la formule se consume une fois celle-ci retenue.",
                choices: [{
                    paragraphNr: 42,
                    description: "Quitter la pièce"
                }]
            }, {
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
                paragraphNr: 339,
                description: "Peu après avoir ouvert le coffre, une fléchette vient vous atteindre à l'estomac. Réduisez un dé de points d'ENDURANCE.",
                choices: [{
                    paragraphNr: 201,
                    description: "Si vous survivez"
                }]
            }, {
                paragraphNr: 343,
                description: "Fosse. Perte de 1 point d'ENDURANCE",
                choices: [{
                    paragraphNr: 92,
                    description: "Hisser hors de la fosse et faire rebrousse-chemin"
                }]
            }, {
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
                paragraphNr: 372,
                description: "CHEF DES FARFADETS a HABILITÉ : 7, ENDURANCE : 6\nSERVITEUR a HABILITÉ : 5, ENDURANCE : 3",
                choices: [{
                    paragraphNr: 21,
                    description: "En cas de succès"
                }]
            }, {
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
                paragraphNr: 397,
                description: "Petite pièce avec une table. Sous la table, il y a une petite boîte.",
                choices: [{
                    paragraphNr: 240,
                    description: "Ouvrir la boîte"
                }, {
                    paragraphNr: 363,
                    description: "Quitter la pièce"
                }]
            }, {
                paragraphNr: 3,
                description: "Le passeur, un vieil homme vous demande 3 pièces d'or pour traverser la rivière.",
                choices: [{
                    paragraphNr: 272,
                    description: "Payer 3 pièces d'or"
                }, {
                    paragraphNr: 127,
                    description: "Le menacer"
                }]
            }, {
                paragraphNr: 7,
                description: "Vous êtes sur la berge nord d'une rivière au fort courant, dans une grande caverne.",
                choices: [{
                    paragraphNr: 214,
                    description: "Poursuivre"
                }]
            }, {
                paragraphNr: 19,
                description: "1er LUTIN a HABILITÉ:5, ENDURANCE:5\n2ème LUTIN a HABILITÉ:5, ENDURANCE:6",
                choices: [{
                    paragraphNr: 317,
                    description: "Vous sortez vainqueur du combat"
                }]
            }, {
                paragraphNr: 23,
                description: "Le couloir aboutit à une porte bien solide.",
                choices: [{
                    paragraphNr: 326,
                    description: "Entrer dans la pièce"
                }, {
                    paragraphNr: 229,
                    description: "Retourner à la bifurcation"
                }]
                }, {
                paragraphNr: 33,
                description: "Le farfadet se réveille en sursaut et vous attaque.\nFARFADET a HABILITÉ:6, ENDURANCE: 4",
                choices: [{
                    paragraphNr: 320,
                    description: "Prendre la fuite"
                }, {
                    paragraphNr: 147,
                    description: "Prendre la boîte si vous êtes vainqueur"
}]
},

            {
                paragraphNr: 35,
                description: "Un jet de gaz à l'odeur âcre s'échappe d'un orifice.",
                choices: [{
                    paragraphNr: 136,
                    description: "Prendre la fuite"
}, {
                    paragraphNr: 361,
                    description: "Retenir votre respiration et s'emparer de la clé rapidement"
}]
},

            {
                paragraphNr: 36,
                description: "Vous débouchez dans la pièce. Un vieil homme en haillons se rue sur vous en hurlant.",
                choices: [{
                    paragraphNr: 263,
                    description: "Crier pour essayer de le calmer"
}, {
                    paragraphNr: 353,
                    description: "L'attaquer"
}]
},

            {
                paragraphNr: 38,
                description: "Vous trouvez le garde-manger du loup-garou. Vous trouvez l'équivalent de 2 repas.",
                choices: [{
                    paragraphNr: 66,
                    description: "Sortir par la porte sud"
}]
},

            {
                paragraphNr: 41,
                description: "ÊTRE a HABILITÉ:9,ENDURANCE:6",
                choices: [{
                    paragraphNr: 310,
                    description: "Lorsque lui infligé une blessure"
}]
},

            {
                paragraphNr: 53,
                description: "Lancer 2 dés. Si le chiffre obtenu est égal ou inférieur à votre total d'HABILITÉ, la porte s'ouvre. Sinon la porte ne bouge pas et vous perdez 1 point d'ENDURANCE.",
                choices: [{
                    paragraphNr: 155,
                    description: "Si la porte est enfoncée"
}, {
                    paragraphNr: 300,
                    description: "Si la porte reste fermée"
}]
},

            {
                paragraphNr: 66,
                description: "Le passage mène à la berge de la rivière.",
                choices: [{
                    paragraphNr: 104,
                    description: "Se rendre devant la porte qui se trouve au milieu du pan de roc"
}, {
                    paragraphNr: 99,
                    description: "Suivre le passage vers l'est le long de la rivière"
}]
},

            {
                paragraphNr: 69,
                description: "Vous vous dirigez vers le nord.",
                choices: [{
                    paragraphNr: 244,
                    description: "Vous partez vers le nord"
}]
},

            {
                paragraphNr: 77,
                description: "Vous arrivez à un croisement. Un abri vous permet de prendre un repas.",
                choices: [{
                    paragraphNr: 345,
                    description: "Aller à l'est"
}, {
                    paragraphNr: 18,
                    description: "Aller à l'ouest"
}]
},

            {
                paragraphNr: 78,
                description: "Passage aboutit à une porte massive. Vous entendez quelqu'un marmonner et des bruits de casseroles.",
                choices: [{
                    paragraphNr: 159,
                    description: "Franchir la porte"
}, {
                    paragraphNr: 237,
                    description: "Rebrousser chemin"
}]
},

            {
                paragraphNr: 80,
                description: "La porte s'ouvre sur un hangar à bateaux. Les squelettes interrompent leur travail et s'avancent vers vous armé de planches et marteaux. Il y a une autre porte dans le mur nord",
                choices: [{
                    paragraphNr: 129,
                    description: "Revenir sur vos pas"
}, {
                    paragraphNr: 123,
                    description: "Se faire passer pour un acheteur de bateau"
}, {
                    paragraphNr: 195,
                    description: "Se faire passer pour leur nouveau patron"
}]
},

            {
                paragraphNr: 84,
                description: "La pièce donne sur une pièce confortable. Un vieil homme est assis à une table avec une petite créature ailée à ses côtés. Il tient dans sa main 2 petits objets blancs qu'il agite devant vous.",
                choices: [{
                    paragraphNr: 204,
                    description: "Vous asseoir comme il vous y invite"
}, {
                    paragraphNr: 280,
                    description: "Quitter la pièce et revenir au croisement"
}, {
                    paragraphNr: 377,
                    description: "Attaquer le vieil homme"
}]
},

            {
                paragraphNr: 89,
                description: "Vous arrivez en haut d'un escalier",
                choices: [{
                    paragraphNr: 286,
                    description: "Vous descendez celui-ci"
}]
},

            {
                paragraphNr: 96,
                description: "Vous arrivez dans un petit couloir. Vous vous dissimulez dans une cachette alors que 4 squelettes armées courent vers vous sans vous avoir vu",
                choices: [{
                    paragraphNr: 374,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 99,
                description: "Le couloir vous mène à une porte solide.",
                choices: [{
                    paragraphNr: 383,
                    description: "Vous examiner la porte"
}]
},

            {
                paragraphNr: 102,
                description: "La porte n'est pas verrouillé. Dans la pièce, 2 bossus torturent un nain. Le nain s'évanouit dans un cri. Les bossus se tournent vers vous",
                choices: [{
                    paragraphNr: 303,
                    description: "Refermer aussitôt la porte et poursuivre votre chemin"
}, {
                    paragraphNr: 19,
                    description: "Attaquer les créatures"
}, {
                    paragraphNr: 68,
                    description: "Donner un coup d'épée au nain avec un rire diabolique"
}]
},

            {
                paragraphNr: 123,
                description: "Lancez un dé",
                choices: [{
                    paragraphNr: 184,
                    description: "1-3: ils vous croient. +2 CHANCE. Vous quittez par la porte nord"
}, {
                    paragraphNr: 164,
                    description: "4-5: ils doutent et envoient 2 des leurs prendre des ordres"
}, {
                    paragraphNr: 140,
                    description: "6: ils ne vous croient pas et avance vers vous"
}]
},

            {
                paragraphNr: 128,
                description: "La herse s'élève et disparaît dans le plafond.",
                choices: [{
                    paragraphNr: 210,
                    description: "Poursuivre vers l'ouest"
}, {
                    paragraphNr: 58,
                    description: "Poursuivre vers l'est"
}]
},

            {
                paragraphNr: 130,
                description: "Vous pouvez miser autant de pièces que vous avez par partie et tant que vous en possédez. Lancer 2 dés pour vous et le vieil homme. Le gagnant à le montant le plus gros.\nSi vous gagnez, prenez 2 points d'HABILITÉ, 2 points d'ENDURANCE, 2 points de CHANCE.",
                choices: [{
                    paragraphNr: 280,
                    description: "Quitter la pièce"
}]
},

            {
                paragraphNr: 136,
                description: "Vous quittez la pièce et revenez à la bifurcation.",
                choices: [{
                    paragraphNr: 229,
                    description: "Vous vous dirigez vers la bifurcation"
}]
},

            {
                paragraphNr: 154,
                description: "La créature se réveille et marche vers vous",
                choices: [{
                    paragraphNr: 41,
                    description: "Combattre la créature"
}]
},

            {
                paragraphNr: 155,
                description: "C'est un dépôt d'arme.il y a un bouclier que vous pouvez échanger contre 1 autre pièce d'équipement. Si une créature vous touche, lancer 1 dé. Si vous faîtes 6 alors la blessure est de 1 point d'ENDURANCE de moins.",
                choices: [{
                    paragraphNr: 300,
                    description: "Suivez le couloir"
}]
},

            {
                paragraphNr: 159,
                description: "Vous entrez dans une salle à manger. 5 FARFADETS mange goulûment une soupe.",
                choices: [{
                    paragraphNr: 365,
                    description: "Attaquer"
}, {
                    paragraphNr: 237,
                    description: "Tentez votre chance. Prendre la fuite si vous êtes chanceux"
}]
},

            {
                paragraphNr: 162,
                description: "Vous arrivez à une bifurcation",
                choices: [{
                    paragraphNr: 23,
                    description: "Continuer vers le nord"
}, {
                    paragraphNr: 69,
                    description: "Aller vers l'ouest"
}]
},

            {
                paragraphNr: 178,
                description: "Vous traversez avec prudence la pièce et franchissez la porte.",
                choices: [{
                    paragraphNr: 162,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 183,
                description: "Vous découvrez une mallette. Votre victoire vous apporte 1 point d'HABILITÉ et 5 d'ENDURANCE",
                choices: [{
                    paragraphNr: 266,
                    description: "Ouvrir la mallette"
}, {
                    paragraphNr: 237,
                    description: "Sortir par la porte"
}]
},

            {
                paragraphNr: 184,
                description: "Vous êtes dans le Hangar à  Bateaux. Vous avez un certain temps pour explorer les environs",
                choices: [{
                    paragraphNr: 322,
                    description: "Fouiller les tiroirs de l'établi"
}, {
                    paragraphNr: 34,
                    description: "Examiner les outils"
}]
},

            {
                paragraphNr: 203,
                description: "Prenez 1 point de CHANCE. Vous pouve prendre un repas. Vous pouvez prendre les clés du Hangar à bateaux.",
                choices: [{
                    paragraphNr: 38,
                    description: "Ouvrir la porte à l'ouest"
}, {
                    paragraphNr: 66,
                    description: "Aller au sud"
}]
},

            {
                paragraphNr: 204,
                description: "Le vieil homme vous propose à jouer de l'argent",
                choices: [{
                    paragraphNr: 130,
                    description: "Si oui et que vous avez de l'or"
}, {
                    paragraphNr: 280,
                    description: "Quitter la pièce"
}, {
                    paragraphNr: 377,
                    description: "Attaquer le vieil homme"
}]
},

            {
                paragraphNr: 207,
                description: "Vous êtes dans une grande pièce. Il y a un bureau de bois avec une boîte posée dessus. Dans un coin une créature hideuse semble être endormie.",
                choices: [{
                    paragraphNr: 83,
                    description: "Poursuivre par la porte nord prudemment"
}, {
                    paragraphNr: 154,
                    description: "Examiner la boîte sur la pointe des pieds"
}]
},

            {
                paragraphNr: 210,
                description: "Vous arrivez à une autre bifurcation.",
                choices: [{
                    paragraphNr: 225,
                    description: "Continuer en direction de l'ouest"
}, {
                    paragraphNr: 357,
                    description: "Prendre la direction du nord"
}]
},

            {
                paragraphNr: 211,
                description: "Les Êtres ne sont vulnérables qu'aux armes d'argent.",
                choices: [{
                    paragraphNr: 173,
                    description: "Si vous possédez une arme d'argent"
}, {
                    paragraphNr: 360,
                    description: "Sinon il vous infligé une blessure alors que vous vous enfuyez."
}]
},
            {
                paragraphNr: 213,
                description: "Jetez 2 dés. Si le chiffre est egal ou inférieur à votre total d'HABILITÉ, vous enfoncez la porte fermée à clé. Sinon vous perdez 1 point d'ENDURANCE.",
                choices: [{
                    paragraphNr: 36,
                    description: "Vous réussissez à enfoncer la porte"
}, {
                    paragraphNr: 314,
                    description: "Vous échouez. Vous poursuivez votre chemin"
}]
},

            {
                paragraphNr: 214,
                description: "",
                choices: [{
                    paragraphNr: 271,
                    description: "Prendre le passage nord-ouest"
}, {
                    paragraphNr: 104,
                    description: "Ouvrir la porte de la paroi rocheuse face à vous"
}, {
                    paragraphNr: 99,
                    description: "Prendre le passage en direction de l'est"
}]
},

            {
                paragraphNr: 218,
                description: "La berge sud a un service de bac contre 2 pièces d'or pour traverser la rivière. Un pont branlant semble joindre la berge nord.",
                choices: [{
                    paragraphNr: 3,
                    description: "Sonner la cloche pour appeler le passeur"
}, {
                    paragraphNr: 386,
                    description: "Utiliser le radeau"
}, {
                    paragraphNr: 209,
                    description: "Prendre le pont"
}, {
                    paragraphNr: 316,
                    description: "Nager"
}]
},

            {
                paragraphNr: 223,
                description: "La porte est solidement fermée.",
                choices: [{
                    paragraphNr: 53,
                    description: "Forcer la porte"
}, {
                    paragraphNr: 300,
                    description: "Continuer le long du couloir"
}]
},

            {
                paragraphNr: 225,
                description: "Vous arrivez à une autre bifurcation.",
                choices: [{
                    paragraphNr: 77,
                    description: "Poursuivre vers le nord"
}, {
                    paragraphNr: 63,
                    description: "Aller à l'ouest"
}]
},

            {
                paragraphNr: 229,
                description: "Vous êtes de retour à la bifurcation.",
                choices: [{
                    paragraphNr: 69,
                    description: "Vous prenez à droite"
}]
},

            {
                paragraphNr: 230,
                description: "La GOULE va attaque. Elle a HABILITÉ: 8, ENDURANCE:7",
                choices: [{
                    paragraphNr: 390,
                    description: "Si vous êtes vainqueur"
}, {
                    paragraphNr: 64,
                    description: "Elle vous paralyse au bout de 4 blessures"
}]
},

            {
                paragraphNr: 237,
                description: "Vous arrivez à la précédente bifurcation et prenez la direction du nord.",
                choices: [{
                    paragraphNr: 285,
                    description: "Partir vers le nord"
}]
},

            {
                paragraphNr: 244,
                description: "Vous arrivez vers une berge d'une rivière. Le chemin se termine ici.",
                choices: [{
                    paragraphNr: 143,
                    description: "Se reposer et prendre un repas"
}, {
                    paragraphNr: 399,
                    description: "Sauter dans la rivière et suivre le courant"
}]
},

            {
                paragraphNr: 249,
                description: "CHIEN a HABILITÉ:7, ENDURANCE:6. Lancer 1 dé à chaque assaut. 1,2: vous perdez 1 point car le chien crache du feu. 3-6: Vous évitez le jet de feu. Vous pouvez tester votre chance pour esquiver la flamme. En cas de succès, vous gagnez 1 point de CHANCE.",
                choices: [{
                    paragraphNr: 66,
                    description: "Prendre la fuite avant ou après le combat fini"
}, {
                    paragraphNr: 304,
                    description: "Rester"
}]
},

            {
                paragraphNr: 263,
                description: "Vous arrivez à calmer le vieillard. Il vous conseil de respecter le passeur, qu'il faut tirer le levier de droite dans un mur qui se trouve plus loin, que les clés du hangar à bateaux sont gardées par un homme et son chien. Vous gagnez 1 point de CHANCE.",
                choices: [{
                    paragraphNr: 314,
                    description: "Vous vous séparez du vieil homme"
}]
},

            {
                paragraphNr: 266,
                description: "La mallette contient un arc et une flèche d'argent ainsi qu'une inscription : ´Celui qui donne le sommeil à ceux qui ne peuvent dormir´. Vous pouvez manger des provisions. Vous gagnez 1 point de CHANCE.",
                choices: [{
                    paragraphNr: 237,
                    description: "Quitter la pièce"
}]
},

            {
                paragraphNr: 271,
                description: "Le passage aboutit à une porte",
                choices: [{
                    paragraphNr: 336,
                    description: "Voulez-vous franchir la porte?"
}, {
                    paragraphNr: 214,
                    description: "Retourner à la rivière"
}]
},

            {
                paragraphNr: 272,
                description: "Vous arrivez à la berge nord",
                choices: [{
                    paragraphNr: 7,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 275,
                description: "Le troisième cadavre essaie de vous griffer. Tentez votre chance. Si vous êtes malchanceux, vous perdez 1 point d'ENDURANCE.",
                choices: [{
                    paragraphNr: 230,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 280,
                description: "Vous retournez à la bifurcation et prenez le passage de l'est",
                choices: [{
                    paragraphNr: 311,
                    description: "Poursuivre vers l'est"
}]
},

            {
                paragraphNr: 286,
                description: "Vous arrivez à une grande salle ou trois cadavres sont étendus au sol",
                choices: [{
                    paragraphNr: 294,
                    description: "Fouiller le premier cadavre"
}, {
                    paragraphNr: 275,
                    description: "Fouiller le deuxième cadavre"
}, {
                    paragraphNr: 148,
                    description: "Fouiller le troisième cadavre"
}, {
                    paragraphNr: 107,
                    description: "Traverser la salle sur la pointe des pieds"
}]
},

            {
                paragraphNr: 300,
                description: "Dans le mur est du passage, il y a une porte. Des hurlements se font entendre liées certainement à une séance de torture.",
                choices: [{
                    paragraphNr: 102,
                    description: "Tenter d'ouvrir la porte"
}, {
                    paragraphNr: 303,
                    description: "Poursuivre votre chemin"
}]
},

            {
                paragraphNr: 303,
                description: "Extrémité du passage est entravée par une herse. Il y a 2 leviers.",
                choices: [{
                    paragraphNr: 128,
                    description: "Tirer le levier droit"
}, {
                    paragraphNr: 243,
                    description: "Tirer le levier gauche"
}]
},

            {
                paragraphNr: 304,
                description: "Le vieil homme est furieux et se transforme en LOUP-GAROU qui a HABILITÉ:8,ENDURANCE:8",
                choices: [{
                    paragraphNr: 66,
                    description: "Prendre la fuite par la porte sud"
}, {
                    paragraphNr: 203,
                    description: "Si vous êtes vainqueur"
}]
},

            {
                paragraphNr: 310,
                description: "Le coup n'a pas blessé la créature. Elle est invulnérable aux armes habituelles. Choisissez une autre arme si vous en avez.",
                choices: [{
                    paragraphNr: 211,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 311,
                description: "Le passage aboutit à une salle dans le sol est recouvert de mosaïque de dalles en forme de main, d'étoile. Une porte se trouve de l'autre côté de la salle.",
                choices: [{
                    paragraphNr: 305,
                    description: "Traverser la pièce et atteindre la porte"
}, {
                    paragraphNr: 178,
                    description: "Traverser en ne marchant que sur les dalles en forme d'étoile"
}, {
                    paragraphNr: 108,
                    description: "Traverser en ne marchant que sur les dalles en forme de main"
}]
},

            {
                paragraphNr: 314,
                description: "Une porte se trouve dans le mur est du passage. Vous n'entendez pas le moindre son.",
                choices: [{
                    paragraphNr: 223,
                    description: "Ouvrir la porte"
}, {
                    paragraphNr: 300,
                    description: "Poursuivre votre chemin"
}]
},

            {
                paragraphNr: 317,
                description: "Le nain est déjà mort. Les lutins possède un gros fromage à l'odeur alléchante. Vous pouvez l'emporter dans votre sac à dos.",
                choices: [{
                    paragraphNr: 303,
                    description: "Quitter la pièce en prenant la direction du nord"
}]
},

            {
                paragraphNr: 322,
                description: "Vous trouvez un clé en cuivre 66 dans un tiroir. Abandonner 1 pièce d'équipement pour prendre la clé.",
                choices: [{
                    paragraphNr: 96,
                    description: "Allez voir le bruit vers la porte nord"
}]
},

            {
                paragraphNr: 326,
                description: "Vous entrez dans une petite pièce. Une clé d'or est accroché au mur du fond. La pièce n'a pas d'autre issue.",
                choices: [{
                    paragraphNr: 35,
                    description: "Chercher la clé"
}, {
                    paragraphNr: 229,
                    description: "Revenir à la bifurcation"
}]
},

            {
                paragraphNr: 336,
                description: "Un vieil homme est endormi alors que son chien grogne à ses côtés. Un trousseau de clés est accroché au mur. Il y a une porte au sud et une à l'ouest.",
                choices: [{
                    paragraphNr: 66,
                    description: "Sortir par la porte sud"
}, {
                    paragraphNr: 172,
                    description: "Réveiller le vieil homme"
}, {
                    paragraphNr: 249,
                    description: "Attaquer le chien"
}]
},

            {
                paragraphNr: 345,
                description: "Une bifurcation.",
                choices: [{
                    paragraphNr: 381,
                    description: "Continuer tout droit"
}, {
                    paragraphNr: 311,
                    description: "Prendre vers l'est"
}]
},

            {
                paragraphNr: 360,
                description: "Vous arrivez à une étroite ouverture. Vous décidez de la franchir",
                choices: [{
                    paragraphNr: 89,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 361,
                description: "Vous prenez la clé qui porte le numéro 125. Vos poumons brûlent. Lancez 2 dés. Si le chiffre est superieur à votre HABILITÉ, vous perdez 2 points d'HABILITÉ et 3 points d'ENDURANCE.",
                choices: [{
                    paragraphNr: 136,
                    description: "Vous quittez la pièce si vous êtes encore en vie"
}]
},

            {
                paragraphNr: 365,
                description: "1er FARFADET a 6/4 (HABILITÉ/ENDURANCE), 2ème a 5/3, 3ème a 6/4, 4ème a 5/2, 5ème a 4/4",
                choices: [{
                    paragraphNr: 183,
                    description: "Si vous êtes vainqueur"
}, {
                    paragraphNr: 237,
                    description: "Si vous voulez vous enfuire (n'oubliez pas votre pénalité)"
}]
},

            {
                paragraphNr: 374,
                description: "Les squelettes ne vous remarquent pas. Vous gagnez 2 points de CHANCE. Vous poursuivez votre chemin et passer par la porte nord. Vous pouvez prendre 1 repas.",
                choices: [{
                    paragraphNr: 207,
                    description: "Poursuivre"
}]
},

            {
                paragraphNr: 381,
                description: "Le passage aboutit à une porte.",
                choices: [{
                    paragraphNr: 84,
                    description: "Ouvrir la porte"
}, {
                    paragraphNr: 280,
                    description: "Retourner à la bifurcation"
}]
},

            {
                paragraphNr: 383,
                description: "Une pancarte sur la porte indique ´Hangar à bateaux'. La porte est solidement verrouillé. Un groupe de squelette travaille sur la construction d'un bateau.",
                choices: [{
                    paragraphNr: 80,
                    description: "Si vous possédez la clé ´Hangar à bateaux'"
}, {
                    paragraphNr: 264,
                    description: "Si vous tentez d'enfoncer la porte"
}, {
                    paragraphNr: 129,
                    description: "Vous retournez sur la berge et prenez un autre chemin"
}]
},

            {
                paragraphNr: 390,
                description: "Vous trouvez trouver 6 pièces d'or en fouillant le 1er et 3ème cadavres. Vous gagnez 2 points de CHANCE. Vous pouvez prendre un repas.",
                choices: [{
                    paragraphNr: 120,
                    description: "Aller au nord"
}, {
                    paragraphNr: 393,
                    description: "Fouiller le 2ème cadavre"
}]
},

            {
                paragraphNr: 393,
                description: "Vous trouvez 8 pièces d'or, un vieux morceau de parchemin, une bouteille contenant un liquide.",
                choices: [{
                    paragraphNr: 212,
                    description: "Lire le parchemin"
}, {
                    paragraphNr: 369,
                    description: "Tester le liquide"
}]
},

            {
                paragraphNr: 399,
                description: "Le fort courant vous amène dans une grande caverne ou vous vous échouez à une des rives",
                choices: [{
                    paragraphNr: 218,
                    description: "Poursuivre"
}]
},
{
            paragraphNr: 48,
            description: "",
            choices: [{
                paragraphNr: 391,
                description: "Partir vers le nord"
            }, {
                paragraphNr: 60,
                description: "Aller à l'ouest"
            }]
        }, {
            paragraphNr: 52,
            description: "",
            choices: [{
                paragraphNr: 391,
                description: "Aller au sud"
            }, {
                paragraphNr: 362,
                description: "Chercher un passage secret dans le couloir sud"
            }, {
                paragraphNr: 354,
                description: "Aller au nord"
            }, {
                paragraphNr: 234,
                description: "Chercher un passage secret dans le couloir nord"
            }, {
                paragraphNr: 291,
                description: "Aller à l'est"
            }]
        }, {
            paragraphNr: 109,
            description: "C'est de l'EAU SAINTE. Vous récupérer quasi tous vos points d'endurance (-2 total initial), vos points d'habilité (-1 total initial) et 4 points de chance.",
            choices: [{
                paragraphNr: 120,
                description: "Regarder le parchemin"
            }, {
                paragraphNr: 212,
                description: "Aller vers le nord"
            }]
        }, {
            paragraphNr: 120,
            description: "Vous suivez un court passage puis gravissez un escalier.",
            choices: [{
                paragraphNr: 197,
                description: "Poursuivre"
            }]
        }, {
            paragraphNr: 157,
            description: "",
            choices: [{
                paragraphNr: 4,
                description: "Traverser la porte et se diriger vers le nord"
            }, {
                paragraphNr: 329,
                description: "Revenir en arrière"
            }]
        }, {
            paragraphNr: 171,
            description: "",
            choices: [{
                paragraphNr: 337,
                description: "Examiner le mur du cul-de-sac."
            }, {
                paragraphNr: 187,
                description: "Aller au sud"
            }]
        }, {
            paragraphNr: 175,
            description: "",
            choices: [{
                paragraphNr: 177,
                description: "Ouvrir la porte derrière vous vers l'est"
            }, {
                paragraphNr: 267,
                description: "Avancer pour atteindre un croisement"
            }]
        }, {
            paragraphNr: 187,
            description: "",
            choices: [{
                paragraphNr: 171,
                description: "Explorer le cul de sac au nord"
            }, {
                paragraphNr: 308,
                description: "Aller vers l'est"
            }]
        }, {
            paragraphNr: 197,
            description: "Une lourde herse vous bloque le chemin que vous venez de prendre",
            choices: [{
                paragraphNr: 48,
                description: "Partir tout droit"
            }, {
                paragraphNr: 295,
                description: "Chercher un passage secret"
            }]
        }, {
            paragraphNr: 212,
            description: "On peut lire plein labyrinthe de Zagor'. Il se trouve au nord une pièce désignée par ´...GER' et une autre au sud ´SM...P...L'. Vous prenez la carte.",
            choices: [{
                paragraphNr: 369,
                description: "Tester le liquide"
            }, {
                paragraphNr: 120,
                description: "Poursuivre vers le nord"
            }]
        },
        {
            paragraphNr: 246,
            description: "",
            choices: [{
                paragraphNr: 329,
                description: "Aller au nord"
            }, {
                paragraphNr: 180,
                description: "Aller à l'ouest"
            }, {
                paragraphNr: 70,
                description: "Aller à nouveau vers l'est"
            }]
        }, {
            paragraphNr: 267,
            description: "",
            choices: [{
                paragraphNr: 312,
                description: "Aller au nord"
            }, {
                paragraphNr: 246,
                description: "Aller au sud"
            }, {
                paragraphNr: 79,
                description: "Aller à l'ouest"
            }, {
                paragraphNr: 349,
                description: "Aller à l'est"
            }]
        }, {
            paragraphNr: 308,
            description: "",
            choices: [{
                paragraphNr: 187,
                description: "Aller à l'ouest"
            }, {
                paragraphNr: 54,
                description: "Aller au nord"
            }, {
                paragraphNr: 160,
                description: "Aller au sud"
            }, {
                paragraphNr: 354,
                description: "Aller à l'est"
            }]
        }, {
            paragraphNr: 312,
            description: "",
            choices: [{
                paragraphNr: 308,
                description: "Vous arrivez à un croisement"
            }]
        }, {
            paragraphNr: 329,
            description: "",
            choices: [{
                paragraphNr: 157,
                description: "Aller à la porte du mur ouest"
            }, {
                paragraphNr: 392,
                description: "Aller à la porte située au nord"
            }, {
                paragraphNr: 299,
                description: "Aller à l'est"
            }, {
                paragraphNr: 238,
                description: "Aller au sud"
            }]
        }, {
            paragraphNr: 337,
            description: "Un déclic s'entend et vous vous effondrez. Lorsque vous reprenez connaissance, vous ne reconnaissez pas le décor autours de vous.",
            choices: [{
                paragraphNr: 267,
                description: "Poursuivre"
            }]
        }, {
            paragraphNr: 362,
            description: "Vous découvrez une porte secrète",
            choices: [{
                paragraphNr: 175,
                description: "Poursuivre"
            }]
        }, {
            paragraphNr: 369,
            description: "Vous avalez une gorgée du liquide",
            choices: [{
                paragraphNr: 109,
                description: "Poursuivre"
            }]
        },
         {
            paragraphNr: 391,
            description: "",
            choices: [{
                paragraphNr: 52,
                description: "Partir à l'est"
            }, {
                paragraphNr: 362,
                description: "Chercher un passage secret"
            }, {
                paragraphNr: 48,
                description: "Prendre la direction du sud"
            }]
        }
           ];
    }

    getBook() {
        return self.book;
    }
}

export default WarlockOfFiretopMountainService;