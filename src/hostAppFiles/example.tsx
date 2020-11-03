import React, { useEffect } from 'react';
import useMicroFrontend from './useMicroFrontend';
import mfConfig from './mfConfig';
import useWindowEventListener from './useWindowEventListener';
import mfEvents from './mfEvents';
import dispatchEvent from './createDispachEventToService';

const Example = ({ history }: any) => {
  const id = 'mfServiceName';
  const passedData = {
    history,
  };
  const { isLoaded, mfServiceName } = useMicroFrontend({
    id,
    host: mfConfig.mfServiceName,
  });

  const handleExampleMethod = () => {
    console.log('handleExampleMethod called');
  };

  useEffect(() => {
    if (!mfServiceName) {
      return;
    }

    const { customEvents } = mfServiceName;

    dispatchEvent(customEvents.GET_UPDATED_EXAMPLE_DATA, passedData);
  }, [passedData]);

  useEffect(() => {
    if (!mfServiceName) {
      return;
    }

    const { renderService, unMount, unSubscribe, customEvents } = mfServiceName;

    renderService(id, passedData);

    return () => {
      unSubscribe(customEvents.EXAMPLE_EVENT_NAME, handleExampleMethod);
      unMount(id);
    };
  }, [isLoaded]);

  useWindowEventListener(mfEvents.EXAMPLE_EVENT_NAME, handleExampleMethod);

  return <>{isLoaded && mfServiceName && <main id={id} />}</>;
};

export default Example;
