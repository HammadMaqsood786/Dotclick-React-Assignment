import React from 'react';
import "./mainScreen.css";
import SideBar from '../Components/SideBar';
import BottomContainers from '../Components/BottomContainers';
import chatIcon from "../images-icons/chat-icon.png"

function MainScreen() {
    return (

        <div className='main-container' >
            <SideBar />

            <div className='text-div' >
                <p>You currently have 3 requests</p>
            </div>

            <div className='container1' >

                <div className='container1-parent' >

                    <div className='container1-childs ' >
                        <p className='childs-text' >St Judes Hospital</p>

                        <p className='childs-bottom-text' > Sarasota,FL. 33178</p>
                    </div>

                    <div className='container1-childs special-child ' >
                        <p className='childs-text childs-text2' >10 -
                            <br />
                            <span className='childs-bottom-text bottom-text' >October</span>
                        </p>
                        <p className='childs-text' >
                            17
                            <br />
                            <span className='childs-bottom-text' >December</span>
                        </p>

                    </div>

                    <div className='container1-childs' >
                        <p className='childs-text for-margin' >20 Rooms</p>
                        <p className='childs-bottom-text for-margin' >10 Singles, 10 doubles</p>
                    </div>
                    <br />


                </div>

                <div className='status-div' >
                    <div className='status-div-childs status-child1' >
                        <p className='status-div-text' >RECEIVED</p>
                    </div>

                    <div className="status-div-childs status-child2" >
                        <p className='status-div-text' >NEGOTIATING</p>
                    </div>

                    <div className="status-div-childs status-child3" >
                        <p className='status-div-text' >COMPLETED</p>
                    </div>:
                </div>
            </div>

            <br />



            <div className='container2' >
                <div className='container1-parent' >

                    <div className='container1-childs ' >
                        <p className='childs-text' >St Judes Hospital</p>

                        <p className='childs-bottom-text' > Sarasota,FL. 33178</p>
                    </div>

                    <div className='container1-childs special-child ' >
                        <p className='childs-text childs-text2' >10 -
                            <br />
                            <span className='childs-bottom-text bottom-text' >October</span>
                        </p>
                        <p className='childs-text' >
                            17
                            <br />
                            <span className='childs-bottom-text' >December</span>
                        </p>

                    </div>

                    <div className='container1-childs' >
                        <p className='childs-text for-margin' >20 Rooms</p>
                        <p className='childs-bottom-text for-margin' >10 Singles, 10 doubles</p>
                    </div>
                    <br />


                </div>

                <div className="container2-status" >
                    <p className='statusbar-text' >COMPLETED</p>
                </div>

                <div className='bottom-containers-parent' >

                    <span className='badge' >
                        <p className='badge-text' >
                            Rare Find
                        </p>
                    </span>
                    <BottomContainers />
                    <BottomContainers />
                    <BottomContainers />
                </div>
            </div>

            <img src={chatIcon} id='chat-icon' />
        </div>
    )
}

export default MainScreen;