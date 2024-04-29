import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color: black;
    padding: 10px;
`

let Box = styled.div`
    background : grey;
    padding: 20px
`

function Detail(props) {

    let {id} = useParams();
    console.log(id);
    return(
        <div className='container'>
            <Box>
            <YellowBtn bg={"yellow"}>버튼</YellowBtn>
            <YellowBtn bg={"orange"}>버튼</YellowBtn>
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