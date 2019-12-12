import React from 'react'
import axios from 'axios'
export default class SumVentas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sells: []
        }
        this.load()
    }

    load = async () => {
        let result = await axios.get('http://localhost:3100/api/getsum')
        console.log(result)
        this.setState({ sells: result.data })
    }

    render() {
        let sells = this.state.sells.map(item => {
            return (
                <tr>
                    <td>{item.ciudad}</td>
                    <td>{item.mes}</td>
                    <td>{item.venta}</td>
                </tr>
            )
        })
        return (
            <table style={{ border: '1px solid black', marginLeft: 'auto', marginRight: 'auto' }}>
                <tbody>
                    <tr>
                        <td>Ciudad</td>
                        <td>Mes</td>
                        <td>Venta</td>
                    </tr>
                    {sells}
                </tbody>

            </table>
        )
    }
}