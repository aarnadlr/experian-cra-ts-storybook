import React from 'react';

type HeaderProps = {
  content: string,
}

const Header: React.FC<HeaderProps> = ({content}) => {
    return (
        <h1>
            This is a Header: {content}
        </h1>
    );
};

export default Header;
