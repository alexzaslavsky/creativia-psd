window.onload = function() {

    var blocks = document.getElementsByClassName('info-wrapper');

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].onclick = popMenu;
    }

    var opened = false;

    function popMenu() {
        for (var i = 0; i < blocks.length; i++) {

            blocks[i].classList.remove('plus-minus-ver-hidden');
            blocks[i].classList.remove('sub-info-block-showed');
        }
        this.classList.toggle('plus-minus-ver-hidden');
        this.classList.toggle('sub-info-block-showed');
    }

};