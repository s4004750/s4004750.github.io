const myHeading = document.querySelectorAll("p");
console.log(myHeading);
//console.log(myHeading.textContent);
//myHeading.textContent = "new paragraph";
//myHeading.style.backgroundColor = "hotpink";

//for (let i =0; i<3; i++)
//{
    //myheading[i].textContent = "new" + i;
    //myHeading[i].style.backgroundColor="hotpink";
//}

// myHeading.forEach(changeMe);

// function changeMe(item) {
// //item.style.backgroundColor = "coral";
// item.classList.add("purple-box");
// }

const myImage = document.querySelector("#my-image");
console.log(myImage);
myImage.classList.add("round");

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);

function toggleMe()
{
    const myImage = document.querySelector("#my-image");
    // console.log(myImage);
    console.log(myImage.dataset.catname);
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic(){
    const myPara = document.querySelectorAll("p");
    myPara.forEach(displayTopic);
    function displayTopic(item){   
        if(item.dataset.topic==="immersive") {
        item.classList.add("purple-box");
    } else if(item.dataset.topic==="resilient"){
            item.classList.add("purple-box");
        }
    else if(item.dataset.topic==="interactive"){
        item.classList.add("purple-box");
    }
    }
}

const myTitle = document.querySelector("h1");
myTitle.textContent = "i am a new heading!";
let course = "0ART013"
myTitle.innerHTML = `i am am a <span class="coral-box">new ${myImage.dataset.catname}</span>`

myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound() {
    myImage.classList.add("round");
}

function makeItSquare() {
    myImage.classList.remove("round");
}