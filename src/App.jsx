import RouteController from "./routes"
import Navigation from "./components/nav/Navigation"
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isAuthPath = location.pathname === '/auth/signup' || location.pathname === '/auth/login';

  return (
    <>
      {!isAuthPath && <Navigation />}
      <RouteController />
    </>
  )
}

export default App