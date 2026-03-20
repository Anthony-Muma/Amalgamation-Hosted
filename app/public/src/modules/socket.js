// io comes from index.html script tag

/** @type {import("socket.io-client").Socket} */
export const socket = io();
// setInterval(() => {}, 500); // prevent tab throttling

navigator.locks.request('socket_active', { mode: 'shared' }, () => {
  return new Promise(() => {});
});
