import React from 'react';
import Root from './Src/setup';
import 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications';

const App = () => {
  return (
    <ToastProvider>
      <Root />
    </ToastProvider>
  );
};
export default App;