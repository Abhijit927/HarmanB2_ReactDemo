import { useState } from "react";
import { useNavigate }  from "react-router-dom";


export let LoggingComponentTemplate = (props:any) => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    function updateUserName(e:any){
        setUserName(e.target.value);
    };

    function updatePassword(e:any){
      setPassword(e.target.value);
    }

    function verifyUser(e:any){
        if(userName === "admin" && password === "admin123"){
            localStorage.setItem("token", "dummy-token");
            setIsLoggedIn(true);
             navigate("/products/details");
                } else{
            setIsLoggedIn(false);
            localStorage.removeItem("token");
             navigate("/logging");
            alert("Invalid credentials. Please try again.");
        }
      };

    return (
      <>
      {/* <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> */}
<table className="m-5 p-5 logging-table col col-4 m-5 p-5 align-self-start table-striped-columns table table-success table-striped table table-hover border border-primary border border-rounded p-5 m-5 w-1000 br-3"  style={{ width: "50%" }} >
          <th colSpan={2} style={{ textAlign: "center" }} className="text-size-3">
            <h3 className="text-size-3">{props.title}</h3>
          </th>

          <tr className="form-group">
            <th className="form-label float-right col-2" >User Name </th>
            <td>
              <input className="form-control col-11"
                type="text"
                value={userName}
                onChange={(e) => updateUserName(e)}
              />
            </td>
          </tr>
          <tr className="form-group" >
            <th className="form-label">Password </th>
            <td>
              <input
                type="password" className="form-control"
                value={password}
                onChange={(e) => updatePassword(e)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
              <button onClick={(e)=> verifyUser(e)}  className="btn btn-primary" >Login</button>
                         </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
              {isLoggedIn ? `Welcome, ${userName}!` : "Please log in."}
            </td>
          </tr>
        </table>
      </>
    );
}
