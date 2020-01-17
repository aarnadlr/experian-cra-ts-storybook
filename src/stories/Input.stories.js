// import React from 'react';
import * as React from "react"
import { action } from '@storybook/addon-actions';
import Input from "../components/Input";

export default {
  title: 'Input',
  component: Input,
};

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
//
// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

export const InputOne = ()=> <Input onChange={action('changed!')}/>;

export const InputTwo = ()=> <Input/>;
