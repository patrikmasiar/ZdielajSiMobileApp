import {post, get, requestDetele} from './client';

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
  deleteAccount: (authToken) => {
    return requestDetele('user', {
      headers: {
        Authorization: authToken,
      },
    });
  },
  createAlbum: () => {
    return post('album');
  },
  getAlbumData: (id) => {
    return get(`album/${id}`);
  },
  addMediaToAlbum: (data, authToken) => {
    return post(`album/${data.albumId}/media`, {
      headers: {
        Authorization: authToken,
      },
      data: {
        mediaId: data.mediaId,
      },
    });
  },
};

export default ApiRequests;
