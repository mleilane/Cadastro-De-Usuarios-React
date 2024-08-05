import styled from "styled-components";

//componentes e seus estilos

export const Container = styled.div`
  background-color: #181f36; // cor de fundo
  display: flex; // define como flexivel, permitindo controle sobre o layout
  flex-direction: column; // deixa os itens em coluna
  align-items: center; // linha os itens ao centro horizontalmente
  justify-content: space-evenly; //  distribui espaço entre os itens flexiveis
  padding: 20px; // distancia os itens das bordas
  height: 100vh; // faz o elemento ocupar a tela toda
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; // distancia os itens em 20 pixels
  max-width: 500px; // determinamos a largura maxima que vai ter
`;

export const Title = styled.h2`
  color: #fff; // cor da letra
  text-align: center; // centraliza o texto
  font-size: 38px; // tamanho da letra
  font-style: normal; // estilo da letra
  font-weight: 600; //espessura da letra
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2; // borda solida com cor e espessura de 12 pixel
  background-color: #fff; // cor de fundo
  padding: 12px 20px; // 12 pixels em cima/baixo e 20 dos lados

  outline: none; // retira a linha azul que aparece quando clicamos o input
  width: 100%; // ocupa 100% da largura disponivel para o item
`;

export const InputLabel = styled.label`
  color: #fff; // cor da letra
  font-size: 12px; // tmanho da letra
  font-weight: 500; // espessura da letra

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`;


