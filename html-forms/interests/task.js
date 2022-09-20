let mainInterestsCheck = Array.from(document.querySelectorAll('div.interests > ul > li.interest > label > input'));

for (let i = 0; i < mainInterestsCheck.length; i++) {
    mainInterestsCheck[i].addEventListener('change', checkAll);
}

function checkAll (event) {
    const detailedInterestsCheck = this.closest('li.interest').lastElementChild.querySelectorAll('.interest__check');
    if (this.checked === true) {
        detailedInterestsCheck[0].checked = true;
        detailedInterestsCheck[1].checked = true;
    } else {
        detailedInterestsCheck[0].checked = false;
        detailedInterestsCheck[1].checked = false;
    }
}


