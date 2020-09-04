import React from "react";

function Form(props){
    return (
        <div className="image">
        <div className="login-form">
            <button type="button" className="btn btn-primary continueButton fac" >
            <a className="button-anchor" href="https://www.facebook.com/">
            <i class="fab fa-facebook-square"></i>
             &nbsp; {props.button1}
             </a>
             </button>
            <button type="button" className="btn btn btn-light continueButton" >
            <a className="button-anchor google" href="https://www.google.com/intl/en-GB/gmail/about/">
            <i class="fab fa-google"></i>
             &nbsp; {props.button2}
             </a>
             </button>
            <button type="button" className="btn btn-primary continueButton git" >
            <a className="button-anchor" href="https://github.com/">
            <i class="fab fa-github-square"></i>
             &nbsp; {props.button3}
             </a>
             </button>
            <form>
                <div className="form-div">
                <i class="fas fa-envelope-square icon-box"></i>
                <input
                  type="email"
                  className="form-control form-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={props.form1}
                />
                </div>
                <div className="form-div">
                <i class="fas fa-unlock-alt icon"></i>
                <input
                  type="password"
                  className="form-control form-box"
                  id="exampleInputPassword1"
                  placeholder={props.form2}
                />
                </div>
              <button type="submit" className="btn btn-primary submit-button">
                Login
              </button>
            </form>
          </div>
        </div>
    );
}

export default Form;