'use strict';

angular.module('semAng')

	/*
	 * Реакция при наведении на изображение
	 */
	.controller('ZoomCtrl', function(zoom) {

		var content = $('#content'),
			xOffset = 93,
			yOffset = 30;

		content.on('mouseover', '.zoom_image', function(e) {
			$("body")
				.append('<p id="preview" class="zoom_preview"><img class="zoom_image" src="' + this.src +'" /></p>');

			$("#preview")
				.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px")
				.fadeIn("fast");
		});

		content.on('mouseout', '.zoom_image', function() {
			$("#preview").remove();
		});

		content.on('mousemove', '.zoom_image', function(e) {
			$("#preview")
				.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px");
		});
	})

	.value('zoom', {
		assigned: false
	});
