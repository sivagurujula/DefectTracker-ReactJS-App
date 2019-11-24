import React from 'react'

class Header extends React.Component{
    render(){
        return (
            <div align="Center">
                <h1>Defect Tracker</h1>
                <a href="">Logout</a> <br></br>
                <a href="">Add Defect</a>&nbsp;
                <a href="">View Defect</a>
            </div>            
        )
    }
}

export default Header