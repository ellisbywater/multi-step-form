import React, {Component} from 'react'

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault()
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <div>
                Form User Details
            </div>
        )
    }
}

export default FormUserDetails