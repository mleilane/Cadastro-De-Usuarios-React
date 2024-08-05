import UsersImage from "../../assets/users.png"; // aqui estamos importando uma imagem para usar na tag img
import { Background } from "./styles";


function TopBackground(){ 

    return(
        <Background>
        <img src={UsersImage} alt="imagem-usuarios" />
      </Background>


    )
}

export default TopBackground