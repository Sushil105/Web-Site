window.onload = myFunction();
function myFunction() {
    var content = `
<div id="main">
      <div id="header">
        <div class="star">
        <a href="index.html">
            <div class="star_text">HAMRO <span class="star_text_span">GEET</span>
            </div>
            <img src="images/logo.png" class="star_img"/>
        </a>
         
    </div>
    <div class="form">
    <form class="formdesign">
        <label><input type="text" placeholder="   Search.." id="search" ></label>
        <label><input type="submit" id="go" value="GO" /></label>
        </form>
     </div>
      </div>
  
        <nav id="navigation">
          <ul>
               <li  class="nav-link don"><a href="index.html"><b>Home</b></li></a>
                  <li class="nav-link"><a href="songs.html"><b>Songs List</b></li></a>
                  <li class="nav-link"><a href="gallery.html"><b>Gallery</b></li></a>
                  <li class="nav-link"><a href="login.html"><b>Login</b></li></a> 
                  <li class="nav-link"><a href="about.html"><b>About</b></li></a> </ul>
        </nav>
        
</div>
`;
function navFunction() {
    alert("hello world");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    document.getElementsByTagName("header")[0].innerHTML = content;

    var currentHref = window.location.href.split('/').pop();
    var total = document.getElementsByClassName("nav-link").length;
    for (let i = 0; i < total; i++) {
        var all = document.getElementsByClassName("nav-link")[i].innerHTML.split("\"")[1];
        if (currentHref === all) {
            document.getElementsByClassName("nav-link")[i].className += " don";
        } else {
            document.getElementsByClassName("nav-link")[i].classList.remove("don");
        }

    }


}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("caption");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    y[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() => {
            $.ajax({
                type: "POST",
                url: $("#popup-form").attr("action"),
                data: $("#popup-form").serialize(),
                success: (data) => {
                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
                }
            });
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

});
