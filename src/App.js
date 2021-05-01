/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import AddDonation from './containers/AddDonation'
import Profile from './containers/Profile'
import Search from './containers/Search'
import DonationDetails from './containers/DonationDetails'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  ADD_DONATION_ROUTE,
  PROFILE_ROUTE,
  DONATION_DETAILS_ROUTE,
  SEARCH_ROUTE,
} from './router'
import './App.css'
import './fontawsome'

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <Route path={CONTACT_ROUTE} component={Contact} />
          <Route path={ABOUT_ROUTE} component={About} />
          <Route path={PROFILE_ROUTE} component={Profile} />
          <Route path={ADD_DONATION_ROUTE} component={AddDonation} />
          <Route path={DONATION_DETAILS_ROUTE} component={DonationDetails} />
          <Route path={SEARCH_ROUTE} component={Search} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </Fragment>
  )
}

export default App
