import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;