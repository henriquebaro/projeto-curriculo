
import './App.css';
import Navbar from './Components/Navbar';
import Foto from './Components/foto';
import SwipeableTextMobileStepper from './Components/Portifolio';
import {Container, Row, Col} from 'react-bootstrap';
import './css/Foto.css'
import Contato from './Components/Contato';
function App() {
  return (<>
  <Navbar/>
  <Foto/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h1 className='titulo1'>
      Um pouco do meu Portifolio
   </h1>

  <Container>
    <Row>
      <Col>
     <SwipeableTextMobileStepper/>
     </Col>
     <Col>
<Contato/>
</Col>
</Row>
</Container>
     
  </>
    
  );
}

export default App;
