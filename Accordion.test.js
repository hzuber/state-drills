import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe ('Accordion component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ('renders an empty li when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(wrapper.find('li').isEmpty()).to.equal(true)
    })
    it ('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections = {sections} />)
        expect(wrapper.find('p')).to.have.lengthOf(0)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(wrapper.find('p')).to.have.lengthOf(1)
    })
    it('only opens the last section when multiple sections have been clicked.', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(wrapper.find('p')).to.have.lengthOf(1)
    })
})