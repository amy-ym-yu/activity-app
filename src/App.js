import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, InputGroup } from 'react-bootstrap';

function App() {
  const [access, setAccess] = useState([]);
  const [type, setType] = useState([]);
  const [friends, setFriends] = useState([]);
  const [cost, setCost] = useState([]);

  return (
    <Form className='p-3'>
      <FormGroup className='type p-1'>
        <Form.Label>What type of activity would you like to do?</Form.Label>
        <br></br>
        <select class="select-type">
          <option selected>Select a category</option>
          <option value="1">educational</option>
          <option value="2">recreational</option>
          <option value="3">social</option>
          <option value="4">diy</option>
          <option value="5">charity</option>
          <option value="6">cooking</option>
          <option value="7">relaxing</option>
          <option value="8">musical</option>
          <option value="9">busywork</option>
        </select>
      </FormGroup>
      
      <FormGroup className='access p-1'>
        <Form.Label>How many friends do you have?</Form.Label>
        <br></br>
        <div className="d-flex justify-content-between">
          <p className="px-2">1</p>
          <p className="px-2">2</p>
          <p className="px-2">3</p>
          <p className="px-2">4</p>
          <p className="px-2">5</p>
        </div>
        <Form.Range min="1" max="5" step="1"></Form.Range>
      </FormGroup>

      <FormGroup className='access p-1'>
        <Form.Label>How many dabloons do you have?</Form.Label>
        <br></br>
        <div className="d-flex justify-content-between">
          <p className="px-2">A little</p>
          <p className="px-2">A lot</p>
        </div>
        <Form.Range min="0" max="1" step="0.1"></Form.Range>
      </FormGroup>

    <button type="button" className="btn btn-success m-2">Search</button>
    <button type="button" className="btn btn-primary m-2">I'm feeling bored</button>

    </Form>
  );
}

export default App;
