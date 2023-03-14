import cr from "../../Images/cr.png";
import cr_2 from "../../Images/cr-2.png";
import { Link, useLocation } from "react-router-dom";
import "./HeroComponentGlobal.css"

const HeroCompoentGlobal = () => {

  const location = useLocation()
  console.log(location.state);
  
    return (
      <div class="troo-da-sub-hero-section" id="troo-da-sub-hero-section">
        <div class="cricle-one">
          <img src={cr} alt="cr" />
        </div>
        <div class="cricle-one">
          <img src={cr_2} alt="cr-2" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sub-page-title">
              <h2>{location?.state?.title}</h2>
              <h2>{location?.state?.subTitle}</h2>
                <ul class="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default HeroCompoentGlobal