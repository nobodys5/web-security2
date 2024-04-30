import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
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
        </div>
    )
}

export default Detail;