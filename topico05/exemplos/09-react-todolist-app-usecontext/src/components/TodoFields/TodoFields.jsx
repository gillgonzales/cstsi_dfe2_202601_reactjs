/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { StateTodosList } from '../../context/TodosListProvider';

export default function TodoFields({inputText,inputTitle}) {

  //useContext(InputsRefContext)
  // const {inputTitleRef, inputTextRef} = useContext(StateTodosList)
  
  console.log({inputTitle,inputText})

  const { editedTodo, createTodo } = useContext(StateTodosList);
  return (
    <fieldset>
      <legend>
        {' '}
        {editedTodo?.title ? 'Edite a' : 'Criar uma nova'} Tarefa
      </legend>
      <label>Título:</label>
      <input type="text" placeholder="Título da tarefa" ref={inputTitle} />
      <br />
      <label>Texto:</label>
      <input type="text" placeholder="Texto da tarefa" ref={inputText} />
      <hr />
      <button onClick={()=>createTodo(inputText,inputTitle)}>
        {editedTodo?.title ? 'Editar' : 'Criar'} Tarefa
      </button>
    </fieldset>
  );
}
