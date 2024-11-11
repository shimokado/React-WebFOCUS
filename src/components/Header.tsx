import React from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  console.log('Header component rendered');
  return (
    <header>
      <h1>Header</h1>
      <i className="fa-regular fa-user"></i> {/* classをclassNameに変更 */}
    </header>
  );
};

export default Header;