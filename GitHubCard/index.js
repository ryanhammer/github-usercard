/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get("https://api.github.com/users/ryanhammer")

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
.then( (res) => {
    console.log(res);
})
.catch( (err) => {
    console.log(err);
})
.finally( () => {
    console.log("done");
})
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj) {
    // instantiating the elements
    const card = document.createElement("div");
    const userImg = document.createElement("img");
    const cardInfo = document.createElement("div");
    const name = document.createElement("h3");
    const username = document.createElement("p");
    const location = document.createElement("p");
    const profile = document.createElement("p");
    const address = document.createElement("a");
    const followers = document.createElement("p");
    const following = document.createElement("p");
    const bio = document.createElement("p");

    // adding class names, attributes, and text
    card.classList.add("card");
    userImg.src = obj.data.avatar_url;
    cardInfo.classList.add("card-info");
    name.classList.add("name");
    name.textContent = obj.data.name;
    username.classList.add("username");
    username.textContent = obj.data.login;
    location.textContent = obj.data.location;
    profile.textContent = "Profile:";
    address.href = obj.data.html_url;
    address.textContent = obj.data.html_url;
    followers.textContent = `Followers: ${obj.data.followers}`;
    following.textContent = `Following: ${obj.data.following}`;
    bio.textContent = obj.data.bio;

    // creating the element hierarchy
    card.appendChild(userImg);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(username);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(address);

    
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
