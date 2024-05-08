import React from 'react'



function Sidebar() {

    const sidebarStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',

        backgroundColor: "#303030",
        color: 'white',
        width: '20vw',
        height: "100vh",
        borderRight: '1px solid black',
        padding: '20px',
        justifyContent: 'flex-start'
    }
    const sidebarElementStyle = {
        padding: '10px',

    }
    return (
        <>

            <div style={sidebarStyle}>
                <div style={{marginBottom:'10vw'}}>
                    Logo
                </div>
                <div style={sidebarElementStyle}>
                    Home
                </div>
                <div style={sidebarElementStyle}>
                    Customers
                </div>
                <div style={sidebarElementStyle}>
                    Shop
                </div>
                <div style={sidebarElementStyle}>
                    Income
                </div>
                <div style={sidebarElementStyle}>
                    Promote
                </div>
            </div>
        </>
    )
}

export default Sidebar