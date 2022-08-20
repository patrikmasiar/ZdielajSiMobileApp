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
  getAlbumData: (id) => {
    return get(`album/${id}`);
  },
};

export default ApiRequests;
