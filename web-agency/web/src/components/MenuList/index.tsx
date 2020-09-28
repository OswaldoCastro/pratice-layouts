import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const MenuList: React.FC = () => {
  return (
    <Container>
      <ul>
        <Link to="/">
          <li>Landing</li>
        </Link>
        <Link to="/">
          <li>Princing</li>
        </Link>
        <Link to="/">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/">
          <li>Careers</li>
        </Link>
        <Link to="/">
          <li>Portfolio</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </Container>
  );
};

export default MenuList;
