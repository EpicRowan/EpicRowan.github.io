
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');

		})
})

//Checkbox functions

function myFunction() {

$(document).ready(function () {
    $('#python').change(function () {
        if (this.checked) 
        //  ^
           $('#doommapper').fadeIn('slow');
        else 
            $('#doommapper').fadeOut('slow');
    });
});
}