import React from 'react';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}
export const Input: React.FC<Props> = ({ todo, setTodo }) => {
	return (
		<div className='input'>
			<input
				type='text'
				className='input__box'
				placeholder='your task here'
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<button className='input__button'>Click me</button>
		</div>
	);
};
