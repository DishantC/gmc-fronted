import API_ENDPOINT from '../config/api';
import handleError from './error';
import { store } from '../../App';

// Get method
const get = (url, options = {}) => {
  return new Promise(async (resolve, reject) => {
    let baseURL = API_ENDPOINT + url;

    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      if (store.getState().auth.isUser) {
        headers.Authorization = `Bearer ${store.getState().auth.token}`;
      }
      let response = await fetch(baseURL, {
        ...options,
        method: 'GET',
        headers,
      });
      let result = await response.json();
      if (response.ok) {
        resolve(result);
        if (result.message) {
          //showtoast(result.error )
          // handleError(result)
        }
      } else {
        reject(result);
        handleError(result.error);
      }
    } catch (error) {
      reject(error);
      handleError(error);
    }
  });
};

// Post method
const post = (url, data, method = 'POST') => {
  return new Promise(async (resolve, reject) => {
    let baseURL = API_ENDPOINT + url;
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      if (store.getState().auth.isUser) {
        headers.Authorization = `Bearer ${store.getState().auth.token}`;
      }
      const response = await fetch(baseURL, {
        method: method,
        headers,
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        resolve(result);

        if (response.status !== 200) {
          handleError(result.error);
        }
      } else {
        reject(result);
        handleError(result.error);
      }
    } catch (error) {
      reject(error);
      handleError(error);
    }
  });
};

// Put method
const put = (url, data, method = 'PUT') => {
  return new Promise(async (resolve, reject) => {
    let baseURL = API_ENDPOINT + url;
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      if (store.getState().auth.isUser) {
        headers.Authorization = `Bearer ${store.getState().auth.token}`;
      }
      const response = await fetch(baseURL, {
        method: method,
        headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        resolve(result);

        if (result.message && result.statusCode !== 200) {
          handleError(result.error);
        }
      } else {
        reject(result);
        handleError(result.error);
      }
    } catch (error) {
      reject(error);
      handleError(error);
    }
  });
};

// Delete method
const Delete = (url, data = {}, method = 'DELETE') => {
  return new Promise(async (resolve, reject) => {
    let baseURL = API_ENDPOINT + url;
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      if (store.getState().auth.isUser) {
        headers.Authorization = `Bearer ${store.getState().auth.token}`;
      }
      const response = await fetch(baseURL, {
        method,
        headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        resolve(result);

        if (result.message && result.statusCode !== 200) {
          handleError(result.error);
        }
      } else {
        reject(result);
        handleError(result.error);
      }
    } catch (error) {
      reject(error);
      handleError(error);
    }
  });
};

export default {
  get,
  post,
  put,
  Delete,
};
