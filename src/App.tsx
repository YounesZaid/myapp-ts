import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Input } from './components/input';
import { ITodo, TodoReducer } from './models/todo';
import { TodosList } from './components/list';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [state, dispatch] = useReducer(TodoReducer, todos);

	const addTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			// setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			dispatch({ type: 'Add', payload: todo });
		}
	};
	console.log('inside App ', state);
	return (
		<div className='app'>
			<header className='app__header'>
				<img src={logo} className='app__header__logo' alt='logo' />
			</header>
			<div className='app__taskify'>
				<h1>Taskify</h1>
				<Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
				<TodosList todos={state} setTodos={setTodos} dispatch={dispatch} />
			</div>
		</div>
	);
};

export default App;
