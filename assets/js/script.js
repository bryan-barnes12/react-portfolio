const modalLabel = $("#ModalLabel");
const modalDesc = $("#projDesc");
const modalDUrl = $("#projDeploy");
const modalRUrl = $("#projRepo");
const projBtn = $(".btn-secondary");

const projContent = {
  myTeam: {
    projName: "myTeam",
    description:
      "A full-stack web application designed to streamline the management of athletic teams and organizations.",
    dUrl: "https://abc-myteam.herokuapp.com/",
    rUrl: "https://github.com/BTDubbzzz/athletics-admin",
  },
  techBlog: {
    projName: "Tech Blog Site",
    description:
      "In this project I was tasked with creating a full-stack tech blog-style application.",
    dUrl: "https://evening-inlet-67692.herokuapp.com/login/",
    rUrl: "https://github.com/bryan-barnes12/tech-blog",
  },
  jeopardy: {
    projName: "JEOPARDY",
    description:
      "Using the JService and Dictionary.com APIs my team was successful in creating a user-friendly and responsive version of the popular game show Jeopardy.",
    dUrl: "https://bryan-barnes12.github.io/jeopardy-game/",
    rUrl: "https://github.com/bryan-barnes12/jeopardy-game.git",
  },
  weather: {
    projName: "real-time weather",
    description:
      "This app was created written in JavaScript and uses the OpenWeather API to provide weather data.",
    dUrl: "https://bryan-barnes12.github.io/real-time-weather/",
    rUrl: "https://github.com/bryan-barnes12/real-time-weather.git",
  },
  password: {
    projName: "strong password generator",
    description:
      "My password generator produces a random strong password based on user preferences.",
    dUrl: "https://bryan-barnes12.github.io/strong-password-generator/",
    rUrl: "https://github.com/bryan-barnes12/strong-password-generator.git",
  },
};

function clearProjModal() {
  modalDUrl.empty();
  modalRUrl.empty();
}

function populateModal(projId) {
  clearProjModal();
  let obj = projContent[projId];
  modalLabel.text(obj.projName);
  modalDesc.text(obj.description);
  modalDUrl.append(`<a href="${obj.dUrl}" target="_blank">view deployment</a>`);
  modalRUrl.append(`<a href="${obj.rUrl}" target="_blank">view repo</a>`);
}

projBtn.on("click", function (event) {
  populateModal(event.target.id);
});

// async function getRepos() {
//   const repoData = await fetch(
//     "https://api.github.com/users/bryan-barnes12/repos"
//   );
//   const repoJson = await repoData.json();
//   const repoObjs = await repoJson.map((el) => {
//     return {
//       name: el.name,
//       link: el.html_url,
//       lastUpdate: el.updated_at,
//     };
//   });

//   console.log(repoObjs);
// }

// getRepos();
