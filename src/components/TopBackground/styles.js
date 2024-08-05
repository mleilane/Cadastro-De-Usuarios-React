import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to right, #c084fc, #7b2cbf);
  height: 30vh; // ocupa 30% da altura da tela
  width: 90vw; // ocupa 90% da largura da tela
  max-width: 800px; // faz o item chegar a no maximo 800px, não deixando ele muito grande em telas maiores
  border-radius: 30px; // bordas
  display: flex; // torna os itens flexiveis
  align-items: center; // alinha ao centro horizontalmente
  justify-content: center; //alinha ao centro na vertical

  img {
    max-width: 100%; //ocupa 100% da largura que o item  possui
    max-height: 100%; // ocupa 100% da altura que  o item possui
  }
`;
