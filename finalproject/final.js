$(".sky").click(
    function(){
       var sky = $(this).css("background-image");
       console.log(sky);
       $("#main").css("background-image",sky);
    }
);

$(".helicopter").click(
    function(){
       var fly = $(this).css("background-image");
       console.log(fly);
       $("#yellow").css("background-image",fly);
    }
);

