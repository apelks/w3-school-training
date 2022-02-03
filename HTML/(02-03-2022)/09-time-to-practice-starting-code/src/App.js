import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Layout>
    <Switch>

      <Route path='/' exact>
          <Redirect to="/quotes"/>
      </Route>

      <Route path="/quotes" exact>

        <AllQuotes/>

      </Route>

      <Route path="/quotes/:quoteId">

        <QuoteDetail/>
      </Route>

      <Route path='/new-quote'>

        <NewQuote/>

      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
