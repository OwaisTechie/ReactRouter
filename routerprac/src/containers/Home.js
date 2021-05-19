import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
class Home extends React.Component{
    render(){
        return(
            <div className='center'>
                <h1>Home Page</h1>
                

                <button className="aboutbtn">
                    
                    <Link className='Linkcol' to='/about' >Go To About</Link>
                    </button>
                    
                    
            </div>
        )
    }
}
export default Home;