import { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { context1 } from './../App.js';

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color: ${props => props.bg == "orange" ? "white" : "black" };
    padding: 10px;
`

let NewBtn = styled(YellowBtn) `
    color: red;
`

let Box = styled.div`
    background : grey;
    padding: 20px
`

function Detail(props) {

    let {stock, shoes} = useContext(context1);
    

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);


    useEffect(() => {
        setAlert(true);
        console.log("hi");
        let timer = setTimeout(() => { setAlert(false)}, 3000)

        return () => {
            clearTimeout(timer);
        }

    }, [count])

    

    
    let {id} = useParams();

    
    console.log(id);
    return(
        <div className='container'>
            {stock};
            {
                alert &&
                <div className="alert alert-warning">
                    3초 이내에 구매시 할인
                </div>
            }
            <Box>
            <YellowBtn bg={"yellow"} onClick={() => 
                {setCount(count + 1)}}>버튼</YellowBtn>
            <YellowBtn bg={"orange"}>버튼</YellowBtn>
            <NewBtn bg="blue">뉴버튼</NewBtn>
            </Box>
            <div className='row'>
                <div className='col-md-6'>
                <img src = {require('../img/canvas1.jpg')} height="200px"/>
                </div>
                <div className='col-md-4'>
                    <h4 className='pt-5'>{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="/link-0" onClick={() => {setTab(0)}}>상세페이지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={() => {setTab(1)}}>리뷰</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={() => {setTab(2)}}>
                QnA
                </Nav.Link>
            </Nav.Item>
            </Nav>
            
                {/* {tab == 0 ?
                <div>상세페이지 내용</div>
                : null}
                
                {tab == 1 ?
                <div>리뷰 내용</div>
                : null}

                {tab == 2 ?
                <div>QnA 내용</div>
                : null} */}
            <TabContent tab={tab}></TabContent>
            
            
        </div>
    )
}

function TabContent({tab}) {
    let {stock} = useContext(context1);
    let [fade, setFade] = useState('');
    useEffect(() => {
        
        let timer = setTimeout(() => {setFade("end")}, 1000) 
        
        return () => {
            clearTimeout(timer);
            setFade("")
        }

    },[tab])

    if(tab == 0) {
        return  <div className={"start " + fade}>상세페이지 내용</div>
    } else if(tab == 1) {
        return  <div className={"start " + fade}>{stock}</div>
    } else if(tab == 2) {
        return  <div className={"start " + fade}></div>
    }
    // return [<div className='end'>[<div>상세페이지 내용</div>,  <div>리뷰 내용</div>,  <div>QnA 내용</div>][tab]</div>]
}

export default Detail;