// You can provide any data to your service.
const dispatchEvent = (eventName: string, data?: any) =>
  window.dispatchEvent(new CustomEvent(eventName, { detail: data }));

export default dispatchEvent;
