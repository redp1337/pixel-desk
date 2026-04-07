function getNotes() {
    const data = localStorage.getItem("pixelDeskNotes");
    return data ? JSON.parse(data) : [];
}

function saveNotesToStorage(notes) {
    localStorage.setItem("pixelDeskNotes", JSON.stringify(notes));
}

// Reads from localStorage and rebuilds the note icons inside #notes-area

function renderNotesFolder() {
    const notesArea = document.getElementById("notes-area");
    if (!notesArea) return;

    notesArea.innerHTML = "";
    const notes = getNotes();

    if (notes.length === 0) {
        notesArea.innerHTML = "<p style='font-family:pixel-desk; color:gray; grid-column: span 4; text-align:center; padding-top:20px;'>No notes saved yet.</p>";
        return;
    }

    notes.forEach((note, index) => {
        const item = document.createElement("div");
        item.classList.add("grid-item-file-icon");
        item.innerHTML = `
            <img src="./img/notepad.png" width="80px" height="85px">
            <div class="file-name">${note.title || "untitled"}</div>
            <button class="delete-note-btn" data-index="${index}">✕</button>
        `;

        // delete button, deletes note from localStorage and re renders
        item.querySelector(".delete-note-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            const notes = getNotes();
            notes.splice(index, 1);
            saveNotesToStorage(notes);
            renderNotesFolder();
        });

        notesArea.appendChild(item);
    });
}

// Saves note to localStorage, clears, and updates the folder

document.getElementById("save-button").addEventListener("click", () => {
    const titleInput = document.querySelector("#title-note input");
    const bodyInput = document.querySelector("#content-note textarea");

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title && !body) return;

    const notes = getNotes();
    notes.push({ title: title || "untitled", body });
    saveNotesToStorage(notes);

    // clears both fields
    titleInput.value = "";
    bodyInput.value = "";

    //checking if note made it to localStorage
    console.log("Note saved to localStorage:", notes[notes.length - 1]);
    // updates the notes folder
    renderNotesFolder();
});

// Renders any notes already in localStorage

document.addEventListener("DOMContentLoaded", () => {
    renderNotesFolder();
});
