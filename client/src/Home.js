import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Consumer from './Consumer';
  import Producer from './Producer';

export default function Home() {
    return (
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/consumer">View Events</Link>
          </li>
          <li>
            <Link to="/producer">Add Event</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/consumer">
            <Consumer />
          </Route>
          <Route path="/producer">
            <Producer />
          </Route>
        </Switch>
      </div>
    </Router>
    )


}
