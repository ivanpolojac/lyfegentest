import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import store from 'store';

function TestProvider({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          {children}
        </LocalizationProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default TestProvider;