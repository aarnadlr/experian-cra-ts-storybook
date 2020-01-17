import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from "../components/Input";

export default {
  title: 'Input',
  component: Input,
};

export const InputOne = ()=> <Input onChange={action('changed!')}/>;

export const InputTwo = ()=> <Input onChange={action('changed!')}/>;
