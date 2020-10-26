import React ,{useState} from "react";
import Ninjas from "./Ninjas";

function App() {
  const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [sh,setSh]=useState(false)

    const show=()=>{
      setSh(true)
      console.log(name,email);
    }

  return (
    <div className="App">
      <h1>my first react app</h1>
      <p>welcome</p>
      <Ninjas setName={setName} setEmail={setEmail} show={show} name={name} email={email} sh={sh} />
     
    </div>
  );
}

export default App;







// Did you ever hear the tragedy of Ken Kaneki the eyepatch? I thought not. It's not a story the CCG would tell you. It's a ghoul legend
