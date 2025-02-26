import { styled } from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.color};
`;

export const ErrorText = styled.span`
  color: #ff0000;
`;
