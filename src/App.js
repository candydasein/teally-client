import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import TeaIndex from './views/TeaIndex.js'
import TastingCreate from './views/TastingCreate.js'
import TastingsIndex from './views/TastingsIndex.js'
import TastingShow from './views/TastingShow.js'
import TastingDelete from './views/TastingDelete.js'
import axios from 'axios'
import apiUrl from './apiConfig.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      teas: [],
      flavors: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  componentDidMount () {
    axios.get(apiUrl + '/teas')
      .then(res => {
        this.setState({teas: res.data.teas }) 
      })
    axios.get(apiUrl + '/flavors')
      .then(res => {
        this.setState({flavors: res.data.flavors }) 
      })
  }

  render () {
    const { flashMessage, flashType, user } = this.state
    return (
      <div>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <Route exact path="/teas" component={TeaIndex} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>
        <div>
          <Route user={user} exact path='/create-tasting' render={() => (
            <TastingCreate user={user} teas={this.state.teas} flavors={this.state.flavors}
            />
          )} />
          <AuthenticatedRoute user={user} exact path='/tastings-index' render={() => (
            <TastingsIndex user={user} teas={this.state.teas} flavors={this.state.flavors}
            />
          )} />
          <AuthenticatedRoute user={user} exact path='/tasting-show' render={() => (
            <TastingShow user={user} teas={this.state.teas} flavors={this.state.flavors}
            />
          )} />
          <AuthenticatedRoute user={user} exact path='/tasting-delete' render={() => (
            <TastingDelete user={user} teas={this.state.teas} flavors={this.state.flavors}
            />
          )} />
          
        </div>
      </div>
    )
  }
}

export default App
