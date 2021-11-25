import * as React from 'react';

// Recommend: https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props

export class Counter extends React.Component {
  state = {
    value: 0,
    value2: 0,
  };

  updateValue = () => {
    const {value} = this.state;

    this.setState({value: value + 1});
    // this.setState((state) => ({value: state.value + 1}))
  };

  onClick = () => {
    const {value} = this.state;

    this.setState({value: value + 1});

    // this.updateValue();
    // this.updateValue();
    // this.updateValue();
  };

  render() {
    const {value} = this.state;

    return <div style={{width: '3000px'}}>
      <input className="button" type="button" onClick={this.onClick} value="increase"/>: <b>{value}</b>
    </div>;
  }
}

export class StateBasedOnPropsComponent extends React.Component {
  state = {
    text: 'test-from-state'
  };

  constructor(props) {
    super(props);

    this.state.text = props.text;
  }

  render() {
    return <p>{this.state.text}</p>;
  }
}