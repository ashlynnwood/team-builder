// bulk of code will be here

// require all of your classes
// require inquirer, path if needed (should be needed because html file is in dist folder), fs

// require your page template

// empty team members array
const teamMembers = [];
// empty id array
const id = [];

// function that wraps everything (like an init function)

  // function for creating a manager (call this at the bottom of your init func- first thing we want user to do)
    // inquirer prompt with the manager questions
    // in your .then - set up a variable for manager that is equal to a new instance of your Manager class passing in the responses you received from the user's input
      .then((answers) => {
        // set up variable = to new instance of that manager class
        const manager = new Manager(answers.name, answers.officeNumber)
        // going to do this with every team member
        // building array of classes
        teamMembers.push(manager);
      })
      // push that var to your team members array, push id to id array
      // call your next func

  // next func should be for creating the team
    // this should ask the user what type of employee they would like to create
    // in your .then, have a conditional or switch case that runs that employee types func based on what they choose
      // if they choose an intern, set up func createIntern -->inquirer prompt w intern questions --> at end create Intern variable 
      // = new instance of intern (passing in values you need) (push to teamMem array)
    // or if they select the option that says they are done adding team mems, run the func that builds the team


    function buildTeam() {
      // fs.writeFileSync(yourPathToDistFolder, functionFRomPageTemplate(teamMembers), 'utf-8');
      // second arg- data (what we're actually writing to file)
    }

    // make sure to call your init function