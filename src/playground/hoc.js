// HIRE ORDER COMPONENT (HOC) - component that randers another component
//Render hijacking
//Reuse code
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponenet)=>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info. Don't share!</p>}
        <WrappedComponenet {...props}/>
        </div>
    );
};

//requireAuthentication
const requireAuthentication=(WrappedComponenet)=>{
    return(props) =>(
       <div>
          
           {props.isAuthentication ? (
            <WrappedComponenet {...props}/>
           )   : (
           <p>Try again</p>
            )}
       </div>
    );
};


const AdminInfo=withAdminWarning(Info); 

const AuthInfo=requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info = "This is the details"/>,document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthentication={true} info = "This is the details"/>,document.getElementById('app'));