import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "./Log.css";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitChange = (e) => {
    e.preventDefault();
    alert(
      `Email address is ${data.email} and the password is ${data.password}`
    );
  };

  return (
    <>
      <div className="back">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto pt-5">
              <div className="row contact ">

                <div className="col-md-7 order-1 order-lg-2 bg-light contact-sec">
                  <div className="container form-fun">
                    
                    <div style={{ padding: "22px" }}>
                      <div className=" pb-4 pt-5">
                        <h2>Sign into your account</h2>
                      </div>

                      <Form onSubmit={submitChange}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="Enter email address"
                          />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Control
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={InputEvent}
                            placeholder="Password"
                          />
                        </Form.Group>

                        <Button type="submit" className="button1">
                          Submit
                        </Button>
                      </Form>

                      <div className="pt-4">
                        <a href="#login">
                          <span style={{ color: "grey", fontSize: "13px" }}>
                            Forgot password?
                          </span>
                        </a>
                        <br />
                        <p>
                          Don't have an account?{" "}
                          <a href="#login"> Register here</a>
                        </p>
                        <br />

                        <span className=" text-secondary">terms & policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
