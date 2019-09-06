/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios 
.get('https://api.github.com/users/dmaack')
  .then(response => {
    console.log(response);
    const newCard = createCard(response.data);
    cards.appendChild(newCard);
  
  })
  .catch(error => {
    console.log('The data was not returned', error);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'crsullivan', 'white-room', 'samwarfield'];
  followersArray.forEach(userData => {
    axios
    .get('https://api.github.com/users/' + userData)
      .then(response => {
        console.log(response);
        const newCard = createCard(response.data);
        cards.appendChild(newCard);
      })
      .catch(error => {
        console.log('The data was not returned' , error);
      })
  })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

const cards = document.querySelector('.cards');

function createCard(githubData) {
  const card = document.createElement('div');
  const userImgUrl = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userRealName = document.createElement('h3');
  const userUserName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const githubUrl = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userRealName.classList.add('name');
  userUserName.classList.add('username');

  userImgUrl.src = githubData.avatar_url;
  userRealName.textContent = githubData.name;
  userUserName.textContent = githubData.login;
  location.textContent = `Location: ${githubData.location}`;
  profile.textContent = `Profile: ${githubUrl}`;
  githubUrl.href = githubData.html_url;
  githubUrl.textContent = githubData.html_url;
  
  followers.textContent =  `Followers: ${githubData.followers}`;
  following.textContent = `Following: ${githubData.following}`;
  bio.textContent = `Bio: ${githubData.bio}`;

  card.appendChild(userImgUrl);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userRealName);
  cardInfo.appendChild(userUserName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(githubUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

 

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// location.textContent = 'Location: ' , gitData;
// profile.textContent = 'Profile: ' , gitData;
// followers.textContent = 'Followers: ' , gitData;
// following.textContent = 'Following: ' , gitData;
// bio.textContent = 'Bio: ' , gitData;