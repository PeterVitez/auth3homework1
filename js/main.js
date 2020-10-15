fetch("./data/classData.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    function handleDataSet(data) {
      let myData = JSON.parse(data),
        profSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

      for (let user in myData) {
        let currentUser = userTemplate.cloneNode(true),
          currentUserText = currentUser.querySelector(".user").children;

        currentUserText[1].textContent = myData[user].name;
        currentUserText[2].textContent = myData[user].role;
        currentUserText[3].textContent = myData[user].nickname;

        profSection.appendChild(currentUser);
      }
    }
    //This is where the loop to place data goes
  })
  .catch((err) => {
    console.log(err);
  });
