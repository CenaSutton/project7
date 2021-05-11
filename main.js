let pageHeader = document.getElementById("page-header");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para4 = document.getElementById("para4");
let red = document.getElementById("red");
let mainHeading = document.getElementById("main-heading");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let btn = document.getElementById("btn");
let cardText = document.getElementById("card-text");

mainHeading.textContent = "New DOM Layout"
console.log(pageHeader.classList, pageHeader.className)
pageHeader.className = "bg-success text-white col-sm-12 mt-1"
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
para2.textContent = " The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
// add to array use below
pageHeader.classList.add("class")
// remove from array
pageHeader.classList.remove("class")
// replace item in replace
pageHeader.classList.replace("text-white", "text-dark")

//Create text when button is clicked

btn.addEventListener("click", () => {
  para4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
})

//Change the color of each box
red.classList.replace("bg-white", "bg-danger")
blue.classList.replace("bg-white", "bg-primary")
yellow.classList.replace("bg-white", "bg-warning")
green.classList.replace("bg-white", "bg-success")
black.classList.replace("bg-white", "bg-dark")