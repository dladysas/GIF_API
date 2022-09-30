import { Button, Form, Container, Row, Image, InputGroup, Col } from 'react-bootstrap'

function App() {
  return (
    <Container className='mt-4' fluid>
      <Row>
        <InputGroup>
          <Form.Control placeholder="Enter keyword to get GIF" />
          <Button className='btn-success' onClick={submitHandler}>Get GIF</Button>
        </InputGroup>
      </Row>
      <Row className='mt-4'>
        <Col>
        <Image src="https://media4.giphy.com/media/1mIfigvZCiDXG/giphy.gif?cid=ecf05e47ot5hn8lhqyfzdb4578nb4zxu0cmvwp9jr3erbabm&rid=giphy.gif&ct=g" />
        </Col>
      </Row>
    </Container>
  );
}

const submitHandler = () =>{
  fetch("http://127.0.0.1:3001/kekw", {
    method: 'GET',
    crossDomain: true,
    headers: {
      'content-type': 'text/html'
    }
  })
  .then(res => res.text())
  .then(responseText => console.log(responseText))
}


export default App;
