import React from 'react'
import { shallow } from 'enzyme'

import FormPersonalDetails from '../components/FormPersonalDetails'
let component
describe('FormPersonalDetails', () => {
    beforeEach(() => {
        const mockValues = {
            city: '',
            occupation: '',
            bio: ''
        }
        const handleChange = jest.fn()
        component = shallow(<FormPersonalDetails values={mockValues} handleChange={handleChange}/>)
    })
    it('should render correctly', () => {
        expect(component).toMatchSnapshot()
    })
})
