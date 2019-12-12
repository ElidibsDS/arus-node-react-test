import React from 'react'

export default class Fibonacci extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', result: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let number = event.target.value
        if (number.length > 1 || number > 2) {
            let fibarray = [1, 1]

            for (let i = 2; i < number; i++) {
                fibarray.push(fibarray[i - 2] + fibarray[i - 1])
            }
            this.setState({ value: number, result: fibarray[fibarray.length - 1] })

        }
        else {
            this.setState({ value: number, result: 1 })
        }

    }

    render() {
        return (
            <section>
                <p>Enésimo elemento de la serie de Fibonacci</p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.result}</p>
            </section>
        )
    }
}