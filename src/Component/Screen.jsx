import React, { useState } from 'react';

const Screen = ()=>{
  const[input,setInput]= useState('');
  const[result,setResult]=useState('');

const handleClick = (value)=>{
  setInput(input+value)
};

const handleClear =() =>{
  setInput('')
  setResult('')
}

const handleEqual =()=>{
  try{
setResult(eval(input))
  } catch(error){
    setResult(error)
  }
  
}

  return (
    <>
      <h1 className="heading">Calculator</h1>
      <div className="wrapper">
        <div className="screen">
          {result ? result : input || '👀'}
        </div>
        <div className="ButtonBox">
          <div>
            <input type="button" value="7" onClick={() => handleClick('7')} />
            <input type="button" value="8" onClick={() => handleClick('8')} />
            <input type="button" value="9" onClick={() => handleClick('9')} />
            <input type="button" value="%" onClick={() => handleClick('%')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleClick('4')} />
            <input type="button" value="5" onClick={() => handleClick('5')} />
            <input type="button" value="6" onClick={() => handleClick('6')} />
            <input type="button" value="*" onClick={() => handleClick('*')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleClick('1')} />
            <input type="button" value="2" onClick={() => handleClick('2')} />
            <input type="button" value="3" onClick={() => handleClick('3')} />
            <input type="button" value="-" onClick={() => handleClick('-')} />
          </div>
          <div>
            <input type="button" value="0" onClick={() => handleClick('0')} />
            <input type="button" value="." onClick={() => handleClick('.')} />
            <input type="button" value="=" onClick={handleEqual} />
            <input type="button" value="+" onClick={() => handleClick('+')} />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
          </div>
        </div>
      </div>
    </>
  );
}



export default Screen;
