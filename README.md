# Test Driven Development (TDD) with ReactJS
The reason I develop this app was to learn how to test ReactJS applications with Jest and React Testing Library

### What is this about
I wanted to quickly develop the layout so I took the chance to use TailwindCSS at the same time.
I had only used TailwindCSS once before, for another small project, the focus is not really in creating a beautiful app (it's not! you've been warned!) but just to have enough UI to make clear what is happening.

### Tech involved
* ReactJS
* TailwindCSS
* Reeact Testing Library and Jest
* Axios

### Notes
React Testing Library and Jest make it very easy to implement mocking async functions.
You just need to:
1. add a __mocks__ folder next to the components accessing the async function
2. copy your api/async code inside that directory
3. modify the body of the function in order to provide a mock response (eg. a json object with the same structure as the one returned by the API)
4. just test with 'npm run test'! The original async call will be hijacked by the mock one!
