import React from 'react';
// import { action } from '@storybook/addon-actions';
import Box from "../components/Box";

export default {
  title: 'Box',
  component: Box,
};


export const BoxOne = ()=> <Box color={'pink'}/>;

export const BoxTwo = ()=> <Box color={'cyan'}/>;
