/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label={title}>
        <IconWrapper>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" size={24} strokeWidth={2} />
          </UnstyledButton>
        </IconWrapper>
        <Side/>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Side>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  padding: 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  position: fixed;
  top: 26px;
  right: 16px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  color: var(--color-gray-700);
  text-decoration: none;
`;

export default MobileMenu;
