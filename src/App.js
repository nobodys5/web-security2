import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';
import data from './data.js';
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">



      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link> */}
            {/* <Link to="/" style={{color: "white", textDecoration: "none", padding: "5px"}}>홈</Link>
            <Link to="/detail" style={{color: "white", textDecoration: "none", padding: "5px"}}>상세페이지</Link> */}
            <Nav.Link onClick={() => {navigate("/")}} style={{color: "white", textDecoration: "none", padding: "5px"}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate("/detail")}} style={{color: "white", textDecoration: "none", padding: "5px"}}>상세페이지</Nav.Link>
          </Nav>
        
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>  <div className='main-bg' style={{backgroundImage : "url("+ bg +")"}}>
      </div>

      <div className='container'>
        <div className='row'>
        

          {
            shoes.map((a, i) => {
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div></div>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>조직도</div>}></Route>
          <Route path='location' element={<div>위치</div>}></Route>
        </Route>
        <Route path='*' element={<div>존재하지 않는 페이지입니다.</div>}></Route>
      </Routes>
      <button onClick={() => {
        axios.get('/api/data')
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("error")
          })
      }}>버튼</button>

          

    </div>
  );
}

function About() {
  return (
  <div>
    <h4>회사 정보</h4>
    <Outlet></Outlet>
  </div>
  )
}


function Card(props) {
  return (

    <div className='col-md-4'>
      <img src = {require('./img/canvas' +(props.i + 1) +'.jpg')} height="200px"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )

  
}
export default App;
