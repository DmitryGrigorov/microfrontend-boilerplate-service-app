import { useEffect } from 'react';

// Event handler contains detail object with data from container app.
export interface IEventHandlerProps extends Event {
  detail?: any;
}

const useWindowEventListener = (
  eventName: string,
  eventHandler: (event: IEventHandlerProps) => void
) => {
  useEffect(() => {
    window.addEventListener(eventName, eventHandler);

    return () => window.removeEventListener(eventName, eventHandler, false);
  }, [eventHandler, eventName]);
};

export default useWindowEventListener;
