import React from "react";

function Form(){
    return (
        <div className="image">
        <div className="login-form">
            <button type="button" className="btn btn-primary continueButton fac" ><i class="fab fa-facebook-square"></i> &nbsp; Continue with Facebook</button>
            <button type="button" className="btn btn btn-light continueButton" ><i class="fab fa-google"></i> &nbsp; Continue with Google</button>
            <button type="button" className="btn btn-primary continueButton git" ><i class="fab fa-github-square"></i> &nbsp; Continue with GitHub</button>
            <form>
                <i class="fas fa-envelope-square icon-box"></i>
                <input
                  type="email"
                  className="form-control form-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <br/>
              <i class="fas fa-unlock-alt icon"></i>
                <input
                  type="password"
                  className="form-control form-box"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <br/>
              <button type="submit" className="btn btn-primary submit-button">
                Login
              </button>
            </form>
          </div>
        </div>
    );
}

export default Form;