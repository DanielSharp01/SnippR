const main = document.querySelector("main");
const packery = new Packery(main,
{
    itemSelector: '.element',
    gutter: 10
});

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".sidenav").classList.toggle("show");
});

const eventsForElement = elem =>
{
    elem.querySelector(".delete-button").addEventListener("click", e => 
    {
        e.stopPropagation();
        elem.remove();
        packery.layout();
    });

    elem.addEventListener("click", e =>
    {
        e.preventDefault();
        if (elem.classList.contains("snippet")) openDialogSnippet(elem);
        else if (elem.classList.contains("tag")) openDialogTag(elem);
    })
};

document.querySelectorAll(".element").forEach(eventsForElement);

document.querySelectorAll("#add-snippet-button").forEach(btn => btn.addEventListener("click", () =>
{
    let elem = document.createElement("div");
    elem.classList.add("element", "snippet");
    elem.innerHTML = '<div class="content"></div><div class="tags"></div>' +
        '<div class="toolbar"><a class="add-tag-button tool editable-visibility">Add tag</a><a class="delete-button tool danger">Delete</a></div>' +
        '<div class="comment-bar"><div class="comment"> // Click into to edit</div><div class="comment editable-visibility">// Click on a tag to remove it</div></div>';
    
    eventsForElement(elem);
    main.appendChild(elem);
    packery.appended(elem);
    openDialogSnippet(elem);
}));

document.querySelectorAll("#add-tag-button").forEach(btn => btn.addEventListener("click", () =>
{
    let elem = document.createElement("div");
    elem.classList.add("element", "tag");
    elem.innerHTML = '<div class="content"></div>' +
        '<div class="toolbar"><a class="add-tag-button tool editable-visibility">Add tag</a><a class="delete-button tool danger">Delete</a></div>' +
        '<div class="comment-bar"><div class="comment"> // Click into to edit</div><div class="comment editable-visibility">// Click on a tag to remove it</div></div>';
   
    eventsForElement(elem);
    main.appendChild(elem);
    packery.appended(elem);
    openDialogTag(elem);
}));

const openDialogSnippet = (elem) =>
{
    let dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("dialog-wrapper");
    
    let elemClone = elem.cloneNode(true);
    elem.style.visibility = "hidden";
    elemClone.querySelector(".content").contentEditable = "true";
    elemClone.style = "";

    let newTag = false;

    elemClone.querySelector(".add-tag-button").addEventListener("click", e => 
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
    });

    elemClone.querySelector(".delete-button").addEventListener("click", e => 
    {
        e.stopPropagation();
        elem.remove();
        dialogWrapper.remove();
        packery.layout();
    });

    elemClone.querySelectorAll(".tag").forEach(tag => tag.addEventListener("click", e => 
    {
        tag.remove();
    }));

    elemClone.addEventListener("mousedown", e =>
    {
        e.stopPropagation();
    });

    dialogWrapper.addEventListener("mousedown", e => 
    {
        if (newTag !== false) newTag.finishEditing();
        demoApplyEditedSnippet(elem, elemClone);
        elem.style.visibility = "visible";
        dialogWrapper.remove();
        packery.layout();
    });

    dialogWrapper.appendChild(elemClone);
    document.body.append(dialogWrapper);
};

const demoApplyEditedSnippet = (elem, elemClone) =>
{
    elem.querySelector(".content").innerHTML = elemClone.querySelector(".content").innerHTML;
    let tags = elem.querySelector(".tags");
    let tagsClone = elemClone.querySelector(".tags");
    tags.innerHTML = "";
    tagsClone.querySelectorAll(".tag").forEach(t => tags.appendChild(t.cloneNode(true)));
};

const openDialogTag = (elem) =>
{
    let dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("dialog-wrapper");
    
    let elemClone = elem.cloneNode(true);
    elem.style.visibility = "hidden";
    elemClone.querySelector(".content").contentEditable = "true";
    elemClone.style = "";

    elemClone.querySelector(".delete-button").addEventListener("click", e => 
    {
        e.stopPropagation();
        elem.remove();
        dialogWrapper.remove();
        packery.layout();
    });

    elemClone.addEventListener("click", e =>
    {
        e.preventDefault();
        e.stopPropagation();
    });

    dialogWrapper.addEventListener("click", e => 
    {
        e.preventDefault();
        demoApplyEditedTag(elem, elemClone);
        elem.style.visibility = "visible";
        dialogWrapper.remove();
        packery.layout();
    });

    dialogWrapper.appendChild(elemClone);
    document.body.append(dialogWrapper);
};

const demoApplyEditedTag = (elem, elemClone) =>
{
    elem.querySelector(".content").innerHTML = elemClone.querySelector(".content").innerHTML;
};