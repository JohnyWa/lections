// TODO: Callback hell version

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Get user from server...');
    callback(
      {
        id,
        name: 'Petro'
      }
    );
  }, 1000)
}

function getPosts(userName, callback) {
  setTimeout(() => {
    console.log('Posts request...');
    callback(['Post 1', 'Post 2', 'Post 3'])
  }, 1000)
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log('Comments request for...: ' + post);
    callback(['Comments request for ...: ' + post]);
  }, 1000)
}

const getAllUserData = function(id, callback) {
  return getUser(id, user => {
    getPosts(user.name, post => {
      getComments(post[0], comments => {
        callback({user, post: post[0], comments});
      })
    })
  })
};

// TODO: Promise hell vs Async

function getUserPromise(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Get user from server...');

      resolve({id, name: 'Petro'});
    }, 1000)
  })
}

function getPostsPromise(userName) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Posts request...');

      resolve(['Post 1', 'Post 2', 'Post 3'])
    }, 1000)
  })
}

function getCommentsPromise(post) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Comments request for...: ' + post);
      resolve(['Comments request for ...: ' + post]);
    }, 1000)
  })
}

const getAllUserDataPromise = id => {
  return getUserPromise(id).then(user => {
    return getPostsPromise(user.name).then(posts => {
      return getCommentsPromise(posts[0]).then(comments => {
        return {user, post: posts[0], comments}
      })
    })
  })
};

async function getAllUserDataAsync(id) {
  try {
    const user = await getUserPromise(id);
    const posts = await getPostsPromise(user.name);
    const comments = await getCommentsPromise(posts[0]);

    return {user, post: posts[0], comments};
  } catch (e) {
    throw new Error(e)
  }
}

// TODO: callback
// getAllUserData(1, data => console.log(data));

// TODO: promise
// getAllUserDataPromise(1)
// .then(data => console.log(data))
// .catch(err => console.warn(err));

// TODO: Async && await
// getAllUserDataAsync(1)
//   .then(data => console.log(data))
//   .catch(err => console.warn(err));