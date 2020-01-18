import React, {useState} from 'react';
import Counter from './Counter';
import Reset from "./Reset";

type ParentProps = {
  // upperBound: number;
  // lowerBound: number;
  count: number;
  incrementor: number
  // initialCount: number;
};

const Parent: React.FC<ParentProps> = ({count, incrementor}) => {


	return (
		<div>
			This is a Parent.
            <Counter initialCount={count} incrementor={incrementor}/>

            <Reset count={count} upperBound={25} lowerBound={-25}/>
		</div>
	);
};

export default Parent;
