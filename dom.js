// console.log(document);

// console.log(document.getElementsByClassName("howdyheader"));
// console.log(document.getElementById("firstHeader").innerText);

// const byID = document.querySelector("#lorem").innerText
// const byClass = document.querySelector("#lorem").innerText
// console.log(byID);
// console.log(byClass);

//grab the container first
const studentContainer = document.querySelector(".students");
// make your element
const studentDiv = document.createElement("div");
const dustin = document.createElement("p");
const kim = document.createElement("p");
dustin.innerText = "Dustin";
kim.innerText = "Kim";

//put the element in the container
studentDiv.append(dustin, kim);
studentContainer.append(studentDiv);
