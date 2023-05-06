fetch("https://jsonplaceholder.typicode.com/photos?_limit=48")
  .then(response => response.json())
  .then(posts => {
        posts.forEach(post => {
                    postsCont.innerHTML += 
                    `<div>
                        <h3>${post.title}</h3>
                        <img src="${post.url}">
                    </div>`
            });
})
  .catch(error => console.error(error));