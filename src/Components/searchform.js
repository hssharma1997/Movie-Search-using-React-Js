import React from 'react'
import './style1.css'
export default function searchform(props) {
  
    return (
        <div>
            
            <form onSubmit={props.onSubmit} style={{textAlign:'center'}}>
                <input placeholder="Search Movie " type="text" onChange={props.onChange} className="input_form"/>
            </form>
        </div>
    )
}
