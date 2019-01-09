import axios from 'axios';
import { logger } from '@dojot/dojot-module-logger';
import Auth from './auth';

const get = urlRequest => new Promise((resolve, reject) => {
  logger.debug(`Will call ${urlRequest}`);
  const token = Auth.retToken();
  const options = {
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
  };
  axios(urlRequest, options)
    .then((ret) => {
      resolve(ret.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const post = (urlRequest, body) => new Promise((resolve, reject) => {
  logger.debug(`Will call ${urlRequest}`);
  const token = Auth.retToken();
  axios({
    method: 'post',
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
    url: urlRequest,
    data: body,
  })
    .then((ret) => {
      resolve(ret);
    })
    .catch((err) => {
      reject(err.toString());
    });
});

const _delete = urlRequest => new Promise((resolve, reject) => {
  logger.debug(`Will call delete ${urlRequest}`);
  const token = Auth.retToken();
  axios({
    method: 'delete',
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
    url: urlRequest,
  })
    .then((ret) => {
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { get, post, _delete };
