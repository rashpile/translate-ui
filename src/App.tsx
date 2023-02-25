import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Main from './components/Main';
import ConfigProvider from './store/ConfigProvider';

function App(this: any) {

  return (
    <ConfigProvider>
    <Main/>    
    </ConfigProvider>
  );
}

export default App;