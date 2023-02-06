import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  })

  let name, value;
  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }

  const css ={
    color: "black",
    textDecoration: "none",
    textAlign: "center",
    display: "block"
  }

  const PostData = async(e)=>{
    e.preventDefault();
    const {name,email, phone, work, password, cpassword} = user;
    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        // "Content-Length": "<calculated when request is sent>",
        // "Accept": "*/*",
        // "Access-Control-Allow-Origin": "http://localhost:5000",
        // "Access-Control-Allow-Credentials": "true"
      },
      body:JSON.stringify({
        name:name,email:email, phone:phone, work:work, password:password, cpassword:cpassword
      })
    } );

    const data =  await res.json();

    if (data.status === 422 || !data ) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert(" Registration Successful");
      console.log(" Registration Successful");

      navigate("/login")
    }
  }
  return (
    <>
      <section  className="vh-100" style={{ backgroundColor: "#eee", fontFamily: "JetBrains Mono" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form method="POST" className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              value={user.name}
                              onChange={handleInputs}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="name"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              value={user.email}
                              onChange={handleInputs}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="email"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="phone"
                              name="phone"
                              placeholder="Mobile Number"
                              value={user.phone}
                              onChange={handleInputs}
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="phone"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="Your Profession"
                              value={user.work}
                              onChange={handleInputs}
                              name="work"
                              id="work"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="work"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              placeholder="Your Password"
                              value={user.password}
                              onChange={handleInputs}
                              name="password"
                              id="password"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="password"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center ">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="cpassword"
                              placeholder="Confirm Your Password"
                              value={user.cpassword}
                              onChange={handleInputs}
                              id="cpassword"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="cpassword"
                            ></label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 ">
                          <input
                            type="submit"
                            name="signup"
                            id="signup"
                            className="btn btn-primary form-submit btn-md"
                            value="Register"
                            onClick={PostData}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <figure>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample "
                      />
                      <NavLink to='/login' style={css}>I am already registerd</NavLink>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
