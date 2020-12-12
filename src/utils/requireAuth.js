import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages';

export default function(ComposeComponent){
    class Authenticate extends Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type:'danger',
                    text:'你需要登录才能访问该页面~'
                });
                this.props.history.push('/login');
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push('/login'); 
            }
        }
        render(){
            return (
                <ComposeComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = state =>{
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, {addFlashMessage})(Authenticate);
}