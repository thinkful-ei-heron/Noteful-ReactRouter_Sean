import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Content from './Content'
import Folder from './Folder'
import './sidebarNav.css'

export default function SidebarNav(props){
        return(
            <Content className='SidebarNav'>
                
                {props.folders.map((folder,index) => {
                    return(
                        <NavLink key={index} className='SidebarNav' to={`/folder/${folder.id}`}>
                            <Folder  folder={folder.name}>   
                            </Folder>
                        </NavLink>
                    )
                })}
            </Content>
        )

}
