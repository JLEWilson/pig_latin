# _Pig Latin_

#### By _**Jacob Wilson**_ and _**Matt Casperson**_ and _**Chase Stokes**_

#### _Takes in a sentence and returns it in pig latin_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_Takes in a sentence, checks each word of the sentence to see if they begin with a vowel or a consonant, adjusts the words propperly to make the word piglatin, and then puts it back into a sentence and displays it._

## Setup/Installation Requirements

Leave nothing to chance!

* _You can find the github repository [here](C:/Users/Jacob/Desktop/Epicodus/pig_latin/)_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_


## Known Bugs

* _Does not currently accoutn for punctuation_

## Licence - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a seperate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _2021_ _Jacob Wilson_ _Matt Casperson_ _Chase Stokes_

### Tests


# Describe: noInputtedWords()

Test: "It will return true if there are no arguments"
Code: noInputtedWords("");
Expected Output: "true"

Test: "It will return false if there are any arguments"
Code: noInputtedWords("words, birds");
Expected Output: "false"

# Describe: pigLatin()

Test: "It will add way to the end of a word"
Code: pigLatin("epicodus");
Expected Output: "epicodusway"

Test: "It will add way to the end of multiple words"
Code: pigLatin("epicodus is cool");
Expected Output: "epicodusway isway coolway"

Test: "It will not add way to the end of words that begin with consonants"
Code: pigLatin("coding");
Expected Output: "coding"

Test: "It will move first consective consonants to the end and add ay"
Code: pigLatin("there");
Expected Output: "erethay"

Test: "If q is one of the letters being moved it will also take the u"
Code: pigLatin("squeal");
Expected Output: "ealsquay"

Test: "If there is punctuation do not count it as part of a word"
Code: pigLatin(" 'squeal' ");
Expected Output: " 'ealsquay' "