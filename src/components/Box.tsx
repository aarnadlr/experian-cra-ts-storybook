import React from 'react';

type BoxProps = {
    color: string
}
const Box: React.FC<BoxProps> = ({color}) => {
    return (
        <div style={{width: '150px', height: '100px', backgroundColor: color}}>
            Box
        </div>
    );
};

export default Box;
