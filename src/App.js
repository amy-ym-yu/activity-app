import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form, FormGroup } from 'react-bootstrap'; 


function App() {
  const typeParam = "type=";
  const options = [
    {value: '', text:'Select a category'},
    {value: 'education', text:'education'},
    {value: 'recreational', text:'recreational'},
    {value: 'social', text:'social'},
    {value: 'diy', text:'diy'},
    {value: 'charity', text:'charity'},
    {value: 'cooking', text:'cooking'},
    {value: 'relaxation', text:'relaxation'},
    {value: 'music', text:'music'},
    {value: 'busywork', text:'busywork'}
  ]
  const [selected, setSelected] = useState(options[0].value); // selected in dropdown
  const [type, setType] = useState([]);

  const friendsParam = "participants=";
  const [friends, setFriends] = useState([]);
  
  const costParam = "price=";
  const [cost, setCost] = useState([]);

  const basicCall = "http://www.boredapi.com/api/activity";
  const [data, setData] = useState({"activity": "No search has occurred."}); // data recieved from call

  const handleCall = () => {
    if (data.activity != "No search has occurred.") {
      setPrev([data, ...previousSearches]);
      console.log(previousSearches);
    }

    console.log(basicCall);
    fetch(basicCall)
      .then((response) => response.json())
      .then((incoming) => {
        console.log(incoming)
        setData(incoming);
      })
      .catch((err) => {
        console.log(err.message);
      })
  
    setResults("Random Activity");
    setActivity(data);
  };

  const handleSearch = () => {
    if (data.activity != "No search has occurred.") {
      setPrev([data, ...previousSearches]);
      console.log(previousSearches);
    }

    fetch(basicCall + "?" + type + "&" + friends + "&" + cost)
      .then((response) => response.json())
      .then((incoming) => {
        console.log(incoming)
        setData(incoming);
      })
      .catch((err) => {
        console.log(err.message);
      })

      setResults("Searched Activity");
      setActivity(data);
  };

  const [searchResults, setResults] = useState([]);
  const [activity, setActivity] = useState([]);

  const [previousSearches, setPrev] = useState([]);

  return (
    <>
    <h1 className='display-3 text-center'>Bored Out of Your Mind</h1>
    <div className='main-container d-flex flex-row justify-content-lg-around'>
      <Form className='form-container p-1'>
        <FormGroup className='type p-1'>
          <Form.Label>What type of activity would you like to do?</Form.Label>
          <br></br>
          <select value={selected} onChange={(e) => { setType(typeParam + e.target.value); 
            console.log(typeParam + e.target.value); setSelected(e.target.value);}}>

            {options.map(options =>( 
              <option key={options.value} value={options.value}>{options.text}</option>))}
          </select>
        </FormGroup>
        
        <FormGroup className='friends p-1'>
          <Form.Label>How many friends do you have?</Form.Label>
          <br></br>
          <div className="d-flex justify-content-between">
            <p className="px-2">1</p>
            <p className="px-2">2</p>
            <p className="px-2">3</p>
            <p className="px-2">4</p>
            <p className="px-2">5</p>
          </div>
          <Form.Range min="1" max="5" step="1" onChange={(e) => {setFriends( friendsParam + e.target.value); 
            console.log(friendsParam + e.target.value)}}></Form.Range>
        </FormGroup>

        <FormGroup className='cost p-1'>
          <Form.Label>How many dabloons do you have?</Form.Label>
          <br></br>
          <div className="d-flex justify-content-between">
            <p className="px-2">A little</p>
            <p className="px-2">A lot</p>
          </div>
          <Form.Range min="0" max="1" step="0.1"  onChange={(e) => {setCost(costParam + e.target.value); 
            console.log(costParam + e.target.value)}}></Form.Range>
        </FormGroup>

      <button type="button" className="btn btn-success m-2" onClick={handleSearch}>Search</button>
      <button type="button" className="btn btn-primary m-2" onClick={handleCall}>I'm feeling bored</button>
      </Form>

      <div className="vr"></div>

        <div className='result-container d-flex flex-column'>
          <div className='p-1 w-30 flex-column flex-wrap'>
            <h2>{searchResults}</h2>
            <h5>{data.activity || "No activity found. Please remove some search parameters, and try again."}</h5>
            <div className='activity-info'>
              <p>Type: {data.type}</p>
              <p>Friends: {data.participants}</p>
              <p>Cost: {data.price}</p>
            </div>
          </div>

          <hr></hr>

          <div className='list-container d-flex flex-column'>
            <h3>Previous Searches</h3>
            {(previousSearches).map((search, index) => {
              return <div key={index}>
                <h5>{search.activity}</h5>
                <p>Type: {search.type}</p>
                <p>Friends: {search.participants}</p>
                <p>Cost: {search.price}</p>
              </div>}
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
