import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { defaultLayout } from './components/Layout';
import { publicRoutes } from './routers';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            let Layout = defaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null ){
              Layout = Fragment;
            }
            const Page = route.component;

            return (
              <Route 
                key={i} 
                path={route.path} 
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                } 
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
