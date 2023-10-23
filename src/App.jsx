import Image from "./component/Image";
import Description from "./component/Description";
import Name from "./component/Name";
import Price from "./component/Price";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import FirstName from "./component/FirstName";
function App() {
  const [first, setFirst] = useState("");



  useEffect(() =>{
    console.log(first)


  

  },[first])



  return (
    <>
      <Card id="card" style={{ width: "22rem", lenght: "30rem" }}>
        <Card.Body>
          <Card.Text>
            <Image />
            <Name />
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <input type="text" name="name" onChange={
        (e)=>{
          setFirst(e.currentTarget.value)
        }
      }></input>

      <FirstName props={first}/>

      
     
    </>
  );
}

export default App;
