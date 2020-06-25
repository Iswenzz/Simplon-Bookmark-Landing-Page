'use strict';

/**
 * Animations map
 */
const waypoints = [
	{
		query: '#bookmark-intro-right', 
		classes: 'animate__animated animate__fadeInRight',
		offset: '50%'
	},
	{
		query: '#bookmark-intro-left', 
		classes: 'animate__animated animate__fadeInLeft',
		offset: '50%'
	},
	{
		query: '#browser-1', 
		classes: 'animate__animated animate__fadeInUp',
		offset: '50%'
	},
	{
		query: '#browser-2', 
		classes: 'animate__animated animate__fadeInUp',
		offset: '50%'
	},
	{
		query: '#browser-3', 
		classes: 'animate__animated animate__fadeInUp',
		offset: '50%'
	},
	{
		query: '#features-1', 
		classes: 'animate__animated animate__flipInX',
		offset: '50%'
	},
	{
		query: '#faq-section', 
		classes: 'animate__animated animate__zoomIn',
		offset: '50%'
	}
]

for (let waypoint of waypoints)
{
	$(waypoint.query).css("visibility", "hidden").waypoint(() =>
	{
		$(waypoint.query).css("visibility", "visible").addClass(waypoint.classes);
	}, { 
		offset: waypoint.offset,
		triggerOnce: true
	});
}
