import React from "react";
import styled from "styled-components";

const SiteHeader = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: #191817;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif", serif;
  font-size: 3.25rem;
  font-weight: 700;
  &:before,
  &:after {
    content: "";
    width: 2rem;
    border-top: #e3dccf 0.25rem solid;
  }
  &:before {
    margin-right: 0.5rem;
  }
  &:after {
    margin-left: 0.5rem;
  }
`;

const Header = () => (
  <SiteHeader href="/">
    <Logo>MyNewspaper</Logo>
  </SiteHeader>
);

export default Header;
