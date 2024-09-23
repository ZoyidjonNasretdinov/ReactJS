import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from  './components/Message'
import { Counter } from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App"> 
    <EventBind/>
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <Message></Message>    */}
    {/* <Counter></Counter> */}
    {/* <Greet name = "Clark" herroName = 'batman'>
    <p>This is children elements</p>
    </Greet>
    <Greet name = "Victor" herroName = 'Superman'>
    <button>Action</button>
    </Greet>
    <Greet name = "Ammanda" herroName = 'Darkman'  />
    <Welcome name = "Brus" herroName = 'Flash'></Welcome>
      <Hello></Hello> */}
      </div>
    );
  }
  
  export default App;
  