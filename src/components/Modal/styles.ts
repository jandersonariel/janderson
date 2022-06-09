import styled from 'styled-components'

export const TextTitle = styled.text`
  font-size: 1.3rem;
  color: black;
  font-weight: 600;
`;
export const Text = styled.text`
  color: ${props => props.theme.color.text};
`;
export const ContIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 2px;
`;
export const Name = styled.text`
  font-size: 1.1rem;
  font-weight: 600;
  color: black;

`;
export const Assignment = styled.text`
  font-size: 1rem;
  color: black;
`;


