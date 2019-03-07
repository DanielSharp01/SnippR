const main = document.querySelector("main");
const masonry = new Masonry(main);
masonry.elementWidth = 500;

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".sidenav").classList.toggle("show");
});

/*elemClone.querySelector(".add-tag-button").addEventListener("click", e => 
{
    e.stopPropagation();
    if (newTag !== false) newTag.finishEditing();
    
    elemClone.querySelector(".tags").appendChild(newTag);
    newTag.focus();
    document.execCommand('selectAll', false, null);
});*/