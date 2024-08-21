function highKey(e) {
	const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(e.keyCode);
	key.classList.add('playing');

}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');//seach for key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //para cada key remova o efeito
window.addEventListener('keydown', highKey);



