import {post, get} from './client';

const ApiRequests = {
  login: (credentials) => {
    return post('user/login', {
      data: credentials,
    });
  },
  register: (credentials) => {
    return post('user/register', {
      data: credentials,
    });
  },
  deleteAccount: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  },
  createAlbum: () => {
    return post('album');
  },
  getAlbumData: (id) => {
    return get(`album/${id}`);
  },
};

export default ApiRequests;
