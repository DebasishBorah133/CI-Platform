var viewBtn1 = document.querySelector('.gridImg');
var viewBtn2 = document.querySelector('.listImg');

var li= document.querySelector('.list')
var gd= document.querySelector('.grid')


viewBtn1.addEventListener("click", listToGrid);


viewBtn2.addEventListener("click", gridToList);

function listToGrid() 
{
    // console.log("Hello list");
    viewBtn1.classList.add("cl");
    viewBtn2.classList.remove("cl");

    gd.classList.add('d-none');
    li.classList.remove('d-none')
}

function gridToList() 
{
    // console.log("Hello grid");
    viewBtn2.classList.add("cl");
    viewBtn1.classList.remove("cl");

    li.classList.add("d-none")
    gd.classList.remove("d-none")
}



let x = window.matchMedia("(max-width: 1000px)");
x.addListener(mediaWidthCheck);

function mediaWidthCheck() {
    if (x.matches) {
        console.log("matched");
        listToGrid();
    }

}