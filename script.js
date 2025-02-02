var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight == null;
        } else{
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
        
    });
}

function OpenOutlook(){
    window.location.href ="mailto:mohammad.norman@ui.ac.id";
}

function OpenLinkedIn(){
    window.location.href="https://www.linkedin.com/in/mohammad-norman-gaza-laksono-5979a11a7/";
}

function OpenGithub(){
    window.location.href="https://github.com/Normanthen";
}