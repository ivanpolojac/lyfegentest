import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Home from 'container/Pages/Home';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  );
}

export default Routes;
