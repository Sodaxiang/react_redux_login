import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false, 
            inValid: false,
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    checkUser=(e)=>{
        const field = e.target.name;
        const val = e.target.value;
        if(val){
            this.props.signupActions.checkUserExist({[field]:val}).then(
                (res)=>{
                    if(res.data){
                      let errors ={};
                      //将之前的错误保留
                       if(Object.keys(this.state.errors)){
                           errors = this.state.errors;
                       }
                       errors[field] = res.data[field];
                        this.setState({
                            errors: errors,
                            inValid: true,
                        });
                    }else {
                        this.setState({
                            errors: {},
                            inValid: false,
                        });
                    }
                    
                },
                (err)=>{
                    console.log(err);
                }
            )
        }
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            errors:{},
            isLoading: true
        });
        this.props.signupActions.userSignupRequest(this.state).then(
            ()=>{
                this.props.history.push('/login');
                this.props.flashActions.addFlashMessage({
                    type: 'success',
                    text: '欢迎你，注册成功~请登录'
                })
            },
            ({response})=>{
                this.setState({
                    errors: response.data,
                    isLoading:false,
                });
            }
        );
    }
    render(){
        const {username, email, password, passwordConfirmation, errors, isLoading, inValid} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        type="text"
                        name="username"
                        className={classnames("form-control", {"is-invalid":errors.username})}
                        value={username}
                        onChange={this.onChange}
                        onBlur={this.checkUser}
                        />
                    {errors.username && <span className="form-text text-muted">{errors.username} </span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className={classnames("form-control", {"is-invalid":errors.email})}
                        value={email}
                        onChange={this.onChange}
                        onBlur={this.checkUser}
                        />
                    {errors.email && <span className="form-text text-muted">{errors.email} </span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className={classnames("form-control", {"is-invalid":errors.password})}
                        value={password}
                        onChange={this.onChange}
                        />
                    {errors.password && <span className="form-text text-muted">{errors.password} </span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input 
                        type="password"
                        name="passwordConfirmation"
                        className={classnames("form-control", {"is-invalid":errors.passwordConfirmation})}
                        value={passwordConfirmation}
                        onChange={this.onChange}
                        />
                    {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation} </span>}
                </div>

                <div className="form-group">
                   <button disabled={isLoading || inValid} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        )
    }
} 

export default withRouter(SignupForm);