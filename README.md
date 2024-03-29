10 Object-Oriented Programming: Team Profile Generator
License: MIT

Description
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so the scope of this project includes writing a unit test for every part of the code and ensuring that it passes each test.

Motivation
Streamlining each step of the programming process enables the developer to spend more time problem-solving and less time duplicating efforts. Automating the process of creating README.md files is one step in streamlining project development.

Learning Targets
This exercise provided my first experience with writing tests and utilizing jestjs.io to do so.

Table of Contents
Core Objectives Met
Technologies Used
Installation
Usage
License
Contributing
Tests
Questions
Core Objectives Met
Following user responses to prompts for team members and their information, an HTML file is generated that displays a nicely formatted team roster based on user input.
When a user clicks on an email address in the HTML, their default email program opens and populates the TO field of the email with the address.
When a user clicks on the GitHub username, that GitHub profile opens in a new tab.
When a user starts the application, they are prompted to enter the team manager’s name, employee ID, email address, and office number.
When a user enters the team manager's name, employee ID, email address, and office number, they are presented with a menu with the option to add an engineer or an intern or to finish building their team.
When a user selects the engineer option, then they are prompted to enter the engineer’s name, ID, email, and GitHub username, and are taken back to the menu.
When a user selects the intern option, then they are prompted to enter the intern’s name, ID, email, and school, and are taken back to the menu.
When a user is finished building their team, then they exit the application and the HTML is generated.
Technologies Used
JavaScript
Node.js
Shields.io
Jestjs.io
NPM Inquirer Package
NPM FS Package
NPM Colors Package
Installation
Clone this Team-Profile-Generator repo to your machine.
Open the repo in your terminal.
Run npm init
Run npm install

Usage
Open Team-Profile-Generator (now stored on your machine) in your terminal.
Run node index.js
You will be prompted to answer questions about your team. Answer each question.
Your My-Team.html file will write to the output folder.
Screenshots and Demo Videos
VIDEO LINK | Full Application Demonstration
DESCRIPTION: Running tests, then creating a My-Team HTML file by following the in-terminal prompts. Verifying that the My-Team file is created and meets project requirements.

SCREENSHOT | Demo console

![image](https://user-images.githubusercontent.com/80792502/123052080-467cec00-d3b7-11eb-98ab-adac1a78d980.png)

MIT License
©2021 Alice Waweru

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Questions
For inquiries, please contact Alice Waweru.

Special thanks to my tutor, Armando Osorio, for guidance on this project.
