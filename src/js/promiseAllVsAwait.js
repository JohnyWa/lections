const delay = ms => {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};

const getPostById = async id => {
  await delay(1000);
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
};

async function getAllPosts() {
  try{
    console.time('Async time');
    const post1 = await getPostById(1);
    const post2 = await getPostById(2);
    const post3 = await getPostById(3);
    console.timeEnd('Async time');

    return [post1, post2, post3];
  } catch (e) {
    throw new Error(e)
  }
}

async function getAllPostsPromiseAll() {
  try{
    console.time('Promise all time');
    const post1 = getPostById(1);
    const post2 = getPostById(2);
    const post3 = getPostById(3);
    const posts = await Promise.all([post1, post2, post3]);
    console.timeEnd('Promise all time');

    return posts;
  } catch (e) {
    throw new Error(e)
  }
}

getAllPosts().then(posts => console.table(posts));
getAllPostsPromiseAll().then(posts => console.table(posts));