import styled from 'styled-components';
import { Priority } from 'src/types';
import { priorities } from 'src/constants';

export const TaskContainer = styled.li<{ priority: Priority }>`
  background: ${(props) => priorities[props.priority]};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  width: 100%;
  box-sizing: border-box;
`;

export const TaskPriority = styled.div`
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 5px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #333;
`;

export const Buttons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CreatedDate = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

export const Button = styled.button<{ color: string }>`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.color};
`;
