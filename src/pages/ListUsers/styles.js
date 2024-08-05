import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh; //largura minima é a tela toda
  display: flex;
  flex-direction: column; // alinhar itens em coluna
  align-items: center; //alinhar ao centro
  justify-content: space-evenly; //espaçamento entre os itens
  padding: 20px;
`;

export const Title = styled.h2`
  color: #fff; // cor da letra
  text-align: center; // centraliza o texto
  font-size: 38px; // tamanho da letra
  font-style: normal; // estilo da letra
  font-weight: 600; //espessura da letra
  margin-top: 10px;
`;

export const ContainerUsers = styled.div`
  display: grid; //permite colocar os itens exatamente onde queremos
  grid-template-columns: 1fr 1fr; //informamos quantas colunas e qual o espaço delas
  gap: 20px;
  margin: 30px 0; //30px em cima e em baixo e dos lados 0

  @media (max-width: 750px) {
    grid-template-columns: 1fr; //quando a tela for pequena vai ter apenas uma coluna
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; // espaço entre os itens
  max-width: 380px; //largura maxima

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize; // deixa a primeira letra do texto maiuscula
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8; // ao passar o mouse por cima do icone da lixeira aplicara opacidade de 0.8
  }
  &:active {
    opacity: 0.5; //icone ativo aplica opacidade de  0.5
  }
`;
export const AvatarUser = styled.img`
  height: 80px;
`;
