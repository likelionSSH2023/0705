import React, { useState } from 'react';

function Input() {
  //글 state 생성
  const [text, setText] = useState('')

  // 글 추가 버튼 클릭 시 저장할 data State
  const [data, setData] = useState([])

  // 글 추가 버튼 클릭 시 실행할 함수
  const onChange = (e) =>{
    setText(e.target.value)
  }
  
  // 글 변할 때 실행할 함수
  const clickHandler = () => {
    setData([...data, text])
    setText('')
  }
    

  return (
  <>

      {/* input에 onChange,value 추가 */}
      <input onChange={onChange} value = {text}/>
      {/* button에 onClick 추가*/}
      <button onClick={clickHandler}>추가</button>
      {/* 입력된 값 보여주기, '값 : " 뒤에 추가 */}
      <div>
          <b>값: {text}</b>
      </div>

    {/* 데이터 목록 보여주기*/}
    <ul>
    {/* 이 주석 지우고 여기에 추가하기!*/}
    {data.map((item, index) => (
      <li key = {index}>{item}</li>
    ))}
    </ul>

  </>
  );
}

export default Input;