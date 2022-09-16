import React from 'react';
import { Actions, ITodo } from '../models/todo';
import { TodoItem } from './item';

interface Props {
	todos: ITodo[];
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
	dispatch: React.Dispatch<Actions>;
}
export const TodosList: React.FC<Props> = ({ todos, setTodos, dispatch }) => {
	return (
		<div className='todos'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					todos={todos}
					setTodos={setTodos}
					dispatch={dispatch}
				/>
			))}
		</div>
	);
};
