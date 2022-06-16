import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 5rem;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 100;
  background: ${props => props.theme.color.background};
`;
export const LogoCont = styled.div`
  display: flex;
  align-items: center;
  width: 33.5%;

`;
export const Image = styled.img`
  width: 11rem;
  cursor: pointer;
`;
export const ContTextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66.5%;

  @media (max-width: 1014px) {
    width: 26rem;
  }
`;
export const ContMenu = styled.div`
  display: none;

  @media (max-width: 1014px) {
    display: flex;
    align-items: center;
    position: fixed;
    :hover {
    transform: scale(1.1);
  }
  }
`;
export const ContOprionButton = styled.div<{show: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1014px) {
    display: ${({ show }) => show ? 'flex' : 'none'};
    position: fixed;
    flex-direction: column;
    z-index: 4;
    background: ${props => props.theme.color.background};
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    top: 4rem;
    right: 4rem;
    overflow: hidden;
    height: 15rem;
    width: 15rem;
    border-radius: 10px;
    justify-content: center;
    gap: 1rem;
  }
`;
export const ContCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 35rem;


  @media (max-width: 1014px) {
    flex-direction: column;
  }
`;

export const Contright = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  gap: 1rem;
  padding-right: 1rem;
  @media (max-width: 1014px) {
    width: auto;
  }
`;
export const SelectMode = styled.div`
  display: flex;
`;
export const Input = styled.input`
  --size: 2rem;
  
  appearance: none;
  outline: none;
  cursor: pointer;
  
  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: rgba(0, 0, 0, 0.5);
  
  transition: all 500ms;
  
  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);

    transform: scale(0.75);
    color: hsl(40, 100%, 50%);
    box-shadow: 
      inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }
  :hover {
    transform: scale(1.1);
  }
`;
