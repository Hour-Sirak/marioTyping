let btns = document.querySelectorAll('.btn-group .btn')
let container = document.getElementById('container')
let [blackScreenTop, blackScreenBottom] = document.querySelectorAll('.black-screen')
function reset(){
	btns[0].classList.add('hover')
	blackScreenTop.classList.remove('black-screen-top')
	blackScreenBottom.classList.remove('black-screen-bottom')

}

function main(){
	
	btns[0].onclick = function(){
		blackScreenTop.classList.add('black-screen-top')
		blackScreenBottom.classList.add('black-screen-bottom')
		
		btns[0].classList.remove('hover')
		setTimeout(reset, 3500)
	}
}

window.onload = main