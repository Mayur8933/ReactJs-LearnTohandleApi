import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Axios from 'axios'
import MyCard from './MyCard'

function App() {

  const [details , setDetails] = useState({})
  //to get requset in asynchronous format (invisible) remember async and await
  const fetchDetails = async () => {
    const response = await Axios.get('https://randomuser.me/api/')
    console.log('RESPONSE: ',response.data)

    const details = response.data.results[0]

    setDetails(details)

  }

useEffect(() => {
  fetchDetails()
},[])  

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md-4 mt-4'>
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
