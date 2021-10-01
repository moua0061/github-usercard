

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
axios.get('https://api.github.com/users/moua0061') 
  .then(resp => { 
    //do something if success
    console.log(resp);
    gitHubMaker(resp);  
  })
  .catch(err => {
    //do something if failed
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    https://api.github.com/users/moua0061
    Skip to STEP 3 (line 34).
*/

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
const entryPoint = document.querySelector('.cards');

function gitHubMaker (obj){

  const card = document.createElement('div');
  card.classList.add('card');
  entryPoint.appendChild(card);

  const avatar = document.createElement('img');
  avatar.src = obj.data.avatar_url;
  card.appendChild(avatar);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.data.name;
  cardInfo.appendChild(name);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = obj.data.login;
  cardInfo.appendChild(userName);

  const userLocation = document.createElement('p');
  userLocation.textContent = obj.data.location;
  cardInfo.appendChild(userLocation);

  const userProfile = document.createElement('p');
  userProfile.textContent = 'Profile:';
  cardInfo.appendChild(userProfile);

  const userUrl = document.createElement('a');
  userUrl.href = obj.data.html_url;
  userUrl.textContent = obj.data.html_url;
  userProfile.appendChild(userUrl);

  const userFollowers = document.createElement('p');
  userFollowers.textContent = obj.data.followers;
  cardInfo.appendChild(userFollowers);

  const userFollowing = document.createElement('p');
  userFollowing.textContent = obj.data.following;
  cardInfo.appendChild(userFollowing);

  const userBio = document.createElement('p');
  userBio.textContent = obj.data.bio;
  cardInfo.appendChild(userBio);


  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
