// this below needs to depend on environment...
// honestly probably better to put this in ENV variables at build time maybe?
export const API_WS_ROOT = 'ws://localhost:3001/cable';
// export const API_WS_ROOT = 'ws://localhost:3001/cable';
// Might need to be 3001?? Would be different in production since it's all running on the same server.
// export const HEADERS = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };