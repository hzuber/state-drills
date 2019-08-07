import React from 'react';

export default class Bomb extends React.Component {
    state = {count : 0};

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log('state', this.state)
            const newCount = this.state.count + 1
            this.setState({ count : newCount})
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tickOrTock(){
        const {count} = this.state
        if(count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        } else if (count % 2 === 0){
            return 'tick'
        } else {return 'tock'}
    }
    render(){
        return(
            <div>
                <h1>A Bomb!</h1>
                <p>
                {this.tickOrTock()}
                </p>
            </div>
        )
    }
}