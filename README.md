# Frontend Test for Bud

Go here to check out the app in working production: `https://bud-tech-test-mzwi.vercel.app/`

## SetUp Instructions
1. Clone this repository
2. cd into the /bud-tech-test directory
3. Type the following command to install the dependencies and run the project
````
npm install && npm run start

````

To build the application, run the following command
````
npm run build

````

To run the test files in the application, run the following command
````
npm run test

````
## Acceptance Criteria: ##

##### :wrench: The application should: #####

- [x] Fetch and initialise from the API endpoint (`http://www.mocky.io/v2/5c62e7c33000004a00019b05`)
- [x] Filter the transactions to the _10 smallest expenses_ and display them accordingly
- [x] The description, date and amount should be displayed for each transaction

###### _Must Include:_ ######
- [x] React
- [x] Bundle assets with a tool of choice
- [x] Accessibility support

###### _Do Not_ ######
- [x] Don’t use Create React App or any other tools that remove the need for set up
- [x] Don’t use libraries such as axios, lodash, jQuery and Bootstrap

###### _Optional Parameters_ ######
- [x] Unit tests
- [x] Styled Components
- [x] Error and loading state handling

###### _Notes & Feedback_ ######

- A fun and challenging task to do. I think the openness towards the design of the whole application is very good. I would however say that, depending on the level this test is for, you might want to throw some dummy data in the api which will cause errors, or issues, so testing can be done to check against it.
- Don't have any other feedback.