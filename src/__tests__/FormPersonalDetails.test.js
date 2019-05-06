import React from 'react'
import { shallow } from 'enzyme'

import FormPersonalDetails from '../components/FormPersonalDetails'

describe('FormPersonalDetails', () => {
    it('should render correctly', () => {
        const component = shallow(<FormPersonalDetails />)
        expect(component).toMatchSnapshot()
    })
})
