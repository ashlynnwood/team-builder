# team-builder

  ![GitHub-license](https://img.shields.io/badge/License-MIT-blue)

  ## Preview
  ![team-builder-preview](./team-builder.gif)

  ## Description
  This project was designed to be a Team Profile builder. It allows businesses to quickly and easily generate a Team Profile page with summaries of each employee via command line prompts with node.js.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To use this team builder application, you will need to install node.js and inquirer@8.2.4. To install necessary dependencies in node, run the following command: 
  npm i

  ## Usage
  After installation, user can run node index.js in the terminal. This will provide the user with a series of prompts in the terminal for user input, which will ask them questions about each employee to start building the team. The first series of prompts will be to create the team manager, such as manager name, id, email, and office number. After a manager is created, user will be asked if they would like to create another employee, of type Engineer or Intern. The user can use the arrow keys to navigate their selections. Input can be directly typed in the terminal for each question and hit enter, which will take the user to the next question. After all employees are entered, the user will select the "I don't want to add any more team members" option, ending the prompts and generating their team profile html page in the dist folder.

  ## License
  This project is licensed under the MIT.

  ## Contributing
  To contribute to this project, gitfork and PR.

  ## Tests
  To run tests, run the following command: 
  npm test

  ## Questions 
  If you have any questions about the repo, open an issue or 
  contact me directly at ashlynnnwood@gmail.com. You can find more of my work at https://github.com/ashlynnwood.