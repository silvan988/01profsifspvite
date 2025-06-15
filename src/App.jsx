import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Lista from "./componentes/Lista/Lista";
function App() {
  // lista (array) de professores.
  // o valor inicial é um array vazio []
  const [professores, setProfessores] = useState([])
  const adicionaProf = (prof) => {
    //console.log(prof)
    // criando uma nova lista com o conteúdo anterior da lista.
    //
    // CUIDADO!!! não vá fazer listaNova = professores,
    // isso não criará uma nova lista, apenas criará uma nova
    // referência (ponteiro) para a mesma lista (o mesmo objeto).
    //
    // O método slice() de um array em JavaScript 
    // retorna uma cópia superficial de uma porção de um array 
    // dentro de um novo array objeto selecionado desde start 
    // até end (end não é incluído). 
    // Se não passarmos nenhum argumento para slice(), 
    // ele retorna uma cópia do array inteiro.
    const listaNova = professores.slice();
    // adicionando o novo professor nesssa lista:
    listaNova.push(prof)
    // colocando a nova lista atualizada no estado:
    setProfessores(listaNova)
  }

  return (
    <div>
      <Banner />
      <Formulario aoProfCadastrado={prof => adicionaProf(prof)} />
      <Lista objetos={professores} />  
    </div>
  );
}
export default App;
