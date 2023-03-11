window.onscroll = function() {scrollObserver()};

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
    }else{
      document.getElementById("body1").scrollIntoView({behavior: 'smooth'}, true);
    }
    currentView = !currentView
  }
)