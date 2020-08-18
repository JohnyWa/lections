import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000';

// GET
const getAllPosts = () => {
  return fetch('http://localhost:9000/posts')
    .then(response => response.json())
    .catch(console.warn)
};

const getAllPostsAxios = () => {
  return axios.get('/posts')
    .then(resp => resp.data)
    .catch(console.warn)
};

// GET single post
const getPost = postId => {
  return fetch(`http://localhost:9000/posts/${postId}`)
    .then(response => response.json())
    .catch(console.warn)
};

// POST
const addPost = (title, desc) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({title, desc})
  };

  return fetch(`http://localhost:9000/posts`, option)
    .then(response => response.json())
    .catch(console.warn)
};

const addPostAxios = (title, desc) => axios({
  method: 'post',
  url: '/posts',
  data: {
    title,
    desc
  }
});

// DELETE

const deletePost = postId => {
  const option = {
    method: 'DELETE'
  };

  return fetch(`http://localhost:9000/posts/${postId}`, option)
    .then(response => response.json())
    .catch(console.warn)
};

// PUT

const putPostChanges = (postId, postData) => {
  const option = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  return fetch(`http://localhost:9000/posts/${postId}`, option)
    .then(response => response.json())
    .catch(console.warn)
};

// PATCH
const patchPostChanges = (postId, postData) => {
  const option = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  return fetch(`http://localhost:9000/posts/${postId}`, option)
    .then(response => response.json())
    .catch(console.warn)
};

// getAllPosts().then(console.table);
// getAllPostsAxios().then(console.table);
// getPost(3).then(console.log);
// addPost('Post fromFetch', 'Method POST add post').then(console.log);
// addPostAxios('Post fromFetch', 'Method POST add post').then(console.log);
// deletePost(5).then(console.log);
// putPostChanges(3, {title: 'React Native'}).then(console.log);
// patchPostChanges(3, {title: 'React Native'}).then(console.log);