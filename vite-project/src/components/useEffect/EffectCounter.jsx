import { useState, useEffect } from "react";

function EffectCounter() {
    // count State 생성
    const [count, setCount] = useState(0)

    // useEffect 는 렌더링이 완료된 후 실행됨
    useEffect(()=>{
        console.log(`렌더링 완료! count의 값은 ${count}입니다.`)
    },[count])

    return(
        <>
        <button onClick={()=>setCount(count+1)}>눌러봐!</button>
        <p>{count}</p>
        </>  
    )
}

export default EffectCounter