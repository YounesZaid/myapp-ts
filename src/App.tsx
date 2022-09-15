import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Input } from './components/input';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	console.log(todo);
	return (
		<div className='app'>
			<header className='app__header'>
				<img src={logo} className='app__header__logo' alt='logo' />
			</header>
			<div className='app__taskify'>
				<span>Taskify</span>
				<Input todo={todo} setTodo={setTodo} />
			</div>
		</div>
	);
};

export default App;
