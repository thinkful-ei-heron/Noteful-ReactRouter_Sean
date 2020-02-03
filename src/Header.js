import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Content from './Content'
import './header.css'

export default class Header extends Component {
    render(){
        return(
            <Content className='Header'>
                <Link to='/'>
                    <h1>Noteful</h1>
                </Link>
            </Content>
        )
    }
}