import React from 'react';
import AppDrawer from './Components/AppDrawer';
import AppHeader from './Components/AppHeader';

function SubApp() {
  
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      {/* <div style={{ height: "calc(100% - 50px)" }}>
        {appLoading ? <Spinner /> : <AppLayout />}
      </div> */}
      <AppDrawer />
    </div>
  );

}

export default SubApp;
