import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';

function App() {
  const [allroutes, setallRoutes] = useState([...publicRoutes]);
  console.log(allroutes);

  useEffect(() => {
    const routes = getRoutes();
    setallRoutes((prevRoutes) => [...prevRoutes, ...routes]);
    //console.log(routes);
  }, []);

  return <Router allroutes={allroutes} />;
}

export default App;