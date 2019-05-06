import React from 'react'
import { shallow } from 'enzyme'

import FormUserDetails from '../components/FormUserDetails'

describe('FormUserDetails', () => {
    it('should render correctly', () => {
        const component = shallow(<FormUserDetails />)
        expect(component).toMatchSnapshot()
    })
})
