
// =======================
// GLOBAL SCORE
// =======================

let score = 0;

const scoreValue = document.querySelector("#scoreValue");

function updateScore(){

score++;

scoreValue.innerText = score;

if(score >= 10){

scoreValue.classList.add("gold");

}

}


// like buttons
document.querySelectorAll(".likeBtn").forEach(btn => {

btn.addEventListener("click", updateScore);

});


// =======================
// REAL TIME SEARCH
// =======================

const searchInput = document.querySelector("#searchInput");
const posts = document.querySelectorAll(".post");

searchInput.addEventListener("input", () => {

const value = searchInput.value.toLowerCase();

posts.forEach(post => {

const text = post.innerText.toLowerCase();

post.style.display = text.includes(value) ? "block" : "none";

});

});


// =======================
// TAG CLOUD FILTER
// =======================

document.querySelectorAll(".tag").forEach(tag => {

tag.addEventListener("click", () => {

const tagName = tag.innerText;

posts.forEach(post => {

if(post.dataset.tag === tagName){

post.querySelector(".post-title").innerText =
tagName + " Article";

}

});

});

});


// =======================
// BACK TO TOP
// =======================

const backTop = document.querySelector("#backTop");

window.addEventListener("scroll", () => {

backTop.classList.toggle("hidden", window.scrollY < 200);

});

backTop.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});
