
let notes = JSON.parse(localStorage.getItem('railNotes')) || [];

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    if(notes.length === 0){
        
        const p = document.createElement('p');
        p.textContent = 'Tidak ada catatan baru';
        p.id = 'noNotes';
        noteList.appendChild(p);
    } else {
        
        notes.forEach((note, index) => {
            const p = document.createElement('p');
            p.textContent = note;
            noteList.appendChild(p);
        });
    }
}

document.getElementById('newNoteBtn').addEventListener('click', function(){
    const note = prompt("Masukkan catatan kereta:");

    
    if(note !== null && note.trim() !== ''){
        notes.push(note.trim());
        localStorage.setItem('railNotes', JSON.stringify(notes)); 
        displayNotes(); 
    }
});


document.getElementById('resetNoteBtn').addEventListener('click', function(){
    if(confirm("Apakah kamu yakin ingin menghapus semua catatan?")){
        notes = []; 
        localStorage.removeItem('railNotes'); 
        displayNotes(); 
    }
});


displayNotes();