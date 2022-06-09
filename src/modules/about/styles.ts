import styled from 'styled-components'

export const Container = styled.div`
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100rem;
  padding-top: 0.5rem;
  overflow-y: auto;
`;
export const TextCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40rem;
  width: 50rem;
`;
export const TextTitle = styled.text`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1rem;
  color: ${props => props.theme.color.text};
`;
export const Text = styled.text`
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem;
  color: ${props => props.theme.color.text};
`;
