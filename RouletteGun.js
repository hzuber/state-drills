import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber : 8
    }
    constructor(props) {
        super(props)
        this.state={
            spinningTheChamber: false,
            chamber: null,
        }
    }
    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const chooseChamber = (Math.ceil(Math.random() * 8))
            this.setState({
                chamber : chooseChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }
    renderDisplay(){
        const {chamber} = this.state
        const {spinningTheChamber} = this.state
        if (spinningTheChamber === true){
            return 'spinning the chamber and pulling the trigger!...'
        } else if (chamber === this.props.bulletInChamber){
            return 'BANG!!!!'
        } else {
            return "you're safe!!"
        }
    }
    componentWillUnmount(){
        clearTimeout(this.timeout);
    }
    render(){
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick = {this.handleButtonClick}>
                    'Pull the trigger!'
                </button>
            </div>
        )
    }
}

export default RouletteGun;