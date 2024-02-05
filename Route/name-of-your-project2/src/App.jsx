
import './App.css'
import {
  Form, useActionData,
} from "react-router-dom";
function App() {
  const data = useActionData();
  console.log(data);
  return (
    <>
       <Form method="post">
            <input type='text'></input>
            <button type="submit">New</button>

          </Form>
    </>
  )
}

export default App
