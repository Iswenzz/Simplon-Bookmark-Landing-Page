'use strict';

/**
 * Navbar events.
 * - show/hide regular navbar when modal open/close
 * - delay anchor redirection for the smooth scrolling
 */
$('load', () =>
{
	let navbar = $('#main-navbar');

	$('#navbarToggler').on('show.bs.modal', () => navbar.css("visibility", "hidden"));
	$('#navbarToggler').on('hide.bs.modal', () => navbar.css("visibility", "visible"));

	$('#navbarToggler a').click(function(e) 
	{
		e.preventDefault(); // prevent anchor redirection
		setTimeout(() => window.location.href = this.href, 500);
	});
}, false);
