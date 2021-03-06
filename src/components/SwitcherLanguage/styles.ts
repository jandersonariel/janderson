import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  :hover {
    transform: scale(1.1);
  }
`;
export const Image = styled.img`
  border-radius: 5px;
`;

