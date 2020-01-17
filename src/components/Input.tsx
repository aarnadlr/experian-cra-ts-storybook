import React from 'react';

// type InputProps = {
//   onChange?: any,
// }
interface InputProps {
  onChange?: any,
}

const Input: React.FC<InputProps> = ({onChange}) => {
	return (
		<div>
			<input onChange={onChange} type="text" name="username" id="username"/>
		</div>
	);
};

export default Input;
