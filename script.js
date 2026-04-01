const videos = [
  {title:"Wagyu Steak", cat:"food", id:"dQw4w9WgXcQ"},
  {title:"Tech Review", cat:"tech", id:"3JZ_D3ELwOQ"},
  {title:"Gaming Setup", cat:"gaming", id:"RgKAFK5djSk"},
  {title:"Music Video", cat:"music", id:"tgbNymZ7vqY"},
  {title:"Short Clip", cat:"shorts", id:"e-ORhEE9VVg"},
  {title:"Laptop Review", cat:"tech", id:"kJQP7kiw5Fk"},
  {title:"PUBG Gameplay", cat:"gaming", id:"M7lc1UVf-VE"},
  {title:"Song Remix", cat:"music", id:"Zi_XLOBDo_Y"}
];

const container = document.getElementById("videos");

function render(data){
  container.innerHTML = "";
  data.forEach(v => {
    container.innerHTML += `
      <div class="card" onclick="play('${v.id}','${v.title}')">
        <img src="https://img.youtube.com/vi/${v.id}/0.jpg">
        <h4>${v.title}</h4>
        <div class="meta">1M views • 2 days ago</div>
      </div>
    `;
  });
}

function play(id,title){
  document.getElementById("modal").style.display="block";
  document.getElementById("player").src=`https://www.youtube.com/embed/${id}`;
  document.getElementById("title").innerText=title;
}

function closeVideo(){
  document.getElementById("modal").style.display="none";
  document.getElementById("player").src="";
}

function filter(cat){
  if(cat==="all") return render(videos);
  render(videos.filter(v=>v.cat===cat));
}

/* SEARCH */
document.getElementById("search").addEventListener("input", e=>{
  const val = e.target.value.toLowerCase();
  render(videos.filter(v=>v.title.toLowerCase().includes(val)));
});

render(videos);