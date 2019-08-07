import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {who: 'world'}
    }
    friendClick = () => {
        this.setState({who: 'friend!'})
    }
    reactClick = () => {
        this.setState({who: 'React!'})
    }
    worldClick = () => {
        this.setState({who: 'world!'})
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick ={this.friendClick}>Friend</button>
                <button onClick ={this.reactClick}>React</button>
                <button onClick ={this.worldClick}>World</button>
            </div>
        )
    }
}

export default HelloWorld;