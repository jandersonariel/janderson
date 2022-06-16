import styled from 'styled-components'

export const TxButton = styled.button`
  font-size: 1.3rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.color.text};
  :focus {
    transform: scaleX(1.1);
    font-weight: bold;
  }
  :hover {
    transform: scale(1.1);
  }
`;