import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/trash.svg";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashIcon,
} from "./styles";



//criando o componente para exibir os usuarios da API
function ListUsers() {
  const [users, setUsers] = useState([]); //nome da variavel e set+nome variavel, com useState iniciando com um array vazio
  const navigate = useNavigate(); // atribuimos o useNavigate em forma de funçao a nossa variavel navigate, ela permite mudar de tela


  //useEffect nao aceita o async, por isso temos que criar outra funcao dentro
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios"); //usamos a desestruturaçao para trazer apenas os dados que estao especificados no campo "data"
      setUsers(data); //pegamos o valor de data e atribuimos ao setusers para depois ir para o users
    }

    getUsers();
  }, []);

  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`) //acesso a api na rota de delete pelo Id 

    const updateUsers = users.filter( user => user.id !== id) //atualizamos nosso array de usuarios retirando o id que foi deletado

    setUsers(updateUsers) //atribuimos o array atualizado, sem os casos que foram deletados
  }

  return (
    <Container>
      <TopBackground />
      <Title> Lista de usuarios</Title>

      <ContainerUsers>
        {users.map(( user) => ( //bloco para exibir o array de usuarios na tela
            <CardUsers key={user.id}>
              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </div>
              <TrashIcon src={Trash} alt="icone-lixo" onClick= { () => deleteUsers(user.id)}/> 
            </CardUsers>
          )
        )}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}> Voltar </Button>
    </Container>
  );
}

export default ListUsers;
