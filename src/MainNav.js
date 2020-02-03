import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Note from './Note'
import store from './dummy-store'
import './mainNav.css'

class MainNav extends Component{

    static defaultProps={
        notes:[],
        match:{}
    }

    state={
        currentNotes:[]
    }

    componentDidMount(){
        console.log(this.props.match.params.folderId)
        const notesInFolder = (store ? store.notes.filter((notes) => notes.folderId === this.props.match.params.folderId) : null)
        this.setState({currentNotes:notesInFolder})
    
    }

    componentWillReceiveProps(){
        const notesInFolder = (store ? store.notes.filter((notes) => notes.folderId === this.props.match.params.folderId) : null)
        this.setState({currentNotes:notesInFolder})
    }


    render(){
        
        return(
            <Content className='MainNav'>
                {this.state.currentNotes.map((note, index) => {
                return(
                <NavLink className='noteNavLink' to={`/note/${note.id}`} key={index} >
                    <Note key={index} nameInfo={note.name} modifiedInfo={note.modified}></Note>
                </NavLink>
                )
                })}
            </Content>
        )
    }

}

export default MainNav