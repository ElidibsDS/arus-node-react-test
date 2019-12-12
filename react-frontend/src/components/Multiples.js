import React from 'react';

export default class Multiples extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', result: '' };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let counter = 1
        let multiple = 4;
        let result = "Los Multiplos de 4 son: "
        while (multiple * counter <= event.target.value) {
            result += counter === 1 ? `${multiple * counter}` : `, ${multiple * counter}`
            counter++
        }

        this.setState({ value: event.target.value, result: result })
    }

    render() {
        return (
            <section>
                <p>Los multiplos de 4 empezando de 4 a N</p>
                <input value={this.state.value} onChange={this.handleChange} />
                <p>
                    {this.state.result}
                </p>
            </section>
        )
    }
}

