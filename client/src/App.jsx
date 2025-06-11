import axios from "axios";
import './App.css';

function App() {
  const SendGmail = async () => {
    await axios.post("http://localhost:4000/nodemailer", {
      gmail: "fernandoemiliolopez13@gmail.com",
      name: "Ignacio",
    });
  };
  return (
    <>
    <button onClick={() => SendGmail()}>Envio de Gmail</button>
    </>
  );
}

export default App;