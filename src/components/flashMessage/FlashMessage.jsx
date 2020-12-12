import React from 'react';
import classnames from 'classnames';

export default class FlashMessage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isShow: false,
        }
    }
    componentDidMount(){
        this.showAlert();
    }
    showAlert = () =>{
        this.setState({
            isShow: true
        });
        this.hideAlert();
    }
    hideAlert = () =>{
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.setState({
                isShow: false
            });
        }, 3000)
    }
    deleteMessage = (id) =>{
        this.props.deleteFlashMessage(id)
    }   
    render(){
        const {type, text,id} = this.props.message;

        return (
            this.state.isShow &&
            <div className={classnames('alert', 
                 {'alert-success':type==='success'},
                 {'alert-danger':type==='danger'}
                )}>
               {text}
               <button onClick={()=>this.deleteMessage(id)} className="close"><span>&times;</span></button>
            </div>
        )
    }
} 