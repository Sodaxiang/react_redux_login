import React from 'react';
import { connect } from 'react-redux';

import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from '../../actions/flashMessages';

class FlashMessageList extends React.Component{
    
    render(){
        const messages = this.props.messages.map((message, index)=>{
            return (
                <FlashMessage key={index} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
            )
        })   
        return(
            <div className="container">
                {messages}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return{
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessageList);
