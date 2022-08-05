# Environment
yarn 1.22.11
node 16.16.0

# Running the project
yarn start | npm start

# Summary
This is a simple image search project for showcasing purposes. The stack:
* React.js
* MUI
ing
I've decided to keep things as simple as possible. No 3rd party http libraries, only fetch and hooks.
The Structure of the project is pretty classic, it follows the Container pattern. Pages being containers, which
can be connected to redux in the future, or contain complex operations. Other components should remain dummy (stateless)

I implemented a simple debounce functionality with the help of Lodash. So I prevent the user from sending new requests to
pixabay everytime the input changes, instead, there's a little delay of 300ms.

Things I'd improve if I had more time:
* Better responsiveness
* Use Routing library
* Write tests
* Create a CI/CD pipeline.
* Implement pre-commit to run linters and check tests
* Implement i18 library in case we want to support multiple languages

<img width="698" alt="Screen Shot 2022-08-05 at 9 13 13 AM" src="https://user-images.githubusercontent.com/18222983/183095380-339c7036-95ba-4075-8396-7f84fcae9eae.png">


