# Namaste React 🚀

# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing




 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init(N,jsdom,y,babel,y)
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom

## where to write test cases
- create `__tests__` folder anywhere in app
- create     `fileName.test.js` 
          or `fileName.test.js` 
          or `fileName.test.js` 
          or `fileName.test.js` in anywhere in app or in `__tests__` folder
- __ double underscore in called dunder