import styled from 'styled-components'

export const Container = styled.div`
`;
export const ContHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 0.5rem;
  overflow-y: auto;
  margin-bottom: 10rem;
  text-align: center;
`;
export const CardCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
`;
export const Text = styled.text`
  font-size: 2rem;
  font-weight: 600;
`;