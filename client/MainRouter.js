import React from 'react'
import { Switch, Route } from "react-router-dom";
import JobDetail from './pages/JobDetail';
import Jobs from './pages/Jobs'
import Signin from './pages/Signin'

const MainRouter = () => {
  return (<>
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/joblist" component={Jobs} />
      <Route exact path="/jobdetail/:id" component={JobDetail} />
    </Switch>
  </>)
}

export default MainRouter
