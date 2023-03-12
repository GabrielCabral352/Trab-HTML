window.onscroll = function() {scrollObserver()};



var x = document.getElementById("dog_bark");

function playAudio() {
  x.play();
}

function scrollObserver() {
  //var w = window.innerWidth;
  //var h = window.innerHeight;
  if(window.innerHeight/window.scrollY < 2) {
    document.getElementById("main_video").classList.add("fade_tag_video");
    document.getElementById("main_video").classList.remove("fade_out_tag_video");
  }else{
    
    document.getElementById("main_video").classList.add("fade_out_tag_video");
    document.getElementById("main_video").classList.remove("fade_tag_video");
  }

  //.style.opacity = 1*(window.scrollY/971);
  //971
}

let currentView = 1


document.getElementById("home_redrirect").addEventListener(
  "click", ()=>{
    
    if(document.getElementById("buttonArea").classList.contains("go_rotate")){
      console.log(1)
      document.getElementById("buttonArea").classList.toggle("go_rotate");
      document.getElementById("buttonArea").classList.toggle("back_rotate");
      document.getElementById("buttonArea").style.top = "90vh"
      currentView = !currentView
    }
    
  }
  
)
document.getElementById("buttonArea").addEventListener(
  "click", ()=>{
    document.getElementById("buttonArea").classList.toggle("go_rotate");
    document.getElementById("buttonArea").classList.toggle("back_rotate");
    if(currentView){
      document.getElementById("body2").scrollIntoView({behavior: 'smooth'}, true);
      document.getElementById("buttonArea").style.top = "calc(200vh - 60px)"
      document.getElementById("header").style.visibility = "hidden"
      
    }else{
      document.getElementById("body1").scrollIntoView({behavior: 'smooth'}, true);
      document.getElementById("buttonArea").style.top = "calc(100vh - 60px)"
      document.getElementById("header").style.visibility = "visible"
    }
    
    currentView = !currentView
  }
)