const fetch = require("isomorphic-fetch")

fetch ('http://localhost:3000/posts/1')
.then(response => response.json())
.then(json => console.log(json))