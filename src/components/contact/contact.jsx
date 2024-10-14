import React from 'react'
import './contact.css'

import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div className="Contact-Us">
        <div className="Title">
            <h2 className="headingVer1">Contact us</h2>
            <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        <div className="Content">
            <div className="Form">
                <form>
                    <div className="Radio-Buttons">
                        <div>
                            <input type="radio" name="HiorQuote" defaultChecked/>
                            <label htmlFor="HiorQuote">Say Hi</label>
                        </div>

                        <div>
                            <input type="radio" name="HiorQuote"/>
                            <label htmlFor="HiorQuote">Get a Quote</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Name">Name</label>
                        <input type="text" name="Name" id="Name" placeholder='Name'/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email*</label>
                        <input type="email" name="Email" id="Email" placeholder='Email' required/>
                    </div>
                    <div>
                        <label htmlFor="Message">Message*</label>
                        <textarea name="Message" id="Message" placeholder='Message' required></textarea>
                    </div>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
            <div className="Illustration">
                <img src={assets.Illustration9} alt="Illustration" />
            </div>
        </div>
    </div>
  )
}

export default Contact