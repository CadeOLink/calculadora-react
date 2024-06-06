import React, { useState } from "react"
import './Calculadora.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";

export default function Calculadora(){

   // números passando da tela (Podem ter 11 números na tela)
   // Números decimais passando da tela (Podem ter 11 números na tela)
   // OPTATIVO, prévia do resultado 

   const [num, setNum] = useState(0)
   const [oldNum, setOldNum] = useState(0)
   const [operador, setOperador] = useState()

   function inputNum(e){
      var input = (e.target.value)
      if(num === 0 ? setNum(input) : setNum(num + input));
   }
                        /* Funções dos botões */
   function porcentagem(){
      setNum(num/100)
   }

   function clear(e){
      setNum(0);
   }

   function negativo(){
      setNum(-num)
   }

   function operator(e){
      var operatorInput = e.target.value
      setOperador(operatorInput)
      setOldNum(num)
      setNum(0)
      
   }

   function calulou(){
      
      if(operador == "/"){setNum(parseFloat(oldNum)/parseFloat(num))}
      else if(operador == "x"){setNum(parseFloat(oldNum)*parseFloat(num))}
      else if(operador == "-"){setNum(parseFloat(oldNum)-parseFloat(num))}
      else if(operador == "+"){setNum(parseFloat(oldNum)+parseFloat(num))}
   }

   return(
      <Box m={2}>
      <Container maxWidth="xs">      
      <div className="wrapper">
      <h1 className="resultado">{num}</h1>
         <button onClick={clear}>AC</button>
         <button onClick={negativo}>+/-</button>
         <button onClick={porcentagem}>%</button>
         <button className="colorMain" onClick={operator} value="/">/</button>
         <button className="colorSecundaria" onClick={inputNum} value={7}>7</button>
         <button className="colorSecundaria" onClick={inputNum} value={8} >8</button>
         <button className="colorSecundaria" onClick={inputNum} value={9}>9</button>
         <button className="colorMain" onClick={operator} value="x">x</button>
         <button className="colorSecundaria" onClick={inputNum} value={4}>4</button>
         <button className="colorSecundaria" onClick={inputNum} value={5}>5</button>
         <button className="colorSecundaria" onClick={inputNum} value={6}>6</button>
         <button className="colorMain" onClick={operator} value="-">-</button>
         <button className="colorSecundaria" onClick={inputNum} value={1}>1</button>
         <button className="colorSecundaria" onClick={inputNum} value={2}>2</button>
         <button className="colorSecundaria" onClick={inputNum} value={3}>3</button>
         <button className="colorMain" onClick={operator} value="+">+</button>
         <button className="colorSecundaria" id="zero" onClick={inputNum} value={0}>0</button>
         <button className="colorSecundaria" onClick={inputNum} value=".">,</button>
         <button className="colorMain" onClick={calulou}>=</button>
      </div>
      </Container>
      </Box>
      )

}
