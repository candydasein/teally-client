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
import TastingUpdate from './views/TastingUpdate.js'
import Recommendations from './views/Recommendations.js'
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
      flavors: [],
      tastings: []
    }
  }

  // authenticatedOptions = (
  //   <React.Fragment>
  //     <Link to='/create-tasting'>New Tasting</Link>
  //     <br></br>
  //     <Link to='/recommendations'>Get a Recommendation</Link>
  //     <br></br>
  //     <Link to='/tastings-index'>All My Tastings</Link>
  //     <br></br>
  //     <Link to='/tasting-show'>One Tasting</Link>
  //     <br></br>
  //     <Link to='/tasting-delete/'>Delete a Tasting</Link>
  //     <br></br>
  //     <Link to='/update-tasting/'>Update a Tasting</Link>
  //   </React.Fragment>
  // )

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
    // axios.get(apiUrl + '/tastings')
    // .then(res => {
    //   this.setState({tastings: res.data.tastings }) 
    // })
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
          <AuthenticatedRoute user={user} exact path="/teas" component={TeaIndex} />
          <AuthenticatedRoute user={user} exact path="/recommendations" render={() => (
            <Recommendations user={user} teas={this.state.teas} flavors={this.state.flavors} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          {/* { user ? this.authenticatedOptions : null } */}
        </main>
        <div className="main-data-div">
          <AuthenticatedRoute user={user} exact path='/create-tasting' render={() => (
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
          <AuthenticatedRoute user={user} exact path='/update-tasting/' render={() => (
            <TastingUpdate user={user} flavors={this.state.flavors}
            />
          )} />
        </div>
      </div>
    )
  }
}

export default App
