import React from 'react'
import Content from './Content'
import Folder from './Folder'
import './sidebarNote.css'

export default function SidebarNote(props){

    let temp = props.notes.filter((notes)=>notes.id===props.match.params.noteId)
    let temp2 = temp[0]
    let temp3 = temp2 ? temp2.folderId : null
    let temp4 = temp3 ? props.folders.filter((folder) => folder.id===temp3) : null
    let temp5 = temp4 ? temp4[0] : null
    console.log(temp5)

    return(
        <Content className='SidebarNote'>
            <br></br>
            <Folder folder='Go Back' onClick={() => props.history.goBack()}></Folder>
            <div className='folderDiv'>
                {temp5 ? `Folder : ${temp5.name}` : null}
            </div>
        </Content>
    )
}