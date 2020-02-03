import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Folder from './Folder'
import './sidebar.css'

export default function Sidebar(props){
        return(
            <Content className='Sidebar'>
                {props.folders.map((folder,index) => {
                    return(
                    <NavLink key={index} className='SidebarNavLink' to={`/folder/${folder.id}`}>
                        <br></br>
                        <Folder  folder={folder.name}>   
                        </Folder>
                    </NavLink>
                    )
                })}
            </Content>
        )

}