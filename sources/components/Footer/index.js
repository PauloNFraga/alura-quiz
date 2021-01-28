<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> f34ad02aa897a0fa3beb0007bf2dd1efd9723fbc
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px; 
  img {
    width: 58px;
    margin-right: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        <a href="https://www.alura.com.br/">
          <span>Imersão React Next.js</span>
        </a>
        da alura
      </p>
    </FooterWrapper>
  );
}