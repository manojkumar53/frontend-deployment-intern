//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
function Frenchvideo5(){
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
            <h1>1-100 numbers</h1>
            <div className="ratio ratio-16x9" style={{marginLeft:"150px"}}>
           <iframe src="https://www.youtube.com/embed/CEx2fPn-_UE?si=7qljjr-AgdHon6ZS" title="YouTube video" allowFullScreen style={{ width: "70%", height: "60%" }}></iframe>
            </div>
            <h1>Days of the week</h1>
            <div className="ratio ratio-16x9" style={{marginLeft:"150px"}}>
           <iframe src="https://www.youtube.com/embed/rim94Xp2XQ4?si=RDbfWBCZ-vZk8uGI" title="YouTube video" allowFullScreen style={{ width: "70%", height: "60%" }}></iframe>
            </div>
            <h1>Months of the Year</h1>
            <div className="ratio ratio-16x9" style={{marginLeft:"150px"}}>
           <iframe src="https://www.youtube.com/embed/JyROOY4RPJg?si=FpyeqFhaoLap6Vxy" title="YouTube video" allowFullScreen style={{ width: "70%", height: "60%" }}></iframe>
            </div>
            {/* </Container> */}
        </div>
    )
}
export default Frenchvideo5;