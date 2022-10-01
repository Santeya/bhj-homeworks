const editor = document.getElementById('editor');
const resetBtn = document.getElementById('reset_button');

editor.oninput = () => {
    localStorage.text = editor.value;      
}

if (localStorage.text) {
    editor.innerText = localStorage.text;
}

resetBtn.onclick = () => {
    localStorage.clear();
    editor.innerText = '';
}