var prev = -1;
$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        var images = ["randomSelector/1.jpg","randomSelector/2.jpg","randomSelector/3.jpg","randomSelector/5.jpg"];
        while(randomChildNumber == prev){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);    
        }
        prev = randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr('src',images[randomChildNumber]).show();
    });
});