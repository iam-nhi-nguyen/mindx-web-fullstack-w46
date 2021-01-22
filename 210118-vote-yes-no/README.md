## Day 4 - Jan 18, 2021: [[210118 - Vote Yes/No]](.)

* Practice using `node.js` and `express.js`
* In the page `Ask Question`, users can enter yes/no questions for others to answer
* Questions are limited to 200 characters (with a remaining-character-counter); pasted questions that are too long are sliced to exactly 200 characters
* Check for empty duplicated questions
* After an user submitted a valid question (which is stored in [data.json](data.json)), they are redirected to the `Home Page`
* A random previously asked question will appear
* When an user vote `yes` or `no` on a question, the total number of yes votes and no votes will appear, and the next question will be loaded after a couple of second
* Users can also choose `next` to skip a question
* There is a navigation bar on top to navigate between `Home Page` and `Ask Question`
