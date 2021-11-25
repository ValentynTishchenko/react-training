import * as React from 'react';

// https://www.w3schools.com/react/react_jsx.asp
// https://ru.reactjs.org/docs/introducing-jsx.html
// https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/

export class MyFirstComponent extends React.Component {
  render() {
    return <p>Hello world</p>;
  }
}

export const MyFirstFunctionComponent = () => {
  return <p>Hello world</p>;
};

export const myFirstComponent = React.createElement('p', {}, 'Hello world');