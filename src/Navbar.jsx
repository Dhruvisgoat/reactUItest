import React from 'react'
// make scrollable sidebar

const styleSideBar = {
    display: 'flex',
    padding: '40px',
    justifyContent:'end',
    backgroundColor:'#303030',
    alignItems:'center',
    height:'5vh'
}
const styleSideBarElement = {
    marginLeft: '20px'
}

const buttonStyle = {
    backgroundColor: '#3399ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px',
    marginLeft:'30px'
}
const imageStyle = {
    borderRadius: '100%',
    height: '30px',
    width: '30px',
    marginLeft:'30px'

}
const inputStyle = {
    position: 'absolute', // Added position absolute
    left: '30vw', // Positioned 20vw from the right
    borderRadius:'3px',
    border:'none',
    padding:'5px'
};


function Navbar() {
    return (
        <>
        <div style={styleSideBar}>
            <input style={inputStyle} />
            <button style={buttonStyle} >
                + Create
            </button>
            <div style={{marginLeft:'30px'}}>
                💬
            </div >
            <div style={{marginLeft:'30px'}} >
                🔔
            </div>
            <img src='manImage.png' style={imageStyle} alt="logo.png" />
        </div>
        </>

    )
}

export default Navbar
