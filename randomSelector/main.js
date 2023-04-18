var prev = -1;
$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        var images = [
            "https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202109%2Farticle-613031bda0783.jpg/?w=1600&format=webp",
            "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
            "https://cdn.cybassets.com/media/W1siZiIsIjE2MzE3L3Byb2R1Y3RzLzMyMzU4MDY0LzE2MDYzNzI1NzRfZmJmYmUzYmNhZTgzMjNmOGQzNTguanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=f0b7888eaa5e55cc",
            "https://assets.blog.engoo.com/wp-content/uploads/sites/3/2022/12/22090555/pizza_english_vocabulary_toppings_crust.jpg"
        ];
        while(randomChildNumber == prev){
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);    
        }
        prev = randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr('src',images[randomChildNumber]).show();
    });
});