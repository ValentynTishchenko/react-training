import * as React from 'react';

// https://ru.reactjs.org/docs/components-and-props.html
// https://metanit.com/web/react/2.3.php

export class SimpleViewClassComponent extends React.Component {

  render() {
    const {value} = this.props;

    return <p>Your value: {value}</p>;
  }
}

export const SimpleView = ({value}) => {
  return <p>Your value: {value}</p>;
};


const SimpleViewComponent = () => {
  const [value, setValue] = React.useState('');

  return <>
    <SimpleView value={value} value2={{}} items={[]}/>
    <SimpleViewClassComponent value={'test'}/>
  </>;
};