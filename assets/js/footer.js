'use strict';

/**
 * Disable form submission and add the class 'was-validated' to the form.
 */
$('load', () =>
{
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let forms = $('.needs-validation');
	// Loop over them and prevent submission
	let validation = Array.prototype.filter.call(forms, (form) =>
	{
		form.addEventListener('submit', (event) =>
		{
			if (form.checkValidity() === false) 
			{
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add('was-validated');
		}, false);
	});
}, false);
