export function setScreenDimensions(hideSideNav) {

    //Adjust movie screen dimensions when toggling sidebar
    let movieScreenHeight = document.getElementById("movie-screen-container");
    if (hideSideNav) {
    //sidenav is being hidden
      movieScreenHeight.setAttribute("style", "height: 50%; top:-7%");
    }else {
    //sidenav is being shown
      movieScreenHeight.setAttribute("style", "height: 42%");
    }

}

