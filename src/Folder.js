import React, { Component } from 'react'
import Content from './Content'
import './folder.css'

class Folder extends Component {

    static defaultProps={
        folder:{}
    }

    render() {
        return(
            <Content className='Folder' onClick={() => this.props.onClick ? this.props.onClick() : null}>
                <div className='folderText'>
                    {this.props.folder}
                </div>     
            </Content>
        )
    }
}

export default Folder;