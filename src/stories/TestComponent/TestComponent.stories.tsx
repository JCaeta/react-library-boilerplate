import React from 'react';
import {TestComponent} from '../../index';

export default
{
    title: 'TestComponent',
    component: TestComponent,
}

export const Primary = () => <TestComponent/>;

// export const Primary = Template.bind({});
// Template.args = 
// {
//     arg1: 'this is a string',
//     arg2: 123
// }