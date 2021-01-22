# MindX - Web Fullstack - W46
Homework for MindX Web Fullstack course.

## Day 1 - Jan 08, 2021: [[210108 - Task List]](210108-task-list)

Demo page: [Task List](https://nguyennganhi.github.io/mindx-web-fullstack-w46/210108-task-list)

* Add new task (validate if the task is empty)
* Display added tasks in a list
* Store tasks in local storage so that task list remains after refreshing the page
* Filter tasks by name
* Delete individual task
* Clear all task with popup confirmation

## Day 2 - Jan 11, 2021: [[210111 - User Card]](210111-user-card)

Demo page: [GitHub User Card](https://nguyennganhi.github.io/mindx-web-fullstack-w46/210111-user-card)

* Enter a GitHub username (validate if the username exists)
* Display the information of that user name using GitHub users API in the form `https://api.github.com/users/{name}` 
* Information include: name, avatar, email, company, number of repositories, number of followers, number of following

## Day 3 - Jan 15, 2021: [[210115 - Node.js Practice]](210115-nodejs-practice)

* [data.json](210115-nodejs-practice/data.json) includes an array of students, each student is in the form of `{"_id":"2bd9g8","name":"Phạm Nghĩa","mark":2}`
* Fun `npm i` to install dependencies
* Functions are implemented in [index.js](210115-nodejs-practice/index.js)
* Functions are tested in [test.js](210115-nodejs-practice/test.js) using `npm run test` 
 
## Day 4 - Jan 18, 2021: [[210118 - Vote Yes/No]](210118-vote-yes-no)

* Practice using `node.js` and `express.js`
* In the page `Ask Question`, users can enter yes/no questions for others to answer
* Questions are limited to 200 characters (with a remaining-character-counter); pasted questions that are too long are sliced to exactly 200 characters
* Check for empty duplicated questions
* After an user submitted a valid question (which is stored in [210118-vote-yes-no/data.json](data.json)), they are redirected to the `Home Page`
* A random previously asked question will appear
* When an user vote `yes` or `no` on a question, the total number of yes votes and no votes will appear, and the next question will be loaded after a couple of second
* Users can also choose `next` to skip a question
* There is a navigation bar on top to navigate between `Home Page` and `Ask Question`
