window.onscroll = function() {myFunction()};

function myFunction() {
  //console.log(window.scrollY)
  if(1*(window.scrollY/971) < 0.5){
    document.getElementById("header").style.backgroundColor = `rgba(0,0,0, ${1*(window.scrollY/971)})`
    document.getElementById("menu-content").style.visibility = "hidden"
  }else{
    document.getElementById("menu-content").style.visibility = "visible"
}

  //.style.opacity = 1*(window.scrollY/971);
  //971
}