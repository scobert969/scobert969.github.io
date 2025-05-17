$(document).ready(setup);

function setup() {
    $(".idk").append($("<p>").text("stayc girls it's going down"));
    
    const ob = {
        x: 3,
        y: 4,
        z: {
            a: null,
        }
    };

    const valentines = new Date();
    const day = valentines.getDay();
    console.log(ob.x + ob.y);
    
    if (day === 0 ) {
        $("#rv").text("Red Velvet - Yeri");
    }
    else if (day === 1 ) {
        $("#rv").text("Red Velvet - Wendy");
    }
    else if (day === 2 ) {
        $("#rv").text("Red Velvet - Irene");
    }
    else if (day === 3 ) {
        $("#rv").text("Red Velvet - Joy");
    }
    else if (day === 4 ) {
        $("#rv").text("Red Velvet - Seulgi");
    }
    else if (day === 5 ) {
        $("#rv").text("Red Velvet - Irene");
    }
    else if (day === 6 ) {
        $("#rv").text("Red Velvet - Yeri");
    }
    $("#oldest").click(function () {
        $("#e").toggleClass("toggled");
    });
    
    $("#ow").click(function() {
        console.log("winston clicked");
        if ($(this).attr("src") === "images/winston.webp") {
            $(this).attr("src", "images/juno.webp");
            $(this).css("top", "-355px");
            $(this).css("scale", "40%");
            $(this).attr("title", "Hi! I'm Juno!");
        }
        else if ($(this).attr("src") === "images/juno.webp") {
            $(this).attr("src", "images/winston.webp");
            $(this).css("top", "-270px");
            $(this).css("scale", "50%");
            $(this).attr("title", "winton");
        }
    });

    
}

