import React from 'react';
import {Header} from './layout/Header'
import {Footer} from './layout/Foter'
import {Main}   from './layout/Main';

const App: React.FunctionComponent = () => {
  return (
      <>
          <Header />
          <Main />
          <Footer />
      </>
  );
};

export default App;