import {useDispatch, useSelector} from "react-redux";
import {loadTodosAction, loadTodosErrorAction, loadTodosSuccessAction, removeTodoAction} from "./todosActions";
import {fetchTodos} from "./fetchTodos";

export const TodoList = () => {
  const {isLoading, todos} = useSelector(({todos}) => todos);
  const dispatch = useDispatch();

  const onLoadTodosClick = async () => {
    dispatch(fetchTodos());

    // try {
    //   dispatch(loadTodosAction());
    //
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //   const data = await res.json();
    //
    //   dispatch(loadTodosSuccessAction(data));
    // } catch (e) {
    //   dispatch(loadTodosErrorAction());
    // }

  };

  const onClick = (e) => {
    dispatch(removeTodoAction(parseInt(e.target.dataset.id)));
  };

  return <section>
    <h2>Todos List</h2>
    {isLoading && <p>List is loading</p>}
    <p>
      <input type="button" value="load todos" onClick={onLoadTodosClick}/>
    </p>
    {todos.length !== 0 && <ul>
      {todos.map((item) => <li data-id={item.id} onClick={onClick} key={item.id}>{item.title}</li>)}
    </ul>}
  </section>;
};