import './App.css';
import Btn from './components/Btn';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import TextField from './components/TextField';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {

     const [text, settext] = useState("");
    
     const change = (event)=>{
         settext(event.target.value);
         console.log("change happened");
     }

     const upper =()=>{
          console.log("uppercase clicked");
          let newT = text.toUpperCase();
          settext(newT);
     }
     const lower =()=>{
          console.log("lowercase clicked");
          let newT = text.toLowerCase();
          settext(newT);
     }
     const rmspace =()=>{
          console.log("rm space clicked");
          let newT = (text.split(" ").filter((i)=>i!=="").join(" "));
          settext(newT);
          console.log(newT);
     }
     const clear =()=>{
          console.log('clear pressed');
          settext("");
     }

     const copy=()=>{
          console.log("copy pressed");
          let copyText = document.getElementById("box")
          copyText.select();
          navigator.clipboard.writeText(copyText.value);
    }
     const paste = ()=>{
          navigator.clipboard.readText()
          .then(cltext => {
               console.log("paste pressed");
               let newT = text + cltext;
               settext(newT);
          })
          .catch(err => {
               console.log('Something went wrong', err);
          });
    }



 return (<>

      <Navbar></Navbar>
      <TextField heading={"Enter text here to analyze"} change = {change} text={text}></TextField>
      <Btn upper ={upper} paste={paste} lower ={lower} rmspace ={rmspace} clear ={clear} copy={copy}></Btn>
      <Preview text = {text}></Preview>
      <Footer></Footer>
 </>
   
 );
}
export default App;
