const autoSizeTextArea = (textArea) => {
  textArea.rows = 1;
  const rows = ~~((textArea.scrollHeight - 28) / 24); // The constants work for this specific case

  textArea.rows = rows;
}

const autoSizeInputField = (input, measureSpan) => {
  measureSpan.innerHTML = input.value;
  input.style.width = `${2 + measureSpan.clientWidth}px`;
}

document.querySelectorAll(".dialog-wrapper .snippet .tag").forEach(t =>
  t.addEventListener("click", () => {
    t.remove();
  }));

const addTag = document.querySelector(".add-tag-button");
if (addTag) {
  addTag.addEventListener("click", () => {
    newTag = document.createElement("div");
    newTag.className = "tag new";
    let input = document.createElement("input");
    input.type = "text";
    input.className = "transparent-text";
    newTag.appendChild(input);
    let measureSpan = document.createElement("span");
    measureSpan.className = "measure-span";
    newTag.appendChild(measureSpan);

    input.addEventListener("input", () => autoSizeInputField(input, measureSpan));
    autoSizeInputField(input, measureSpan);

    newTag.finishEditing = () => {
      if (input.value.trim() !== "") {
        newTag.classList.remove("new");
        newTag.innerHTML = input.value;
        let tag = newTag;
        tag.addEventListener("click", e => {
          tag.remove();
        });
      }
      else {
        newTag.remove();
      }

      newTag = false;
    }

    newTag.addEventListener("keydown", e => {
      if (e.which == 13 || e.which == 27) newTag.finishEditing();
    });

    input.addEventListener("blur", () => {
      newTag.finishEditing();
    });

    document.querySelector(".dialog-wrapper .tags").appendChild(newTag);
    input.focus();
  });
}

const ta = document.querySelector("textarea.content");
if (ta) {
  autoSizeTextArea(ta);
  ta.addEventListener("input", (e) => autoSizeTextArea(e.target));

  ta.focus();
  ta.selectionStart = ta.selectionEnd = ta.value.length;
}

const cti = document.querySelector("input.content");
if (cti) {
  const cms = document.querySelector("#content-measure-span");
  cti.addEventListener("input", () => autoSizeInputField(cti, cms));
  autoSizeInputField(cti, cms);

  cti.focus();
  cti.selectionStart = cti.selectionEnd = cti.value.length;
}

const sef = document.querySelector("#snippet-edit-form");
if (sef) {
  sef.addEventListener("submit", (e) => {
    const tags = document.querySelector(".dialog-wrapper .tags");

    tags.querySelectorAll(":not(.new)").forEach(tag => {
      let hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "tags[]";
      hiddenInput.value = tag.innerText;
      e.target.appendChild(hiddenInput);
    });
  })
}