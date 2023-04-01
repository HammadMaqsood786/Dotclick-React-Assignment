import React from 'react';
import "../MainScreen/mainScreen.css";

// ======== Sidebar Component ========== //

function SideBar() {
    return (
        <div className='sidebar-main-container' >
            <h2 id='sidebar-heading' > LODGN </h2>

            <div className='sidebar-divs-parent' >
                <div className='childs' >
                    <h4 className='child-text' >Current requests</h4>
                </div>

                <div className='childs' >
                    Ongoing stays
                </div>

                <div className='childs' >
                    Previous stays
                </div>

                <div className='childs' >
                    Reports
                </div>
            </div>

            <button id='logout-btn' >
                Log-Out
            </button>

            <br />

            <p id='bottom-text1' >
                Help Desk
            </p>

            <p id='bottom-text2' >
                786-874 9988
            </p>
        </div>
    )
}

export default SideBar