import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
} from "./styles";

import Button from "../../components/Button"; // o que esta importando e de onde
import TopBackground from "../../components/TopBackground";

function Home() {
  // criando as variaveis para guardar os valores dos inputs
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  //funcao assincrona para aguardar a resposta do BD
  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value, // current.value pega o valor exato que digitamos
      age: parseInt(inputAge.current.value), //transformando a idade em nº inteiro
      name: inputName.current.value,
    }); // a API vai acessar o nosso servidor em /usuarios vai pegar os dados das variaveis ex inputName e vai encaminhar ao banco de dados a sua respectiva
  }

  const navigate = useNavigate(); // atribuimos o useNavigate em forma de funçao a nossa variavel navigate

  return (
    //sempre tem que ter um elemento para abraçar todos os outros, nesse caso é o Container
    // o que diferencia os elementos HTML dos componentes react é a letra Maiuscula no nome
    <Container>
      <TopBackground />
      <Form>
        <Title> Cadastrar Usuários </Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input
            type="e-mail"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>
        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
        
      </Form>
            
      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
          Lista de Usuários
      </Button>
      
    </Container>
  );
}

export default Home;
