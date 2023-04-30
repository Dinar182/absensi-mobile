import axios from 'axios';
import { SessionManager } from './SessionManager';
import { textApp } from './GlobalVar';

const urlBase = 'https://absensi.mkopsrv1.com/';

const Api = axios.create({
  baseURL: urlBase,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
});

Api.interceptors.request.use(
  async (request) => {
    console.log(request, 'Cek Request');
    const session = SessionManager.GetAsObject(textApp.session);
    if (session != null) {
      request.headers['token'] = session.token;
    }

    console.log('header', request.headers);
    if (request.data) {
      console.log('request ', JSON.stringify(request.data));
    } else {
      console.log('request no data');
    }
    return request;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  async (response) => {
    console.log('response', response.data);
    return response;
  },
  (error) => {
    console.log('error message api interceptors ' + error.response);
    let result = {
      status: '400',
      message: `Error : ${JSON.stringify(error.response)}`,
    };
    console.log(error);
    if (error === 'Error: Network Error') {
      result = {
        status: '400',
        message: 'Error : Cek Koneksi Anda.',
      };
    } else if (error.response.status) {
      switch (error.response.status) {
        case 401:
          result = {
            status: 'E',
            message: 'Error : Not Login or Token Expired.',
          };
          break;
        default:
          result = { status: 'E', message: 'Whoops, Something Bad happen. :)' };
          break;
      }
    }

    return Promise.reject(result);
  }
);

export { Api };
