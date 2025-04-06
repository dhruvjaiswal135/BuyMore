import { useEffect, useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_info } from './store/reducers/authReducer';

function App() {

  const dispatch = useDispatch()
  const {token} = useSelector(state=>state.auth)
  const [allroutes, setallRoutes] = useState([...publicRoutes]);
  console.log(allroutes);

  useEffect(() => {
    const routes = getRoutes();
    setallRoutes([...allroutes,routes]);
    //console.log(routes);
  }, []);

  useEffect(()=>{
    if (token) {
        dispatch(get_user_info())
    }
  },[token])

  return <Router allroutes={allroutes} />;
}

export default App;