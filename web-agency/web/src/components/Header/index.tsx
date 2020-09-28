import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiAlignJustify } from 'react-icons/fi';

import { Container } from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }: IHeaderProps) => {
  const desktopSize = 1100;
  const [isDesktop, setIsDesktop] = useState(true);
  const [menu, setMenu] = useState(false);

  window.onresize = () => {
    setIsDesktop(window.innerWidth > desktopSize);
  };

  useEffect(() => {
    setIsDesktop(window.innerWidth > desktopSize);
  }, []);

  function handleMenu(): void {
    setMenu(!menu);
  }

  return (
    <>
      <Container>
        <div>
          <h1>{`Web Agency ${title} Page`}</h1>
          <nav>
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
            <FiShoppingCart size={isDesktop ? 20 : 18} />
            <FiAlignJustify size={isDesktop ? 20 : 18} onClick={handleMenu} />
          </nav>
        </div>
        <ul
          style={{
            visibility: menu && !isDesktop ? 'visible' : 'hidden',
            opacity: menu && !isDesktop ? 1 : 0,
            transition: 'visibility 0s, opacity 0.5s linear',
          }}
        >
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
    </>
  );
};

export default Header;
