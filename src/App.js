/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = "무신사 남자 상의 리뷰";

  let [a, b] = useState(["상의 상의 상의", "하의하의",  "모자모자"]);
  let [like, setLike] = useState([0, 0, 0]);
  let [detailContent, setDetailContent] = useState(true);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');
  // console.log(
  //   [1, 2, 3].map(function (a) {
  //     return a;
  //   })
  // )

  let num = [1, 2];
  let num1 = num[0];
  
  let [num2, num3] = [1,2];

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React_blog</h4>
      </div>
      {/* <h5 style={{color : "red", fontSize : "15px"}}>{post}</h5> */}
      <button onClick={() => {
        let copyA = [...a];
        copyA[0] = "양말양말";
        b(copyA);
      }}>글 수정</button>
      <button onClick={() => {
        let copyB = [...a];
        copyB.sort();
        b(copyB);
      }}>가나다순 정렬</button>
      
      <div className='list'>
      <h4 onClick={() => setDetailContent(!detailContent)}>{a[0]}<span onClick={() => setLike(like + 1)}>👍</span>{like}</h4>
      <p>4월 24일 발행</p>
      </div>
      <div className='list'>
      <h4>{a[1]}</h4>
      <p>4월 24일 발행</p>
      </div>
      <div className='list'>
      <h4>{a[2]}</h4>
      <p>4월 24일 발행</p>
      </div>

      {
        a.map(function(t, i) {
          return(
            <div className='list' key={i}>
            <h4 onClick={() => {
              setDetailContent(!detailContent);
              setTitle(i);
            }}>{a[i]}<span onClick={(e) =>{
              e.stopPropagation();
              let copyLike = [...like];
              copyLike[i] = copyLike[i] + 1;
              setLike(copyLike);
            }}>👍</span>{like[i]}</h4>
            <p>4월 24일 발행</p>

            <button onClick={() => {
              let copy = [...a];
              copy.splice(i,1);
              b(copy);
            }}>삭제</button>
            </div>
          )
        })
      }

      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value);
      console.log(inputValue);}}/>
      <button onClick={() => {
        let textupdate = [...a];
        textupdate.unshift(inputValue);
        b(textupdate);
        setInputValue("");
      }}>글 작성</button>
      
      {
        detailContent == true ? <DetailContent color="orange" a={a} b={b} title={title}/> : null
      }
    </div>
  );
}
/* 컴포넌트역할함수 첫글자는 무조건 대문자*/
function DetailContent(props) {
  return (
    <div className='modal' style={{background: props.color}}>
        <h4>{props.a[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copyA = [...props.a];
          copyA[0] = "양말양말";
          props.b(copyA);
        }}>글 수정</button>
      </div>
  )
}

export default App;
