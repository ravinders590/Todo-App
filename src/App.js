import Todo from './app/Todo';
import './App.css';


function App() {
  return (
    <>
    <section className='todo-list'>
      <div className='container'>
        <div className='todo-wrapper'>
        <h1 className='text-center w-color large-font'>Todo List</h1>
          <Todo/>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
