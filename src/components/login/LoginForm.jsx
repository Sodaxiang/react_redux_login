import React from 'react';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import validateInput from '../../utils/validations/login';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            identifier:'',
            password:'',
            errors:{},
            isLoading: false,
            isValid: false,
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    // onCheck=(e)=>{
    //    let errors = {};
    //    const field = e.target.name;
    //    const val = e.target.value;
    //    //将之前的错误保留
    //    if(Object.keys(this.state.errors)){
    //        errors = this.state.errors;
    //     }
    //    if(!val){
    //        if(field ==="identifier"){
    //            errors.identifier = "用户名或邮箱不能为空";
    //        }else{
    //            errors.password="密码不能为空";
    //        }
    //    }else{
    //         if(field ==="identifier"){
    //             delete errors.identifier
    //         }else{
    //             delete errors.password;
    //        }
    //    }
    //    this.setState({
    //        errors,
    //        inValid: true
    //    });
    //    if(!Object.keys(errors).length){
    //         this.setState({
    //             inValid: false
    //         });
    //    }
      
    // }
    isValid = ()=>{
        const {errors, isValid} = validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},isLoading:true});
            this.props.authActions.login(this.state).then(
                (res)=>{
                    this.props.flashActions.addFlashMessage({
                        type:'success',
                        text:'欢迎您，登录成功！'
                    });
                    this.props.history.push('/');
                },
                ({response})=>{
                    this.setState({
                        errors: response.data.errors,
                        isLoading: false
                    })
                }
            )
            }
        
    }
    render(){
        const {identifier, password, errors, isLoading, isValid} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
            <h1>Login</h1>
            {errors.form && <div className="alert alert-danger">{errors.form}</div>}
            <div className="form-group">
               <label className="control-label">Username / Email</label>
               <input 
                  type="text"
                  name="identifier"
                  className={classnames("form-control", {"is-invalid":errors.identifier})}
                  value={identifier}
                  onChange={this.onChange}
                //   onBlur={this.onCheck}
                />
                  {errors.identifier && <span className="form-text text-muted">{errors.identifier}</span>}
            </div>
            <div className="form-group">
               <label className="control-label">Password</label>
               <input 
                  type="password"
                  name="password"
                  className={classnames("form-control", {"is-invalid":errors.password})}
                  value={password}
                  onChange={this.onChange}
                //   onBlur={this.onCheck}
                />
                {errors.password && <span className="form-text text-muted">{errors.password}</span>}
            </div>
            <div className="form-group">
               <button  disabled={isValid || isLoading} className="btn btn-primary btn-lg">Login</button>
            </div>
        </form>
        )
    }
}

export default withRouter(LoginForm);