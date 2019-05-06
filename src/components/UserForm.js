import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

class UserForm extends Component {
    state = {
        formStep: 1,
        firstName: '',
        lastName:'',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    
    // Proceed to next step
    nextStep = () => {
        const { formStep } = this.state
        this.setState({
            formStep: formStep + 1
        })
    }
    // Go back to previous step
    previousStep = () => {
        const { formStep } = this.state
        this.setState({
            formStep: formStep - 1
        })
    }

    // handle the change of all fields
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        })
    }
    render() {
        const { formStep, firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio}
        
        switch(formStep) {
            case 1:
                return (
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
              return (
                <FormPersonalDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
              )
            case 3:
              return (
                <h3>Confirm</h3>
              )
            default:
                return (
                    <h1>Home</h1>
                )
        }
    }
}

export default UserForm
