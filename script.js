let btns = document.querySelectorAll('.btn-group .btn')
let container = document.getElementById('container')
let [blackScreenTop, blackScreenBottom] = document.querySelectorAll('.black-screen')
let blackScreen = container.firstElementChild

function reset(){
	btns[0].classList.add('hover')
	blackScreenTop.classList.remove('black-screen-top')
	blackScreenBottom.classList.remove('black-screen-bottom')

}

function main(){
	btns[0].onclick = function(){
		blackScreen.classList.add('black-screen')
		blackScreen.style.backgroundColor = 'rgba(0, 0, 0, 1)'
		
		btns[0].classList.remove('hover')
		setTimeout(reset, 3500)
	}
}

window.onload = main