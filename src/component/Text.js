import React from "react";

function Text(props){
    return (
        <div className="form">
          <div className="form-text">
            <div className="big-heading">
              <h1>{props.heading1}</h1>
              <h1>{props.heading2}</h1>
            </div>
            <div className="small-heading">
              <h3>{props.subheading1}</h3>
              <h3>{props.subheading2}</h3>
            </div>
          </div>
        </div>
    );
}

export default Text;