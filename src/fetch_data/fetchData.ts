import fetch from 'node-fetch';

export const fetchPosts = (callback) => {
  console.log("fetchPosts...");
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(posts => {
      //console.log(posts);
      callback(posts);
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
};
