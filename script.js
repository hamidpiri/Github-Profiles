const search = document.getElementById("gitTextBox");
const API_URL = "https://api.github.com/users/";
const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getData();
});

const getData = async () => {
  const response = await fetch(API_URL + search.value);
  const jsonResponse = await response.json();
  // console.log(jsonResponse);
  updateCard(jsonResponse);
};

const updateCard = (user) => {
  search.value = "";
  document.getElementsByTagName("h1")[0].innerText = user.login;
  user.bio ? (document.getElementsByTagName("p")[0].innerText = user.bio) : "";
  document.getElementsByTagName("img")[0].src = user.avatar_url;
  document.querySelectorAll(
    "li"
  )[0].innerHTML = `${user.followers} <strong>Followers</strong>`;
};

document.querySelectorAll(
  "li"
)[1].innerHTML = `${user.following} <strong>Following</strong>`;

document.querySelectorAll(
  "li"
)[2].innerHTML = `${user.public_repos} <strong>Repos</strong>`;
