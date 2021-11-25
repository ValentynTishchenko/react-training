import * as React from 'react';

// https://programmingwithmosh.com/javascript/react-lifecycle-methods/
// https://programmingwithmosh.com/react/react-virtual-dom-explained/

export class CommentCollapsible extends React.PureComponent {
    state = {
        isOpen: false
    }

    toggleComment = () => {
        this.setState((state) => ({isOpen: !state.isOpen}))
    }

    render() {
        const {text} = this.props;
        const {isOpen} = this.state;

        return <div style={{margin: '12px 0 0'}}>
            <input type="button" onClick={this.toggleComment} value="Open"/>
            {isOpen && <Comment text={text}/>}
        </div>

    }
}


export class Comment extends React.Component {
    constructor(props) {
        super(props);
        console.log('hello from constructor');
    }

    componentDidMount() {
        console.log('mounted');
    }

    // static getDerivedStateFromProps() {
    // null to skip
    // handle state if it depends on props
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        const {text} = this.props

        return <p>{text}</p>
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
        // ability to fix some changable data
    // }

    componentWillUnmount() {
        console.log('unmounted');
    }
}

Comment.defaultProps = {
    text: 'No text'
}