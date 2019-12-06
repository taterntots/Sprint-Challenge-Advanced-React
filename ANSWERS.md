- [ ] Why would you use class component over function components (removing hooks from the question)?

Beyond syntax there really isn't too much of a difference between the two. Functional components can't use lifecycle hooks and cannot use setState() in our components. These days the industry has largely moved to function components, but we still need to know class components for legacy reasons (old code bases from companies may still be written in classes). 

- [ ] Name three lifecycle methods and their purposes.

render() - This tells React to return some piece of the DOM. It's required for class components to display (return) elements to the page, which won't do so without it.

componentDidMount() - this method invokes immediately after a component is mounted and is used to fetch data via HTTP.

constructor() - the constructor method is used to initialize local state by assigning objects to this.state. It also lets us bind event handler methods to an instance.

- [ ] What is the purpose of a custom hook?

A custom hook allows us to apply non-visual behavior and stateful logic throughout our built components by reusing the same hook multiple times. Essentially it helps keep our code DRY, allowing us to write a piece of reusable code once and spread it around where needed.

- [ ] Why is it important to test our apps?

There are many reasons why testing is important for our apps.
-Allows for squashing bugs sooner rather than later
-Acts as a form of documentation for helping us and others understand our code
-encourages more testable code
-greatly reduces the risk of regressions
