import React from 'react'
import { shallow } from 'enzyme'

import FormUserDetails from '../components/FormUserDetails'

let component
describe('FormUserDetails', () => {
    beforeEach(() => {
        const mockValues = {
            firstName: '',
            lastName: '',
            email: ''
        }
        const handleChange = jest.fn()
        component = shallow(<FormUserDetails values={mockValues} handleChange={handleChange}/>)
    })
    it('should render correctly', () => {  
        expect(component).toMatchSnapshot()
    })
})
