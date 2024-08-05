import PropTypes from "prop-types";
import { Button } from "./styles";

// esse será o nosso botão padrao
function DefaultButton({ children, ...props }) {
  /* spread operation "...props" -> pega todo o resto das inf do botão |
     children pega o nome do botao */

  return <Button {...props}>{children}</Button>;
}

//fazendo a validação do proptypes, dizendo qual o tipo de inf do children
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired //o tipo dele é determinado pelo react e  falamos que ele é obrigatorio
};

export default DefaultButton;
