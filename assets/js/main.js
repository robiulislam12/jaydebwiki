var headers = document.querySelectorAll('.dropdown-container header');

for(var i = 0; i < headers.length; i++) {
	headers[i].addEventListener('click', openCurrAccordion);
}

//Use this as the callback if you would like multiple dropdowns to be open
function openAccordion(e) {
	var parent = this.parentElement;
	var article = this.nextElementSibling;
	
	if (!parent.classList.contains('open')) {
		parent.classList.add('open');
		article.style.maxHeight = article.scrollHeight + 'px';
	}
	else {
		parent.classList.remove('open');
		article.style.maxHeight = '0px';
	}
}

function openCurrAccordion(e) {
	for(var i = 0; i < headers.length; i++) {
		var parent = headers[i].parentElement;
		var article = headers[i].nextElementSibling;

		if (this === headers[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			article.style.maxHeight = article.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			article.style.maxHeight = '0px';
		}
	}
}

// Current year copy right
const currentYear = document.getElementById('currentYear').innerText = new Date().getFullYear()

// Hamburger
document.querySelector('.hamburger').addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('is-active');
	document.querySelector('.nav').classList.toggle('is-active');
})