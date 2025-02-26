import { styled } from 'styled-components';

export const TaskListContainer = styled.ul({
  boxSizing: 'border-box',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  flex: '1 1 auto',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  listStyle: 'none',
  padding: '10px',
  margin: '0',
  gap: '15px',
  height: '100%',
  maxHeight: '100%',
  maxWidth: '1000px',
});

export const CreateTaskButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  button {
    padding: 8px 12px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d9d9d9;
    }

    &:disabled {
      background-color: #b3b3b3;
      cursor: default;
    }
  }
`;

export const SortButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;
