$(".sky").click(
    function(){
       var sky = $(this).css("background-image");
       console.log(sky);
       $("#main").css("background-image",sky);
    }
);