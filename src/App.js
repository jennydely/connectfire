import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import StartPage from './Pages/StartPage'
import SettingsPage from './Pages/SettingsPage'
import LoginPage from './Pages/LoginPage'
import About from './Pages/About'

import Videos from './Pages/Videos'
import Tanzlichter from './Pages/Videos/Tanzlichter'
import Fächer from './Pages/Videos/Fächer'
import Hulahoop from './Pages/Videos/Hulahoop'
import Poi from './Pages/Videos/Poi'
import Seil from './Pages/Videos/Seil'
import Stab from './Pages/Videos/Stab'
import Allgemein from './Pages/Videos/Allgemein'
import Einsteiger from './Pages/Videos/Einsteiger'
import Shows from './Pages/Videos/Shows'

import Dokumente from './Pages/Dokumente'

import Tipps from './Pages/Tipps'

import Shops from './Pages/Shops'

import Artists from './Pages/Artists'

import Kontakt from './Pages/Kontakt'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/videos/tanzlichter">
            <Tanzlichter />
          </Route>
          <Route path="/videos/fächer">
            <Fächer />
          </Route>
          <Route path="/videos/hulahoop">
            <Hulahoop />
          </Route>
          <Route path="/videos/poi">
            <Poi />
          </Route>
          <Route path="/videos/seil">
            <Seil />
          </Route>
          <Route path="/videos/stab">
            <Stab />
          </Route>
          <Route path="/videos/allgemein">
            <Allgemein />
          </Route>
          <Route path="/videos/einsteiger">
            <Einsteiger />
          </Route>
          <Route path="/videos/shows">
            <Shows />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>

          <Route path="/dokumente">
            <Dokumente />
          </Route>

          <Route path="/tipps">
            <Tipps />
          </Route>

          <Route path="/shops">
            <Shops />
          </Route>

          <Route path="/artists">
            <Artists />
          </Route>

          <Route path="/kontakt">
            <Kontakt />
          </Route>

          <Route path="/">
            <Route path="*"><Redirect to="/" /></Route>
            <StartPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
