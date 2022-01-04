import { configureStore } from '@reduxjs/toolkit';

import spaceXData from './slices/spaceXData';

export default configureStore({
  reducer: {
    spaceXData,
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['spaceXData/setSelectedDate'],
      ignoredPaths: ['spaceXData.selectedDate'],
    },
  })),
});
