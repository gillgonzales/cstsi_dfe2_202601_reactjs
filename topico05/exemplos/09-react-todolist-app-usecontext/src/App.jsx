/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';
import { StateTodosList, TodosListProvider } from './context/TodosListProvider';

function App() {
  const {
    listTodos,
    setEditedTodo,
    inputTitleRef,
    inputTextRef 
  } = useContext(StateTodosList);


  const inputTitle = useRef();
  const inputText = useRef();

  console.log('renderiza', [
    inputTitle.current?.value,
    inputText.current?.value,
  ]);


  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      {/* <TodosListProvider> */}
        <h1>React ToDoApp</h1>

      {/* Criar um contexto intermediario para os Refs*/}
      {/*Eliminar o props-drilling*/}
        <TodoFields inputText={inputText} inputTitle={inputTitle} />
        <div className="card">
          {listTodos.length > 0 ? (
            <ListTodo  inputText={inputText} inputTitle={inputTitle}  />
          ) : (
            <p>Crie e organize suas tarefas!!!</p>
          )}
      {/*Provider do InputRefContext */}

        </div>
      {/* </TodosListProvider> */}
    </>
  );
}

export default App;
