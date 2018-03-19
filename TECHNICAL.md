# Development design choices

### naming convention for id of html element

As all the html of the whole application is merged into a single index.html file, all id must be unique along all screens.

id must:
* begin with a screen identification
* contains the element identification
* begin with the suffix -id because html id will be also be used in i18n mapping tables and must be differenciate from other type of texts (errors, placeholder, etc.)

e.g. title of the gamebooks list screen:

gamebooks-title-id

| Screen / Component                           | id prefix      |
| :------------------------------------------- | -------------: |
| footer                                       | footer         |
| modal of messages                            | modal          |
| homepage                                     | home           |
| pageNotFound                                 | 404            |
| confirmation                                 | confirm        |
| localStorageData                             | data           |
| gamebooks list                               | books          |
| gamebook detail                              | book           |
| gamebook edit                                | book-edit      |
| gamebook new                                 | book-new       |
| attribut edit                                | attr-edit      |
| attribut new                                 | attr-new       |
| gamebooks list data                          | data-books     |
| gamebook data                                | data-book      |
| readings list                                | reads          |
| paragraphs list                              | paras          |
| paragraph edit                               | para-edit      |
| paragraph new                                | para-new       |
| reading edit                                 | read-edit      |
| character edit                               | char-edit      |
| character new                                | char-new       |
| stats edit                                   | stats-edit     |
| stats new                                    | stats-new      |
| reading continue                             | read-cont      |
| reading data                                 | data-read      |
| dice edit                                    | dice-edit      |
| dice new                                     | dice-new       |
| dices list (dices configuration)             | dices          |
| reading - continue or new reading            | read-contornew |
| item edit                                    | item-edit      |
| item new                                     | item-new       |
| reading new                                  | read-new       |
| paragraph detail                             | para           |
| label edit                                   | label-edit     |
| sections list (user interface configuration) | sections       |
| section edit                                 | section-edit   |
| section new                                  | section-new    |
