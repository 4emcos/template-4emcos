import styled from 'styled-components';
const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .firstArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "firstArea secondArea thirdArea";
    grid-template-columns: 312px 1fr 312px;
  }
`;

const Title = styled.h1`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};`

export default MainGrid;