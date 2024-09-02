var posts=["2024/09/02/hello-world/","2024/09/02/java面经/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };