import React, {Component} from 'react'

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div>
                Form Personal Details
            </div>
        )
    }
}

export default FormPersonalDetails