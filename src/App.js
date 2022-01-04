import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Routes from 'container/Routes';

import store from 'store/index.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <Routes />
        </LocalizationProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
