const englishTranslations = {
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