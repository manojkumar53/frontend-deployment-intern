//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
function Frenchvideo1(){
    return(
        <div>
            <nav className="navbar bg-info">
                  <Link to="/" className="navbar-brand mx-3">Language Learning</Link>
             <div className="nav">
                  <Link to="/french" className="nav-link">Logout</Link>
            </div>
            </nav>
            <div className="text-danger text-center my-10 mb-4 " >
            <h1>Watch the video and Learn it happily..</h1>
            </div>
            {/* <Container> */}
            <div className="ratio ratio-16x9" style={{marginLeft:"150px"}}>
           <iframe src="https://www.youtube.com/embed/-7woR4auqso?si=82vV0wqVrAvVx_b6" title="YouTube video" allowFullScreen style={{ width: "70%", height: "60%" }}></iframe>
            </div>
            
            {/* </Container> */}
        </div>
    )
}
export default Frenchvideo1;

//<iframe width="560" height="315" src="https://www.youtube.com/embed/w46i7nY9Zt4?si=yzsQtvdSk34ZuQRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>