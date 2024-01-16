import './App.css';
import Friends from './Friends';
import Users from './User';
import Counting from './counting';

function App() {
  function handleClick(){
    alert('button click');
  }
  const handleClick2 = ()=> alert("handel click2 button")

  const addToFive = (num)=> {
    alert(num + 5)
  }
  return (
     <>
        <h3>React Core  Concepts 2</h3>
        <Friends></Friends>
        <Users></Users>
        <Counting></Counting>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick2}>Click Me</button>
        <button onClick={() => alert('click button 2')}>Click Me</button>
        <button onClick={() => addToFive("sakib al hasan")}>Click Me p</button>
     </>
  );
}

export default App;
