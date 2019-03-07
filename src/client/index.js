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

    newTag = document.createElement("div");
    newTag.finishEditing = () =>
    {
        newTag.classList.remove("new");
        newTag.contentEditable = "false";
        let tag = newTag;
        newTag = false;
        tag.addEventListener("click", e => 
        {
            tag.remove();
        })
    }
    newTag.innerHTML = "new tag";
    newTag.classList.add("tag", "new");
    newTag.contentEditable = "true";

    newTag.addEventListener("keydown", e =>
    {
        if (e.which == 13) newTag.finishEditing();
    });

    newTag.addEventListener("blur", e =>
    {
        newTag.finishEditing();
    });
    
    elemClone.querySelector(".tags").appendChild(newTag);
    newTag.focus();
    document.execCommand('selectAll', false, null);
});*/