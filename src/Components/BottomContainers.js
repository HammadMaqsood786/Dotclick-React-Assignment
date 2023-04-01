import React from 'react';
import "../MainScreen/mainScreen.css";
import alphabetPng from "../images-icons/vector1.png";

// ============ Bottom containers component for re useable ========== //

function BottomContainers() {
    return (
        <div className='main-box' >
            <img src={alphabetPng} id='alphabet-img' />
            <p className="holiday-text" >Holiday Inn</p>

            <div className='inner-box' >
                <p className='inner-box-text' >1.5 miles away from joblocation.</p>
                <div className='inner-box-bottom-area' >
                    <div className='bottom-left' >
                        <p className='rates' >Singles: $120</p>
                        <p className='rates' >Doubles: $145</p>
                    </div>

                    <button id='booknow-btn' >
                        <p id='btn-text' >Book now</p>
                    </button>

                </div>
            </div>



        </div>
    )
}

export default BottomContainers