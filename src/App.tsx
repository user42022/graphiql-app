import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './index.scss';

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </CssBaseline>
    </ErrorBoundary>
  );
}

export default App;
