
function getposts(){
    axios.get('https://tarmeezacademy.com/api/v1/posts?limit=50')
  .then(function (response) {
    let posts=response.data.data;
    console.log(posts);
    posts.forEach(element => {
        document.querySelector('.posts').innerHTML+=`
        <div class="post">
        <div class="card shadow mt-3">
            <div class="card-header">
              <img src="${element.author.profile_image}" class="rounded-circle border border-2" style="width: 40px;height: 40px;">
              <b class="d-inline">@${element.author.username}</b>
            </div>
            <div class="card-body">
              <img src="${element.image}" class=" w-100">
              <h6 class="mt-1 text-black-50">${element.created_at}</h6>
              <h5>${element.title}</h5>
              <p>${element.body}</p>
              <hr>
              <div>
                <span>
                    <i class="bi bi-pen"></i> (${element.comments_count}) comments
                </span>
              </div>
            </div>
          </div>
    </div>
        
        `
    });
  })

}

getposts();

