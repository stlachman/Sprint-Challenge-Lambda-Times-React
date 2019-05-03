# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  PropTypes is a package that can be used with React to check the type of data (‘string’, ‘object’, etc.) passed around your React application. Type checking gives you the opportunity to check if the data that you are receiving corresponds to the data that you expected to receive. This helps prevent errors and bugs in your code because if you are expecting a string for the src of an image for example, and you receive another type, say a number, the image will not render correctly. By  type checking your data, you can avoid these errors or find a way to handle them gracefully so that the user is notified of her error. 

- [ ] Describe a life-cycle event in React?

  A life cycle event describes a point in time of React component and allows developers to hook into these events to perform actions. For example, the ComponentDidMount life cycle event lets the developer know that the component has rendered without any errors errors. ComponentDidMount is only run once in the life cycle of a component while other lifecycle methods (such as ComponentDidUpdate) can surface multiple times in the life cycle of a component. ComponentDidMount is often used to fetch data from an API and set that data to the state of the component using setState.


- [ ] Explain the details of a Higher Order Component?

  A higher order component is a component that takes another component as an argument and returns a new component. The higher order component allows us to reuse logic associated with a component somewhere else in our application, so it keeps our code DRY.  One example of a HOC can be found in the styled components library. If we define a button with specific css properties and then we want to modify some of the features of the button (like the color of the text or the background color), then we could create a HOC that takes the button component and passes it in to this new button. Then we could add our styles to the new button and return the new button for use in our application. 


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

  One way to style components in React is by using plain old CSS (or the preprocess of your choice) and importing the CSS file to the component we would like to style.  The benefit of this approach is that it is familiar to people outside of the React ecosystem and it is the simplest way to get started when styling an application. 

  Another approach would be to use an external library such as Reactstrap to handle the majority of your styling. In this approach, you would import and use predefined components to create all of the elements of your website and pass down props to the component to modify the color or properties of a UI element. The benefit of this approach is that once you understand the library, styling a website becomes much faster than handwriting most of your CSS.

  A third approach	would be to use a CSS in JS library like styled components to style your application. In this pattern, your styles can live adjacent to the logic and heart of your component which can make the component easier to reason about while reducing the cognitive load of the development team since you don’t need to search through an external stylesheet to modify your component. By using a library like styled components, you can also create your own custom UI library (like reactstrap) but tailored to the needs of your particular product (and without the excess code of a css library). Finally, by using styled components you can avoid styles leaking into other parts of your application because each component receives a unique classname. 


## Project Setup

Follow these steps to set up your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [ ] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
