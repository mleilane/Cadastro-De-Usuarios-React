// aqui vamos incluir nossas rotas/paginas de  navegação do site

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";


// telas de navegação que o site possui 
const router = createBrowserRouter([
  {
    path: "/", // aqui colocamos o endereço da pagina, nesse caso é a home (pagina principal)
    element: <Home />, // qual elemento vai acessar
  },
  {
    path: "/lista-de-usuarios", //geralmente colcoamos na lingua nativa pq o usuario visualiza
    element: <ListUsers />
  }
]);

export default router