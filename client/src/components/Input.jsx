import React,{useContext} from 'react';
import styled from 'styled-components';

const Input = ({placeholder,name, type, value, handleChange }) => {
  return (
    <Section>
    <div className='input'>
        <p>{name}</p>
        {type === "text"?(
            <div className='input__box'>
              <input type={type} placeholder={placeholder} value={value} onChange={(e)=>handleChange(e, name)}/>
            </div>
        ):("")}
    </div>
    </Section>
  )
}

export default Input;

const Section = styled.section`
  .input{
    display:flex;
    background-color: ;
  }
    &__box{
    width: 100%;
    
    padding: 0.5rem;
    border-radius: 0.2rem;
  }


`