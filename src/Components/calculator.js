// Calculator.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ButtonPanel({ inputHandler, clearAll, calculateResult, calculatePercentage }) {
  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === '%') {
      calculatePercentage();
    } else {
      inputHandler(value);
    }
  };


  return (
    <Container>
      <Row>
        <Col style={{ marginTop: '10px' }}>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('%')} >%</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => clearAll()}>CE</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('⌫')}>⌫</Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: '10px' }}>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('7')}>7</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('8')}>8</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('9')}>9</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('*')}>*</Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: '5px' }}>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('4')}>4</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('5')}>5</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('6')}>6</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('-')}>-</Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: '5px' }}>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('1')}>1</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('2')}>2</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('3')}>3</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('+')}>+</Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: '5px' }}>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('/')}>/</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('0')}>0</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('.')}>.</Button>
          <Button variant='outline-warning' style={{ marginLeft: '5px' }} onClick={() => handleClick('=')}>=</Button>
        </Col>
      </Row>
    </Container>
  );
}

function Display() {


  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const inputHandler = (value) => {
    console.log(value)
    if (value === '⌫') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearAll = () => {
    setInput('');
    setResult('');
  };

  
  const calculateResult = () => {
    try {
      let expression = input.replace(/%/g, '*0.01');
      const answer = eval(expression);
      setResult(answer);
    } catch (error) {
      setResult('Error');
    }
  }
  

  const calculatePercentage = () => {
    setInput((prevInput) => prevInput + '%'); // Append "%" to the input
  };
  

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" value={input} placeholder="0" readOnly />
          <Form.Control type="text" value={result} placeholder="Result" style={{marginTop:'5px'}} readOnly />
        </Form.Group>
      </Form>
      <ButtonPanel inputHandler={inputHandler} clearAll={clearAll} calculateResult={calculateResult} calculatePercentage={calculatePercentage} />
    </Container>
  );
}

export default Display;
