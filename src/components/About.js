import React, { useState } from 'react'

export default function About(props) {

   const [myStyle,setmyStyle]= useState({
        color: 'rgb(240, 236, 247)',
        backgroundColor: 'rgb(19, 44, 54)'
})
    
//    const [btntext,setbtntext]=useState("Enable Dark mode")

  //  const togglestyle=()=>{
    //    if(myStyle.color==='black'){
      //      setmyStyle({
        //        color: 'white',
        //backgroundColor: 'black'
          //  })
            //setbtntext("enable light mode")
        //} 
        //else {
          //  setmyStyle ({
            //    color: 'black',
        //backgroundColor: 'white'
          //  })
            //setbtntext("Enable dark mode")
        //}

   // }

    
  return (
    <div className="container mx-4 my-5"  style={{color:props.mode==='rgb(148, 216, 201)'}}>
        <h1><b>About Us</b></h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h5><strong>Analyze your text</strong> </h5> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        Textutils givs you a way to analyze your text quickly and eficiently.Be it word count, character count 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5><strong>Free to Use</strong></h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of word and character.This it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h5><strong>Browser compatiblle</strong> </h5>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        This word counter software work any web browsers such as chrome,internet explorer,firebox, safari, opera It suits to count characters in facebbok,blog,book,excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
{/*<button type="button" onClick={togglestyle} className="btn btn-secondary">{btntext}</button>*/}
</div>
    </div>
  )
}
