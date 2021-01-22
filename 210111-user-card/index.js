const searchForm = document.getElementById("search-form");
const username = document.getElementById("username");
const userCard  = document.getElementById("user-card");

loadEventListener();

//Load all event listeners
function loadEventListener() {
    searchForm.addEventListener("submit", function(e){
        e.preventDefault();
        getUserInfo();
    });
}

//Display user info
function getUserInfo() {
    const url = "https://api.github.com/users/" + username.value;
    //Fetch user info using username
    const fetchGithubInfo = async() => {
        //Clear user card
        userCard.innerHTML = null;
        //Get info from github api
        var info = await fetch(url).then(response => response.json());
        if(info.message === "Not Found") {
            info = null;
        }
        //Display the info
        displayUserCard(info, username.value);
        //Clear input field
        username.value = ""
    }
    fetchGithubInfo();
}

function displayUserCard(info, name) {
    if(info === null) {
        alert("There is no such username on GitHub!");
        userCard.innerHTML = `
        <p>[${name}] is not an username on GitHub!</p>
        `
    } else {
        //Change null values to "not available"
        for(var key in info) {
            if(info[key] === null) {
                //Change null name to username
                if(key == "name") {
                    info[key] = info.login;
                } else {
                    info[key] = "not available";
                }
            }
        }
        userCard.innerHTML = `
        <div class="row">
            <div class="col s12 m3">
                <div class="card-image">
                    <img src="${info.avatar_url}">
                </div>
            </div>
            <div class="col s12 m9">
                <h5 class="data-title teal-text">
                    ${info.name}
                </h5>
                <p class="data-text">
                    <b>Email:</b> ${info.email}</p>
                <p class="data-text">
                    <b>Company:</b> ${info.company}
                </p>
                <div class="col s3 card-panel hoverable teal-text valign center">
                    Repos<br>${info.public_repos}
                </div>
                <div class="col s1"></div>
                <div class="col s3 card-panel hoverable teal-text valign center">
                    Followers<br>${info.followers}
                </div>
                <div class="col s1"></div>
                <div class="col s3 card-panel hoverable teal-text valign center">
                    Following<br>${info.following}
                </div>
                <div class="col s6 offset-s3">
                    <a class="btn black" href="${info.html_url}" target="_blank">
                        View ${info.name}'s profile</a>
                </div>
            </div>
        </div>
        `;
    }
}
