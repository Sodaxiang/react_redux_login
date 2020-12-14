import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import {addFlashMessage} from '../actions/flashMessages';

class NavigationBar extends React.Component{

    logout = (e)=>{
        e.preventDefault();
        //退出后给出提示
        this.props.logout();
        this.props.addFlashMessage({
            type: 'success',
            text:'您已退出'
        });
        // new Promise((resolve, reject)=>{
        //     this.props.logout();
        //     resolve();
        // }).then((res)=>{
        //     this.props.addFlashMessage({
        //         type: 'success',
        //         text:'您已退出'
        //     });
        // })
    }
    render(){
        const {isAuthenticated} = this.props.auth;
        const guestLinks = (         
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );
        const userLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    {/* eslint-disable-next-line */}
                    <a className="nav-link" onClick={this.logout}>Sign Out</a>
                </li>
            </ul>
        )
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
        <Link className="navbar-brand" to="/">ReduxLogin</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

         <div className="collapse navbar-collapse" id="navbarsExample05">
           {isAuthenticated ? userLinks : guestLinks}
         </div>
        </div>
      </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logout, addFlashMessage})(NavigationBar); 