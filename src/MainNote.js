import React from 'react'
import Content from './Content'
import Note from './Note'
import './mainNote.css'

export default function MainNote(props){

    let match= props.notes.filter((notes) => notes.id === props.match.params.noteId)
    let filtered = match[0]

    return(
        <Content className='MainNote'>
            {filtered? <Note nameInfo={filtered.name} modifiedInfo={filtered.modified}></Note> : null}
            <br></br>
            <p>{filtered? filtered.content : null}</p>
        </Content>
    )

}