import React from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import * as flashActions from '../../actions/flashMessages';

class LoginPage extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                   <LoginForm authActions={this.props.authActions} flashActions={this.props.flashActions}/>
                </div>
                <div className="col-3"></div>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        authActions: bindActionCreators(authActions, dispatch),
        flashActions: bindActionCreators(flashActions, dispatch),
    }
}
export default connect(null,mapDispatchToProps)(LoginPage);