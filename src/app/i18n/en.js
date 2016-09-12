const englishTranslations = {
    'yesno_true': 'yes',
    'yesno_false': 'no',
    'NumberOfParagraphs': '{{ (!!numberOfParagraphs ? numberOfParagraphs + " paragraphs" : "") }}',
    'ChoiceAdventure': 'Select the adventure "{{ adventureName }}"',
    'ChoosenAdventure': 'The adventure "{{ adventureName }}" is choosen',
    'ChoiceGame': 'Select the game "{{ adventureName }}" of the player "{{ playerName }}"',
    'ChoosenGame': 'The game "{{ adventureName }}" of the player "{{ playerName }}" is choosen',
    'DupplicateParagraph': 'The paragraph "{{paragraphNr}}" already exist',
    'ExportGame': "Export the game of '{{playerName}}' from the adventure '{{adventureName}}'"
};

export {englishTranslations as default};
