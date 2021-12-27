import * as React from 'react';
import { useSelector } from 'react-redux';
import { Display, StatusBarContainer } from '../containers/StatusBarContainer';
import { TodosProps } from '../containers/TodosContainer';
import { loadingSelector } from '../helpers/selectors';
import LoadingSpin from './LoadingSpin';
import Todo from './Todo';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    y: -94,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Todos: React.FC<TodosProps> = (props) => {
  const [display, setDisplay] = React.useState<Display>('all');
  const [realTodosToDisplay, setRealTodosToDisplay] = React.useState(
    props.todos
  );
  const loading = useSelector(loadingSelector);

  React.useEffect(() => {
    if (display === 'all') {
      setRealTodosToDisplay(props.todos);
    } else if (display === 'active') {
      setRealTodosToDisplay(props.activeTodos);
    } else {
      setRealTodosToDisplay(props.completedTodos);
    }
  }, [display, props.activeTodos, props.completedTodos, props.todos]);

  return (
    <>
      <ul className='flex flex-col items-center'>
        {loading.effects.todos.addTodoAsync && (
          <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            className='w-full h-[93px] bg-blue-primary  border-b border-blue-secondary flex items-center justify-center'
          >
            <LoadingSpin />
          </motion.div>
        )}
        <AnimatePresence>
          {realTodosToDisplay.map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </AnimatePresence>
      </ul>
      <StatusBarContainer display={display} setDisplay={setDisplay} />
    </>
  );
};

export default Todos;
