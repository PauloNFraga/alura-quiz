<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> f34ad02aa897a0fa3beb0007bf2dd1efd9723fbc
import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.contrastText };
  background-color: ${({ theme }) => theme.colors.mainBg };
  border-radius: 10px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.success };

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 12px;
  }
`;

export default Widget;