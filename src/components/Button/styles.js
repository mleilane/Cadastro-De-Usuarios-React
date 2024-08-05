import styled from "styled-components";

export const Button = styled.button`
  border: none; /// sem bordas
  background: linear-gradient(
    180deg,
    #9b5de5 0%,
    #7b2cbf 100%
  ); // cor do botão com gradiente
  color: #fff;
  padding: 16px 32px; // distancia os itens da borda 16 pixels  cima/baixo - 32 pixels dos lados
  width: fit-content; // dimensiona a largura de acordo com o conteudo o botão
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: 0.8; // aplica opacidade ao passar o mouse em cima do botão
  }

  &:active {
    opacity: 0.5; // aplica opacidade ao clicar no botão
  }
`;
