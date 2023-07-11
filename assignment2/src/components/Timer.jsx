import React from 'react';
import {useState, useEffect} from 'react';

function Timer(){
    // Timer State 생성 기본값 0
    const [time, setTime] = useState(0);
    const [date, setDate] = useState(new Date());


    useEffect(() => {

        const CountDownId = setInterval(() => {

            setTime(pretime => pretime +1);
            setDate(new Date());

        }, 1000);

        if (time != 0 && time % 60 == 0){
            console.log('아... 내 1분...');
        }

        return() =>{
            clearInterval(CountDownId)
        }
        
    },[time])

    function CountDownFor(yyyy = date.getFullYear(),mm = date.getMonth(),dd = date.getDate(),h = 23,m = 59,s = 59){
        const countdownDate = new Date(yyyy,mm-1,dd,h,m,s);
        // console.log(countdownDate)
        let diff = countdownDate - date;
        
        let leftDate = Math.floor(diff/(24 * 60 * 60 * 1000));
        diff = diff - leftDate * (24 * 60 * 60 * 1000);
        
        let leftHours =  Math.floor(diff/(60 * 60 * 1000));
        diff = diff - leftHours * (60 * 60 * 1000);
        
        let leftMinutes = Math.floor(diff/(60 * 1000));
        diff = diff - leftMinutes * (60 * 1000);
        
        let leftSecond  = Math.floor(diff/(1000));

        let result = ""

        if(leftSecond > 0) {result = leftSecond + "초 "+ result}  
        if(leftMinutes > 0) {result = leftMinutes+ "분 " +result}      
        if(leftHours> 0) {result = leftHours+ "시간 " +result}      
        if(leftDate> 0) {result = leftDate+ "일 " +result}  
    
        return result;
    }
    return(
        <div style = {{
            display :'flex',
            flexDirection : 'row',
            height: '300px',
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <div style={{padding:'10px'}}>
            <div>오늘이</div>
            <div>{CountDownFor()}</div>
            <div>밖에 안 남았다니...</div>
            </div>
        <div style={{padding:'10px'}}>
        <div>과제제출까지는...</div> 
            <div>{CountDownFor(2023,7,11,23,59,59)}</div>
            <div>밖에 안 남았다니...</div>
        </div>
        </div>
    )
}

export default Timer