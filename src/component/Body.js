import React from "react";
import Text from "./Text";
import Form from "./Form";

function Body(){
    return (
        <div className="content">
        <Text 
        heading1="Welcome to Learning Online"
        heading2="Application System"
        subheading1="If you already have a Learning Online account"
        subheading2="please sign in"
        />
        <Form 
          button1="Continue with Facebook"
          button2="Continue with Google"
          button3="Continue with GitHub"
          form1="Email"
          form2="Password"
        />
      </div>
    );
}

export default Body;