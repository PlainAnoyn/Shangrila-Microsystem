import React from 'react'
import './team.css'
import ima from '../../assets/im1.jpg'
import imb from '../../assets/im2.jpg'
import imc from '../../assets/im3.jpg'

const Our_Team = () => {
  return (
    <div className="wrapper containerr">
      <h1><span>Our</span> team</h1>
        <div className="card_Container ">

            <div className="card">

                <div className="imbBx">
                    <img src={ima}alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>James Henry <br/><span>Web Analyst</span></h3>
                    </div>
                    <ul className="sci">
                        <li >
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card">

                <div className="imbBx">
                    <img src={imb} alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>John Doe <br/><span>UI/UX Designer</span></h3>
                    </div>
                    <ul className="sci">
                        <li >
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card">

                <div className="imbBx">
                    <img src={imc} alt=""/>
                </div>

                <div className="content">
                    <div className="contentBx">
                        <h3>Mykel Smith <br/><span>Front-End Web Developer</span></h3>
                    </div>
                    <ul className="sci">
                        <li >
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li >
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>

            </div>
{/* <div className="card">
<div className="imbBx">
    <img src={imc} alt=""/>
</div>

<div className="content">
    <div className="contentBx">
        <h3>Mykel Smith <br/><span>Front-End Web Developer</span></h3>
    </div>
    <ul className="sci">
        <li >
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-github"></i></a>
        </li>
        <li >
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </li>
    </ul>
</div>

</div> */}

        </div>

    </div>
  )
}

export default Our_Team
