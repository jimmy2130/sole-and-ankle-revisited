import React from 'react';
import styled from 'styled-components/macro';
import Icon from '../Icon';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <IconGroup>
            <UnstyledButton>
              <Icon id="shopping-bag" size={24} strokeWidth={1.5} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" size={24} strokeWidth={1.5} />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" size={24} strokeWidth={1.5} />
            </UnstyledButton>
          </IconGroup>
        </Side>
      </MainHeader>

      <MobileMenu
        title="Menu"
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }
  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const IconGroup = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    justify-content: flex-end;
    align-self: flex-start;
    gap: 24px;
    color: ${COLORS.gray[900]};
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
