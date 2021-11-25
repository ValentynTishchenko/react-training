import * as React from 'react';

import {CommentCollapsible} from "./4.LifecycleMethods";

export class ItemList extends React.Component {
  state = {
    items: [
      {id: 1, text: 'Item 1'},
      {id: 2, text: 'Item 2'},
      {id: 3, text: 'Item 3'},
      {id: 4, text: 'Item 4'},
    ]
  };

  render() {
    const {items} = this.state;
    return <ul>
      {items.map((item) => <CommentCollapsible key={item.id} text={item.text}/>)}
    </ul>;
  }

}
