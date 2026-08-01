function startSite(){
document.getElementById("hero").style.display="none"
document.getElementById("site").classList.remove("hidden")
}

function openTab(tab, element){

    document.querySelectorAll(".tab").forEach(t=>{
        t.classList.remove("active");
    });


    document.getElementById(tab).classList.add("active");


    document.querySelectorAll(".navbtn").forEach(btn=>{
        btn.classList.remove("active");
    });


    if(element){
        element.classList.add("active");
    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
function searchStudent(){

let input = document.getElementById("searchInput").value.toLowerCase()
let students = document.querySelectorAll(".student")

students.forEach(student =>{

let name = student.dataset.name.toLowerCase()

if(name.includes(input)){
student.style.display="block"
}
else{
student.style.display="none"
}

})

}

function filterLetter(letter){

let students = document.querySelectorAll(".student")

students.forEach(student =>{

let name = student.dataset.name

if(letter=="all" || name.startsWith(letter)){
student.style.display="block"
}
else{
student.style.display="none"
}

})
}

/* MEDIA VAULT IMAGES LOOP */

document.addEventListener("DOMContentLoaded", function(){

const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeViewer");

document.addEventListener("click", function(e){
  if(e.target.classList.contains("galleryImg")){
    viewer.classList.remove("hidden");
    viewer.classList.add("flex");
    viewerImg.src = e.target.src;
  }
});

closeBtn.onclick = () => {
  viewer.classList.add("hidden");
};

/* MEDIA VAULT IMAGES */

/* IMAGES */

const imageGrid = document.querySelector(".image-grid");

for (let i = 1; i <= 70; i++) {

imageGrid.innerHTML += `
<div class="media">
<img src="Media/img (${i}).jpg" class="galleryImg">
</div>
`;

}
});


document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".student").forEach(student => {

    let nameElement = student.querySelector("h3")

    if(nameElement){
      let name = nameElement.innerText.trim()
      student.setAttribute("data-name", name)
    }

  })

})

function startSite() {
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
    // Scroll to top
    window.scrollTo(0, 0);
}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},3000);


});
function addNote(){

let name =
document.getElementById("noteName").value;


let message =
document.getElementById("noteMessage").value;


if(name=="" || message==""){
alert("Please write your name and message ❤️");
return;
}


let note = {

name:name,
message:message

};


let notes =
JSON.parse(localStorage.getItem("memoryNotes")) || [];


notes.push(note);


localStorage.setItem(
"memoryNotes",
JSON.stringify(notes)
);


displayNotes();


document.getElementById("noteName").value="";
document.getElementById("noteMessage").value="";

}



function displayNotes(){

let box =
document.getElementById("userNotes");


box.innerHTML="";


let notes =
JSON.parse(localStorage.getItem("memoryNotes")) || [];


notes.forEach(note=>{


box.innerHTML += `

<div class="user-note">

${note.message}

<br><br>

<span>
~ ${note.name}
</span>

</div>

`;

});


}


document.addEventListener(
"DOMContentLoaded",
displayNotes
);