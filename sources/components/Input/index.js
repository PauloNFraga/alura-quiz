import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  margin: 5px;
  padding: 5px 10px;
  font-size: 14px;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.secundary};
  border-radius: 5px;
//   border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.success};
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        />
    </div>
  );
}