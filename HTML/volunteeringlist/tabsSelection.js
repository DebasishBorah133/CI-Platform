var tab1 = document.querySelector(".tab1");
var tab2 = document.querySelector(".tab2");
var tab3 = document.querySelector(".tab3");


tab1.addEventListener("click", function()
{
    tab1.classList.add('activeTab');
    tab2.classList.remove('activeTab');
    tab3.classList.remove('activeTab');
    // console.log("Hello")
});


tab2.addEventListener("click", function()
{
    tab2.classList.add('activeTab');
    tab1.classList.remove('activeTab');
    tab3.classList.remove('activeTab');
    // console.log("Hello")
});

tab3.addEventListener("click", function()
{
    tab3.classList.add('activeTab');
    tab1.classList.remove('activeTab');
    tab2.classList.remove('activeTab');
    console.log("Hello");
});

