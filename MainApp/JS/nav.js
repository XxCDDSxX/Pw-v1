function setPage(option = 0){
    var workarea = document.getElementById("workpage");
    switch(option){
        case 0:
            workarea.setAttribute("src","./Home/index.html");
            break;
        case 1:
            workarea.setAttribute("src","./Inscriptions/index.html");
            break;
        case 2:
            workarea.setAttribute("src","./Assigments/index.html");
            break;
    }
    
}