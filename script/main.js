$(document).ready(function() {
    AOS.init({
        
        
    })
    
    data = JSON.parse(ourTeam);
      
// PERSON 1
    function display() {
            let div =  document.createElement('div');
            div.style.display = "none";
            div.id = "card-expand-content1"
            let text = document.createTextNode("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
            let container = document.getElementById('container');
            let card1 = document.getElementsByClassName('card')[0];
            div.appendChild(text)
            card1.appendChild(div)
    }

    display();

    $("#text1").click(function() {
            let card = document.getElementsByClassName('card')[0];
            $("div.card").not(":eq(0)").toggle('slide',{direction:'right'},300);  
            $(card).toggleClass("trans")
            $(card).toggleClass("card-expand")
            $("#card-expand-content1")
            .css("width", "100%")
            .css("color", "black")
            .css("background-color", "white")
            .toggle('fade', {direction: 'left'}, 400)
            $("#container").toggleClass("container-expand")      
            
           
    });

    $("#text1").click(function() {
        
        $('html, body').animate({
            scrollTop: $("nav").offset().top
        }, 1000);
    });

// PERSON 2
function display2() {
    let div =  document.createElement('div');
    div.style.display = "none";
    div.id = "card-expand-content2"
    let text = document.createTextNode("dominick agjnkj");
    let container = document.getElementById('container');
    let card1 = document.getElementsByClassName('card')[1];
    div.appendChild(text)
    card1.appendChild(div)
}

display2();

$("#text2").click(function() {
    let card = document.getElementsByClassName('card')[1];
    $("div.card").not(":eq(1)").toggle('slide',{direction:'right'},300);  
    $(card).toggleClass("trans")
    $(card).toggleClass("card-expand")
    $("#card-expand-content2")
    .css("width", "100%")
    .css("color", "black")
    .css("background-color", "white")
    .toggle('fade', {direction: 'left'}, 400)
    $("#container").toggleClass("container-expand")      
    
   
});

$("#text2").click(function() {

$('html, body').animate({
    scrollTop: $("nav").offset().top
}, 1000);
});

// PERSON 3
// function display() {
//     div =  document.createElement('div');
//     div.style.display = "none";
//     div.id = "card-expand-content1"
//     text = document.createTextNode("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
//     container = document.getElementById('container');
//     card1 = document.getElementsByClassName('card')[0];
//     div.appendChild(text)
//     card1.appendChild(div)
// }

// display();

// $("#text1").click(function() {
//     card = document.getElementsByClassName('card')[0];
//     $("div.card").not(":eq(0)").toggle('slide',{direction:'right'},300);  
//     $(card).toggleClass("trans")
//     $(card).toggleClass("card-expand")
//     $("#card-expand-content1")
//     .css("width", "100%")
//     .css("color", "black")
//     .css("background-color", "white")
//     .toggle('fade', {direction: 'left'}, 400)
//     $("#container").toggleClass("container-expand")      
    
   
// });

//     $("#text1").click(function() {

//     $('html, body').animate({
//         scrollTop: $("nav").offset().top
//     }, 1000);
// });

// // PERSON 4
// function display() {
//     div =  document.createElement('div');
//     div.style.display = "none";
//     div.id = "card-expand-content1"
//     text = document.createTextNode("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum");
//     container = document.getElementById('container');
//     card1 = document.getElementsByClassName('card')[0];
//     div.appendChild(text)
//     card1.appendChild(div)
// }

// display();

// $("#text1").click(function() {
//     card = document.getElementsByClassName('card')[0];
//     $("div.card").not(":eq(0)").toggle('slide',{direction:'right'},300);  
//     $(card).toggleClass("trans")
//     $(card).toggleClass("card-expand")
//     $("#card-expand-content1")
//     .css("width", "100%")
//     .css("color", "black")
//     .css("background-color", "white")
//     .toggle('fade', {direction: 'left'}, 400)
//     $("#container").toggleClass("container-expand")      
    
   
// });

// $("#text1").click(function() {

// $('html, body').animate({
//     scrollTop: $("nav").offset().top
// }, 1000);
// });
    
});