import * as React from "react";

// https://ru.reactjs.org/docs/handling-events.html
// https://ru.reactjs.org/docs/events.html
// https://ru.reactjs.org/docs/lifting-state-up.html
// https://metanit.com/web/react/2.5.php

export class ControlledFrom extends React.Component {
  state = {
    form: {
      login: '',
      password: ''
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log('onSubmit');
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };

  render() {
    return <form onSubmit={this.onSubmit}>
      <p>
        <input type="text" name="login" onChange={this.onChange}/>
      </p>
      <p>
        <input type="password" name="password" onChange={this.onChange}/>
      </p>

      <input type="submit" value="submit"/>
    </form>;
  }
}