import React from 'react'

import './Express.css'

const Express = () => {
  return (
    <div className="Express-Section">
        <div className="Phone-Infromation-Section">
            <h1 id="Section-Title">
            Express yourself with millions of Lenses.
            </h1>

            <form className='Phone-Inputs' action="">

                <fieldset>
                    <select name="AreaCodes" id="Area-Code-Selection">
                        <option id='AreaCodeItem' value="AU"><p>AU +61</p></option>
                        <option id='AreaCodeItem' value="BR"><p>BR +55</p></option>
                        <option id='AreaCodeItem' value="GB"><p>GB +44</p></option>
                        <option id='AreaCodeItem' value="IN"><p>IN +91</p></option>
                        <option id='AreaCodeItem' value="MX"><p>MX +52</p></option>
                        <option id='AreaCodeItem' value="US"><p>US +1</p></option>
                    </select>

                    <input id='Phone-Number-Input-Box' type="text" name='Phone' placeholder='Phone Number' />


                
                    <a href="/">
                        <button className='Try-Now-Button'>
                            <p>Try Now</p>
                        </button>
                    </a>
             </fieldset>
            </form>
        </div>

        <div className="Video-Wrapper">
            <video src={require('../../../../Assets/Videos/Landing Page Videos/Lens-Expression-Video.mp4')} alt="" id="Express-Video" autoPlay loop></video>
        </div>

        <div className="Express-Video-Large-Wrapper">
            <div className="Express-Video-Overlay-Card">
                <div className="Discover">
                    <img src={require('../../../../Assets/Icons/Expand-Arrow-Up.png')} alt="" id="Up-Arrow" className='Expand-Arrow-Express-Video'/>
                    <p id="DiscoverText">Discover Snapchat</p>
                </div>
                
                <h1 id="Video-Title">
                    Express yourself with millions of Lenses.
                </h1>

                <a href="/">
                    <button className='Try-Now-Button-Video'>
                        <p>Try Now</p>
                    </button>
                </a>
            </div>
            <video src={require('../../../../Assets/Videos/Landing Page Videos/Lens-Expression-Video.mp4')} alt="" id="Express-Video-Large" autoPlay loop>
            </video>
        </div>
    </div>
  )
}

export default Express