import React from 'react'
import axios from 'axios'

export default class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: {}, pairSum: 0, primeSum: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async () => {
        var formData = new FormData();
        var file = document.querySelector('#file');
        formData.append("fileNumbers", file.files[0]);
        let result = await axios.post('http://localhost:3100/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (result.status === 200) {
            console.log(result)
            this.setState({ pairSum: result.data.pairSum, primeSum: result.data.primeSum })
        }
        else {
            alert('error')
        }
    }

    render() {
        return (
            <section>
                <p>Suma de los Números dentro de un archivo</p>
                <input id="file" type="file" onChange={this.handleChange} />
                <p> Suma de Pares: {this.state.pairSum}</p>
                <p> Suma de Primos: {this.state.primeSum}</p>
            </section>
        )
    }
}