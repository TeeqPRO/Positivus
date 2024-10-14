import React from 'react'
import './footer.css'
import ButtonVer3 from '../assets/button/ver3/buttonVer3'

import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="Footer">
        <div className="Content">
            <div className="Navigation-And-Content">
                <div className="Elements">
                    <div className="Logo">
                        <img src={assets.LogoVar2} alt="Logo" />
                    </div>
                    <div className="Navigation">
                        <ul>
                            <li><a href="About.html">About us</a></li>
                            <li><a href="Services.html">Services</a></li>
                            <li><a href="UseCases.html">Use Cases</a></li>
                            <li><a href="Pricing.html">Pricing</a></li>
                            <li><a href="Blog.html">Blog</a></li>
                        </ul>
                    </div>
                    <div className="Social">
                        <ul>
                            <li>
                                <a href="linkedin.com">
                                    <img src={assets.Social1} alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="facebook.com">
                                    <img src={assets.Social2} alt="facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="twitter.com">
                                    <img src={assets.Social3} alt="twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Frame">
                    <div className="Contact">
                        <h4 className='headingVer1'>
                            Contact us:
                        </h4>
                        <div className="Info">
                            <p>
                                Email: info@positivus.com
                            </p>
                            <p>
                                Phone: 555-567-8901
                            </p>
                            <p>
                                Address: 1234 Main St <br />
                                Moonstone City, Stardust State 12345
                            </p>
                        </div>
                    </div>
                    <div className="Subscription">
                        <div className="Content">
                            <input type="email" placeholder='Email' />
                            <button>Subscribe to news</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Line-And-Text">
                <div className="Line"></div>
                <div className="Text">
                    <p>
                        © 2023 Positivus. All Rights Reserved.
                    </p>
                    <a href="youtube.com">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer