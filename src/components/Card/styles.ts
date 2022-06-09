import styled from 'styled-components'

export const CardCont = styled.div`
  width: 25rem;
  height: 25rem;
  position: relative;
  border-radius: 10px;
  border: solid 2px #353535;
  margin-top: 10rem;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
  @media (max-width: 444px) {
   height: auto;
   padding-bottom: 2rem;
 }
`;
export const GifCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 10rem;
  
`;
export const Gif = styled.img`
  width: 20rem;
  position:absolute;
  border-radius: 10px;
  :hover {
  opacity:0;
}
@media (max-width: 444px) {
    width: 90%;
 }
`;
export const NameCont = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 1rem;
  svg {
    fill: ${props => props.theme.color.primary};
  :hover { 
    transform: scale(1.1); 
  }
}
height: 4.2rem;
`;
export const Text = styled.text`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const DescriptionCont = styled.div`
  padding: 1rem;
  height: 8rem;
  @media (max-width: 444px) {
   height: unset;
 }
`;
export const Text2 = styled.text`

`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.7rem;
`;
