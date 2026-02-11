let icons = document.getElementsByClassName("favorite-icon");

for(let i = 0; i < icons.length; i++){
    icons[i].addEventListener('click', function(){
        if(this.classList.contains("filled")){
            this.classList.remove("filled");
            this.innerHTML = "&#9825;"
        } else {
            this.classList.add("filled");
            this.innerHTML ="&#10084"
        }
    })
}