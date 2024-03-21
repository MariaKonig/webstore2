const teamProfiles = document.getElementById("teamProfiles");
let teamList = [];

const josefBoukdir = {
  name: "Josef Boukdir",
  photoLink:
    "https://media.licdn.com/dms/image/D4D03AQHC81cd0EE8wg/profile-displayphoto-shrink_400_400/0/1708376304077?e=1716422400&v=beta&t=UmDmV7fQfAoMTzLzOg7NaP4v2qLbOy6OR8oKzChiLo0",
  linkedInLink: "https://www.linkedin.com/in/josefboukdir/",
  gitHubLink: "https://github.com/berberapan",
};
teamList.push(josefBoukdir);

const joachimKarlsson = {
  name: "Joachim Karlsson",
  photoLink:
    "https://media.licdn.com/dms/image/D4D03AQEhZS_75NnpSg/profile-displayphoto-shrink_400_400/0/1698692356572?e=1716422400&v=beta&t=N5PbvU4RbF5lRJMeCspoPknFvcwUH9QXgzRy_tWmoeo",
  linkedInLink: "https://www.linkedin.com/in/joachim-karlsson-568183189/",
  gitHubLink: "https://github.com/Jaikem1",
};
teamList.push(joachimKarlsson);

const mariaKönig = {
  name: "Maria König",
  photoLink:
    "https://media.licdn.com/dms/image/D5603AQHn2TaJKfyUxg/profile-displayphoto-shrink_400_400/0/1696448314908?e=1716422400&v=beta&t=EqEae6vIOvhblSUD94pUwR9G5VhR5uCQweXQuxdfN0o",
  linkedInLink: "https://www.linkedin.com/in/maria-k%C3%B6nig-42b2aa197",
  gitHubLink: "https://github.com/MariaKonig",
};
teamList.push(mariaKönig);

const malinPatriksson = {
  name: "Malin Patriksson",
  photoLink:
    "https://media.licdn.com/dms/image/D4D03AQGcQrjEZxmXLg/profile-displayphoto-shrink_400_400/0/1662124623374?e=1716422400&v=beta&t=n9ohQtm2ATP_905g7HnPjHy5tXGhrzXZb2gyjHUgXxk",
  linkedInLink: "https://www.linkedin.com/in/malin-patriksson-279072159/",
  gitHubLink: "https://github.com/MalinPatriksson",
};
teamList.push(malinPatriksson);

const martinSax = {
  name: "Martin Sax",
  photoLink:
    "https://media.licdn.com/dms/image/D4E03AQHnt1V6wkrvag/profile-displayphoto-shrink_200_200/0/1694603412387?e=1716422400&v=beta&t=xluoJ_ID5pjPVsOMo0_LqirzUmY7Yh6spuRz0BeBf88",
  linkedInLink: "https://www.linkedin.com/in/martin-sax-197b80290",
  gitHubLink: "https://github.com/HMSax",
};
teamList.push(martinSax);

teamList.forEach((member) => {
  let teamMember = document.createElement("div");
  teamMember.classList.add("col-lg-auto", "col-md-5", "col-sm-6", "mb-4");
  teamMember.innerHTML = `
                <div class="card h-100 align-items-center">
                    <img class="card-img-top rounded-circle border border-3 border-primary" src="${member.photoLink}" alt="${member.name}">
                    <div class="card-body mx-auto">
                        <h4 class="card-title mx-auto">${member.name}</h4>
                        <a class="btn btn-primary" href="${member.linkedInLink}" target="_blank">Besök LinkedIn</a>
                        <a class="btn btn-primary" href="${member.gitHubLink}" target="_blank">Besök GitHub</a>
                    </div>
                </div>
            `;
  teamProfiles.appendChild(teamMember);
});
