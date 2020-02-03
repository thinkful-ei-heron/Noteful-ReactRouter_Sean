import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import SidebarNav from './SidebarNav'
import SidebarNote from './SidebarNote'
import Header from './Header'
import Main from './Main'
import MainNav from './MainNav'
import MainNote from './MainNote'
import store from './dummy-store.js'
import './App.css';

class App extends Component {
  
  state={
    folders:[],
    notes:[]
  }

  componentDidMount(){
    setTimeout(()=>this.setState({folders:store.folders,
                                  notes:store.notes}),500)
  }


  renderNavRoutes(){
    return(
        <>
        {['/folder/:folderId'].map(path => (
        <Route 
            exact
            key={path}
            path={path} 
            render={routeProps => (
              <SidebarNav {...routeProps} folders={this.state.folders}/>
            )}
        />
        ))}
            <Route 
            path='/folder/:folderId'
            render={routeProps =>{
              const{ noteId } = routeProps.match.params
              return <MainNav  {...routeProps} notes={this.state.notes}/>
            }}
          />
          </>
    )
  }



  renderMainRoutes(){  
    return(
      <>
          <Route 
            exact 
            path='/'
            render={routeProps => {
              const { folderId } = routeProps.match.params
            return <Sidebar {...routeProps} folders={this.state.folders} notes={this.state.notes}/>
          }}
        />
          <Route 
            exact
            path='/'
            render={routeProps => {
            return <Main {...routeProps} notes={this.state.notes}/>
            }}
          />
          <Route 
            path='/folder/:folderId'
            render={routeProps => {
              const { folderId } = routeProps.match.params
              return <SidebarNav {...routeProps} folders={this.state.folders}/>
            }}
        />
          <Route 
            path='/folder/:folderId'
            render={routeProps =>{
              const{ folderId } = routeProps.match.params
              return <MainNav  {...routeProps} notes={this.state.folders}/>
            }}
          />
          <Route 
            path='/note/:noteId'
            render={routeProps => (
              <SidebarNote {...routeProps} folders={this.state.folders} notes={this.state.notes} />
            )}
        />
          <Route 
            path='/note/:noteId'
            render={routeProps =>{
              const{ noteId } = routeProps.match.params
              return <MainNote  {...routeProps} notes={this.state.notes}/>
            }}
          />
      </>
      )
    };


  
  
  render(){

    return(
      <div className='AppRoutes'>
        {/* <nav className='navRoutes'>{this.renderNavRoutes()}</nav> */}
        <header>
          <Header />
        </header>
        <div className="App">
        <div className='outerContainer'>
        
        <main>{this.renderMainRoutes()}</main>
        </div>
        </div>
      </div>
    )
    
      
  }

}

export default App;
