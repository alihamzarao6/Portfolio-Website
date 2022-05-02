console.log("Script Running ...");

document.querySelector(".close").style.display = 'none';
document.querySelector(".hamBurger").addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle("sidebarGo");

    if (document.querySelector('.sidebar').classList.contains("sidebarGo")) {
        // setTimeout(() => {
        // }, 500);
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.ham').style.display = 'inline';            
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.close').style.display = 'inline';            
        }, 500);
    }
});
