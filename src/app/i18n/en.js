const englishTranslations = {
    "application.description" : "The 'Gamebooks Assistant' Website is an aid to play fighting fantasy gamebooks (or similar books). The app allow to keep the statistics, items and notes of the player. Paragraphs'choices & description of the book can be edited and shared between several games.",
    'yesno_true': 'yes',
    'yesno_false': 'no',
    'NumberOfParagraphs': '{{ (!!numberOfParagraphs ? numberOfParagraphs + " paragraphs" : "") }}',
    'ChoiceAdventure': 'Select the adventure "{{ adventureName }}"',
    'ChoosenAdventure': 'The adventure "{{ adventureName }}" is choosen',
    'ChoiceGame': 'Select the game "{{ adventureName }}" of the player "{{ playerName }}"',
    'ChoosenGame': 'The game "{{ adventureName }}" of the player "{{ playerName }}" is choosen',
    'ChoiceLibrary': 'Select the library "{{ siteName }}"',
    'ChoosenLibrary': 'The library "{{ siteName }}" is choosen',
    'DupplicateParagraph': 'The paragraph "{{paragraphNr}}" already exist',
    'ExportGame': "Export the game of '{{playerName}}' from the adventure '{{adventureName}}'",
    'ExportAdventure': "Export the adventure of '{{adventureName}}'",
    'export_file': 'Download file',
    'export_email': 'Sent email',
    'export_text': 'Text',
    'import_file': 'Upload file',
    'import_text': 'Text',
    'error.adventureAlreadyExist': 'Adventure already exists',
    'error.libraryAlreadyExist': 'Library already exists (JSON url)'
};

export {englishTranslations as default};