import Image from "./component/Image";
import Description from "./component/Description";
import Name from "./component/Name";
import Price from "./component/Price";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  const firstName = "";

  return (
    <>
      <Card id="card"style={{ width: "22rem", lenght: "30rem"}}>
        <Card.Body>
          <Card.Text>
            <Image />
            <Name />
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <p>Hello, {firstName ? firstName : "there"} !</p>
      {firstName && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxTsDzMbjGaw66M1MY5IzBy0wgvUNQ16pCTvxyWfrPgQrlzv4Z9k_kXWm5YzM_cYv1og&usqp=CAU" alt="Your Image" />}
    </>
  );
}

export default App;
