import Baro from "../Imagens/Baro.jpg";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Foto.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Foto(){
return(<>
<h2 className="titulos">Prazer, sou  Henrique Barros</h2>
<br></br><br></br>
<Container>
  <Row>
   <Col md={7}>
   <img className="fotoBaro" src={Baro}></img>
   </Col>
   <Col md={5}>
    <h4>Uma breve apresentaçao sobre mim</h4>
    <p>
Claro, aqui está um texto de apresentação para você:

Olá! Meu nome é henrique barros pereira, tenho 17 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Moro em São Caetano do Sul e estou muito animado com a oportunidade de me conectar e compartilhar experiências com pessoas que também estão interessadas nessa área tão fascinante da tecnologia. Adoro aprender sobre programação, desenvolvimento de software e todas as possibilidades que a tecnologia nos proporciona. Além disso. Estou sempre em busca de novos desafios e conhecimentos, e espero poder contribuir de alguma forma para a comunidade ao meu redor. Se quiser trocar ideias ou compartilhar experiências, estou à disposição!</p>
   </Col>
  </Row>
</Container>

</>)
}
export default Foto