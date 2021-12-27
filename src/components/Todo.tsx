import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Todo as TodoType } from '../helpers/types';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../store';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  exit: {
    opacity: 0,
    height: 0,
  },
};

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FC<TodoProps> = (props) => {
  const dispatch = useDispatch<Dispatch>();

  const handleDelete = React.useCallback(() => {
    dispatch.todos.deleteTodoAsync(props.todo._id);
  }, [dispatch.todos, props.todo._id]);

  const handleToggle = React.useCallback(() => {
    dispatch.todos.toggleTodoAsync(props.todo);
  }, [dispatch.todos, props.todo]);

  // CSS
  const checkBoxClasses = () =>
    classNames(
      'transition-all duration-200',
      { 'text-green-primary': props.todo.completed },
      { 'text-transparent': !props.todo.completed }
    );

  const todoParaClasses = () =>
    classNames('w-full text-3xl text-white', {
      'line-through': props.todo.completed,
    });

  return (
    <motion.li
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='cursor-pointer flex items-center group font-thin text-xl gap-2 text-left p-6 w-[34rem] bg-blue-primary active:bg-blue-primary-at transition-all duration-150 hover:bg-blue-primary-hv border-blue-secondary border-b'
    >
      <motion.button
        onClick={handleToggle}
        className='flex items-center justify-center p-1 transition-all duration-200 bg-black rounded-full cursor-pointer bg-opacity-5 hover:bg-black hover:bg-opacity-10 active:bg-opacity-20'
      >
        <CheckIcon
          color='inherit'
          fontSize='large'
          className={checkBoxClasses()}
        />
      </motion.button>
      <div className='flex items-center w-full gap-2 '>
        <p onMouseDown={handleToggle} className={todoParaClasses()}>
          {props.todo.description}
        </p>
        <button
          onClick={handleDelete}
          className='flex items-center p-2.5 transition-all duration-200 group-hover:opacity-100 opacity-0 rounded-full bg-black bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-20 focus:bg-opacity-20'
        >
          <CloseIcon color='error' />
        </button>
      </div>
    </motion.li>
  );
};

export default React.memo(Todo);
