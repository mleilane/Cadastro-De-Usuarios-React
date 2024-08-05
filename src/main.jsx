import React from "react"
import ReactDOM from "react-dom/client"
import {GlobalStyles} from './styles/GlobalStyles.js' //importado os estilos globais da pagina 
import { RouterProvider } from "react-router-dom" //ajuda definir qual pagina vai aparecer na tela do usuario
import router from "./routes" 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>  
  </React.StrictMode>
)
