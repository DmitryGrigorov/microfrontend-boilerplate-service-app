import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { events } from '@app/constants';
import { IEventHandlerProps } from '@service/hooks/useWindowEventListener';

import App from './App';

// Yoy can provide any data to your micro service.
export const renderService = (containerId: string, data: any) => {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  render(<App {...data} />, container);
};

export const unMount = (containerId: string) => {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  unmountComponentAtNode(container);
};

export const subscribe = (eventName: string, eventHandler: (event: IEventHandlerProps) => void) => {
  if (!events[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);

    return;
  }

  window.addEventListener(eventName, eventHandler);
};

export const unSubscribe = (
  eventName: string,
  eventHandler: (event: IEventHandlerProps) => void
) => {
  if (!events[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);

    return;
  }

  window.removeEventListener(eventName, eventHandler, false);
};

export const customEvents = events;
