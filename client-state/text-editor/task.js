const editor = document.getElementById('editor');
const resetBtn = document.getElementById('reset_button');

editor.oninput = () => {
    localStorage.text = editor.value;      
}

editor.innerText = localStorage.getItem('text');
// Если значение будет отсутствовать в локальном хранилище, то getItem вернёт null, который никак не повлияет на поле ввода

resetBtn.onclick = () => {
    //localStorage.clear(); Старайтесь не очищать локальное хранилище полностью. Так как в нём могут находиться и другие данные
    localStorage.removeItem('text');
    editor.innerText = '';
}