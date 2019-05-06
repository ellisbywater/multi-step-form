import React from 'react'
import { shallow } from 'enzyme'

import UserForm from '../components/UserForm'

describe('UserForm', () => {
    it('should render correctly', () => {
        const component = shallow(<UserForm />)
        expect(component).toMatchSnapshot()
    })
})
