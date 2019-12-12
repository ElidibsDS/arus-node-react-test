import React from 'react';
import axios from 'axios';

export default class Transaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = { transactions: [] };

        this.SendTransactions = this.SendTransactions.bind(this);
        this.GetTransactions = this.GetTransactions.bind(this);
    }
    SendTransactions() {
        for (let i = 0; i < 10; i++) {
            axios.post('http://localhost:3100/api/savetransaction', {
                user: Math.floor(Math.random() * (10 - 1) + 1),
                value: Math.floor(Math.random() * (2000 - 1000) + 1000)
            })
        }
        setInterval(this.GetTransactions, 500)
    }

    GetTransactions = async () => {
        let result = await axios.get('http://localhost:3100/api/transactions')
        if (result.status === 200) {
            this.setState({ transactions: result.data })
        }
        else {
            alert('error')
        }

    }

    render() {
        let tableTransactions = this.state.transactions.map(item => {
            return (
                <tr>
                    <td>{item.user}</td>
                    <td>{item.value}</td>
                </tr>
            )
        })
        return (
            <section>
                <p>Simulador de transacciones </p>
                <p>Hacer click en el botón para generar 10 transacciones y enviarlas al backend, las transacciones se actualizan cada 3 segundos y la lista desaparecerá completamente despues de 2 minutos</p>
                <button onClick={this.SendTransactions}>Generar Transacciones</button>

                <table style={{ border: '1px solid black', marginLeft: 'auto', marginRight: 'auto' }}>
                    <tbody>
                        <tr>
                            <td>Usuario</td>
                            <td>Valor</td>
                        </tr>
                        {tableTransactions}
                    </tbody>
                </table>
            </section>
        )
    }
}

