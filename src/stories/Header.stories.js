import React from 'react';
import Header from "../components/Header";

export default {
  title: 'Header',
  component: Header,
};

export const HeaderOne = ()=> <Header content={'from storybook 111!'}/>;

export const HeaderTwo = ()=> <Header content={'from storybook 222!'}/>;
