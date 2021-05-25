import React from 'react';
import Main from './Components/Main';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Page } from './styles/mainStyles';

function App() {
  return (
    <Provider store={store}>
      <Theme preset={presetGpnDefault}>
        <Page>
          <Main />
        </Page>
      </Theme>
    </Provider>
  );
}

export default App;
