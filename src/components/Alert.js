import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}color='black'>
      <div>
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}
 role="alert" >
      <strong>This is a Alert </strong> <strong> {props.alert.type}</strong>:{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> 
    </div>
    </div>
     )
}

export default Alert
