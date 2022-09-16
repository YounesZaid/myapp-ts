import React, { useReducer, useState } from 'react';
import { Actions, ITodo, TodoReducer } from '../models/todo';

type Props = {
	todo: ITodo;
	todos: ITodo[];
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
	dispatch: React.Dispatch<Actions>;
};

export const TodoItem: React.FC<Props> = ({
	todo,
	todos,
	setTodos,
	dispatch,
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);

	const toggleDone = (id: number) => {
		// setTodos(
		// 	todos.map((todo) =>
		// 		todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
		// 	)
		// );
		dispatch({ type: 'Done', payload: id });
	};
	const deleteTodo = (id: number) => {
		// setTodos(todos.filter((todo) => todo.id !== id));
		dispatch({ type: 'Remove', payload: id });
	};

	const handleTodo = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setIsEdit(false);
	};
	console.log('Item todo ', todo);
	return (
		<form className='todo__item' onSubmit={(e) => handleTodo(e, todo.id)}>
			{isEdit ? (
				<input
					type='text'
					value={editTodo}
					onChange={(e) => {
						setEditTodo(e.target.value);
					}}
				/>
			) : (
				<p className={`${todo.isDone ? 'done' : ''}`}>{todo.todo}</p>
			)}
			<div className='todo__actions'>
				<i
					className='zmdi zmdi-edit'
					onClick={() => {
						if (!isEdit && !todo.isDone) {
							setIsEdit(!isEdit);
						}
					}}
				></i>
				<i className='zmdi zmdi-delete' onClick={() => deleteTodo(todo.id)}></i>
				<i className='zmdi zmdi-check' onClick={() => toggleDone(todo.id)}></i>
			</div>
		</form>
	);
};
