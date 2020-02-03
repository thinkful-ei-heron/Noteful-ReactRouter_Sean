import React, { Component } from 'react'
import Content from './Content'
import './note.css'

class Note extends Component {
    render() {
        return(
            <Content className='Note'>
                <div>
                    {this.props.nameInfo}   
                </div>
                <div>
                    {this.props.modifiedInfo}
                </div>           
            </Content>
        )
    }
}

export default Note;