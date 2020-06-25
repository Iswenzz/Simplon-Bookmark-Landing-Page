'use strict';

/**
 * Navbar 
 */
$('load', () =>
{
	let navbar = $('#main-navbar');
	$('#navbarToggler').on('show.bs.modal', () => navbar.css("visibility", "hidden"));
	$('#navbarToggler').on('hide.bs.modal', () => navbar.css("visibility", "visible"));
}, false);
