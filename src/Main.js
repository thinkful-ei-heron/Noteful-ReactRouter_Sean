import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Note from './Note'
import './main.css'


class Main extends Component{

    static defaultProps={
        notes:[]
    }

    render(){
        return(
            <Content className='Main'>
                {this.props.notes.map((note, index) => {
                    return(
                        <NavLink className='noteNavLink' to={`/note/${note.id}`} key={index} >
                            <Note nameInfo={note.name} modifiedInfo={note.modified}>
                            </Note>
                        </NavLink>
                    )
                })}
            </Content>
        )
    }

}

export default Main