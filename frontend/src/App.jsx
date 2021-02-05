import {React, lazy, Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/global.css';

const Routes = lazy(() => import('./components/Routes/routes'))
const Footer = lazy(() => import('./components/Footer/index'))

// Estou renderizando esse trecho...
function App() {
  return (
    <>

        <BrowserRouter>
          <Suspense fallback={ <p>Carregando...</p> }>
            <Routes />
          </Suspense>
            
        </BrowserRouter>
        <Suspense fallback={ <p>Carregando...</p> }>
            <Footer />
        </Suspense>

    </>
  );
}

export default App;
