import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
    //javascript
    gotohome = ()=>{
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h1>About Page</h1>
                {/* JsX */}
                {/* <Link to='/'>Go to Home<Link/> */}
                <button onClick={this.gotohome}>Go to Home</button>
            </div>
        )
    }
}
export default About;