var sidebar_toggle = window.screen.width <= 600 ? true : false;

window.onload = showMenu();
function showMenu() {
   var menu = document.getElementById("main-sidebar");
   menu.style.display = sidebar_toggle? 'none': 'inline';
   sidebar_toggle = !sidebar_toggle;
}
function refreshSidebar(){
   if(window.screen.width <= 600 && sidebar_toggle === true){
      showMenu();
   }
}