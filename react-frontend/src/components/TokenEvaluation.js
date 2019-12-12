import React from 'react'

export default class TokenEvaluation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

        this.OnChangeHandler = this.OnChangeHandler.bind(this)
    }

    OnChangeHandler(event) {
        this.setState({ text: event.target.value })
    }



    render() {
        if (this.state.text !== '')
            var words = [...this.state.text.matchAll('{(.*?)}')]
        if (words) {
            var titledWords = words.map(item => {
                return (<p>{item[1].charAt(0).toUpperCase() + item[1].slice(1)}</p>)
            })
        }


        return (
            <section>
                <p>Evaluacion de token</p>
                <textarea onChange={this.OnChangeHandler}></textarea>
                {titledWords}
            </section>

        )
    }
}