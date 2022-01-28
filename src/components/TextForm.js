import React, { useState} from 'react';

console.log();

export default function TextForm(props) {

    const OnClickMethod = (event)=>{
       let newText = text.toUpperCase();
       console.log("btn was clicked !");
       setText(newText)
    }

    const OnClickMethodLower = (event)=>{
        let newText = text.toLowerCase();
        console.log("btn was clicked !");
        setText(newText)
        //props.showAlert("Converted to lower case","success");
     }

     const OnClickMethodClear = (event)=>{
        let newText = '';
        console.log("btn was clicked !");
        setText(newText)
     }

    const onChangeMethod = (event)=>{
        let newText = text.toUpperCase();
        console.log("on change btn was clicked !");
        setText(event.target.value)
     }

     const OnClickMethodRemovExtraSpace = (event)=>{
      let newText  = text.replace(/\s+/g,' ').trim();
      setText(newText)
   }

     
    let [ text, setText ] = useState('');
    return(   
        <>
       
 <div className="container" style = {{ color:props.mode==='light'?"black":'white'}}> 
  
 <h2> { props.heading } </h2>
 <div className="mb-3">
      <textarea className="form-control" value={ text } onChange = { onChangeMethod } style = {{backgroundColor:props.mode==='light'?"white":'grey'}} id="myBox" rows="7"/>
  </div>
  < button className = "btn btn-primary mx-1" onClick = { OnClickMethod }> Convert to upper case </button>
  < button className = "btn btn-primary mx-1" onClick = { OnClickMethodLower }> Convert to lower case </button>
  < button className = "btn btn-primary mx-1" onClick = { OnClickMethodClear }> Clear </button>
  < button className = "btn btn-primary mx-1" onClick = { OnClickMethodRemovExtraSpace }> Remove Extra Space </button>
  
</div> 

   <div className="container my-3" style = {{ color:props.mode==='light'?"black":'white'}}>
     <h3> Your text summary</h3>
     <p> {text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length-1} Minutes to read.</p>
    
    <h3>Preview</h3>
    <p>{text}</p>
    </div>  

  </>
  )
  }
