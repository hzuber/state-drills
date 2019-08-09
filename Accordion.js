import React from 'react';

class Accordion extends React.Component {
    state = {
        currentSection: null,
    }
    handleButtonClick(index) {
        this.setState({currentSection : index === this.state.currentSection ? null : index})
    }
    renderSection() {
        return this.props.sections.map((section, index) => (
            <li>
                <button key = {index} onClick = {() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {index === this.state.currentSection && (
                    <p>
                        {section.content}
                    </p>
                )}
            </li>
        ))
    }
    
    render() {
        return (
            <ul>
                {!!this.props.sections ? this.renderSection() : <li></li>}
            </ul>
        )
    }
}

export default Accordion;