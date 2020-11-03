import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import useWindowEventListener from '@service/hooks/useWindowEventListener';
import { events } from '@app/constants';
import { unSubscribe } from '@app/microFrontend';

const defaultHistory = createBrowserHistory();

interface IAppProps {
  history: History;
}

const App = ({ history }: IAppProps) => {
  const handleExampleMethod = (event: any) => {
    // your passed data here event.detail
  };

  useEffect(() => {
    return () => unSubscribe(events.GET_UPDATED_EXAMPLE_DATA, handleExampleMethod);
  }, []);

  useWindowEventListener(events.GET_UPDATED_EXAMPLE_DATA, handleExampleMethod);

  return (
    <Router history={history || defaultHistory}>
      <>Write your app here. boilerplate service</>
    </Router>
  );
};

export default App;
