
let dead = +(document.getElementById('dead').textContent);
let lost = +(document.getElementById('lost').textContent);


for (i = 1; i <= 9; i++) {
    let getHole = document.getElementById(`hole${i}`);

    getHole.onclick = function () {

        if (getHole.classList.contains('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }

        if (dead === 10) {
            alert('Победа!');
            dead = 0;
            lost = 0;
            document.getElementById('dead').textContent = dead;
        } else if (lost === 5) {
            alert('Вы проиграли!')
            dead = 0;
            lost = 0;
            document.getElementById('lost').textContent = lost;
        }
    }
}
