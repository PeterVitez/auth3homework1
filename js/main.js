fetch("./data/classData.json")
  .then((res) => res.json())
  .then((data) => {
    let myData = data;

    let courseinfo = document.getElementsByClassName("profPanelText")[0];
    courseinfo.firstElementChild.innerHTML = myData.coursename;

    courseinfo.innerHTML += myData.coursecode;

    let profname = (document.getElementById(
      "profname"
    ).innerHTML = `Professor - ${myData.profname}`);

    let classtime = document.getElementsByClassName("profPanelText")[0]
      .lastElementChild;
    classtime.innerHTML = `${myData.classtime[0]} - ${myData.classtime[1]}`;

    //  = document.getElementsByClassName("example")[0];
    // list.getElementsByClassName("child")[0].innerHTML = "Milk";
  })
  //This is where the loop to place data goes
  .catch((err) => {
    console.log(err);
  });
