import React, { useRef } from 'react';
import { ITodo } from '../models/todo';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	addTodo: (e: React.FormEvent) => void;
}
export const Input: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className='input'
			onSubmit={(e) => {
				addTodo(e);
				inputRef.current?.blur();
				setTodo('');
			}}
		>
			<input
				ref={inputRef}
				type='text'
				className='input__box'
				placeholder='your task here'
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<button className='input__button' type='submit'>
				Click me
			</button>
		</form>
	);
};
