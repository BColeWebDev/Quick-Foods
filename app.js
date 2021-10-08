const modal = () => {
    const modal = document.querySelector('#nav')
    const icon = document.querySelector('.fas')
    if (modal.className == "nav modal-close") {
        modal.className = "nav modal-open";
        icon.className = "fas fa-times"
        console.log(icon)
    }
    else {
        modal.className = "nav modal-close";
        icon.className = "fas fa-bars"
        console.log(icon)

    }

}

