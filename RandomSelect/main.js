var picture=[
    "0.jpg",
    "1.jpg",
    "2.jpg"
]
$(document).ready(function() {
    $("input").click(function()
    {
        var number0fListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*number0fListItem);
        $("#title").text($("#choices li").eq(randomChildNumber).text());
        //console.log(("#choices li").eq(randomChildNumber).text());
        $("#Img").attr("src",picture[randomChildNumber]);
    });
    
});