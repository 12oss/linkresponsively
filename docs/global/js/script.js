var dp = $('#drawingArea');

dp
	.css({ position: 'relative' })
	.on("mousemove mousedown mouseup", draw_a_box);

draw = false;

var ieEight = '';
var droppedURL;

function draw_a_box(e) {
	var position = dp.position();
	containerOffset = dp.offset().left;

	var pageX = e.pageX - containerOffset,
		pageY = e.pageY - 30,
		dpLast = dp.find('.hotspot.last'),
		dpLast_data = dpLast.data();

	if (e.type === 'mousemove') {

		// If ".hotspot.last" doesn't exist, create it.
		if (dpLast.length < 1) {
			$('<div class="hotspot last"></div>').appendTo(dp);
		}

		var drawCSS = {};

		// If drawing is initiated.
		if (draw) {

			// xLeft
			if (dpLast_data.pageX > pageX) {
				drawCSS['right'] = dp.width() - dpLast_data.pageX,
					drawCSS['left'] = 'auto',
					drawCSS['width'] = dpLast_data.pageX - pageX;
			}
			// xRight
			else if (dpLast_data.pageX < pageX) {
				drawCSS['left'] = dpLast_data.pageX,
					drawCSS['right'] = 'auto',
					drawCSS['width'] = pageX - dpLast_data.pageX;
			}

			// yUp
			if (dpLast_data.pageY > pageY) {
				drawCSS['bottom'] = dp.height() - dpLast_data.pageY,
					drawCSS['top'] = 'auto',
					drawCSS['height'] = dpLast_data.pageY - pageY;
			}
			// yDown
			else if (dpLast_data.pageY < pageY) {
				drawCSS['top'] = dpLast_data.pageY,
					drawCSS['bottom'] = 'auto',
					drawCSS['height'] = pageY - dpLast_data.pageY;
			}

		}

		if (!draw && dpLast.length > 0) {
			dpLast.css({
				top: pageY,
				left: pageX
			});
		}

		if (draw) {
			$('.holding').remove();
			dpLast.css(drawCSS);
		}

	}

	if (e.type === 'mousedown') {
		e.preventDefault();
		draw = true;
		dpLast.data({ "pageX": pageX, "pageY": pageY });
	} else if (e.type === 'mouseup') {
		draw = false;
		dpLast.addClass('holding');
		dpLast.removeClass('last');
	}
}

function convertResponsive() {

	var link = $('.input-field').val();

	var type = $('.linkType.active').html();
	if (type == 'URL') {
		type = 'href';
	} else if (type == 'Function') {
		type = 'onclick';
	} else {
		alert("Select type of hotspot");
	}

	if ($('.holding').length == 0) {
		alert('Drag Out Hotspot');
	} else if (link == '' || link == null || link == undefined) {
		alert('dude. enter a linkypoo');
	} else {
		var box = $('.holding'),
			$image = $('#drawingArea img:first'),
			position = box.position();

		var hotspot = [box.width(), box.height(), position.left, position.top, link];

		hotspot[0] = 100 * (hotspot[0] / $image.width());
		hotspot[1] = 100 * (hotspot[1] / $image.height());
		hotspot[2] = 100 * (hotspot[2] / $image.width());
		hotspot[3] = 100 * (hotspot[3] / $image.height());

		for (var i = 0; i < (hotspot.length - 1); i++) {
			hotspot[i] = (parseFloat(hotspot[i]).toFixed(1)) + "%";
		}

		$image.after('\n' + '<a ' + type + '="' + hotspot[4] + '" class="rim-hotspot" style="width:' + hotspot[0] + ';height:' + hotspot[1] + ';left:' + hotspot[2] + ';top:' + hotspot[3] + ';position:absolute;cursor:pointer">' + ieEight + '</a>');
		$('.holding').remove();
		$('.last').remove();
		displayCode();
		addDelete();
	}

}

function removeHolding() {
	$('.holding').remove();
	$('.last').remove();
}

function displayCode() {

	var displayCode = $('#drawingArea').html();
	var res = displayCode.replace(droppedURL, "IMG_PATH");
	$('.display-code-here').html("<pre class='prettyprint lan-html'><xmp>" + res + "</xmp></pre>");
	prettyPrint();

}

$('.linkType').on('click', function() {
	if (!$(this).is('.active')) {
		$('.active').removeClass('active');
		$(this).addClass('active');
		changePlaceholder();
	}
});

$('.ie').on('click', function() {
	if ($(this).is('.btn-success')) {
		$(this).removeClass('btn-success');
		$(this).html('IE8');
		ieEight = '';
	} else {
		$(this).addClass('btn-success');
		$(this).html('IE8 <i class="fa fa-check"></i>');
		ieEight = '<img src="http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif">';
	}
});

function changePlaceholder() {
	selectedBtn = $('.linkType.active').html();
	if (selectedBtn == 'URL') {
		$('.input-field').attr("placeholder", "http://www.google.com");
	} else {
		$('.input-field').attr("placeholder", "functionName()")
	}
}
$('.submit-link').on('click', function() {
	var linkURL = $('.link-url').val();
	replaceBg(linkURL, false);
});

function replaceBg(img, dropped) {
	if (dropped) {
		droppedURL = img;
	}
	console.log(droppedURL);
	$('#rim-img-load').hide();
	$('#drawingArea').html('<img id="main-image" src="' + img + '" width="100%" style="position:relative">');
}

function addDelete() {
	$('.rim-hotspot').on({
		mouseenter: function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var confirmDelete = confirm("Delete Hotspot?");
				if (confirmDelete) {
					$(this).removeAttr("href").remove();
					$(this).removeAttr("onclick").remove();
					$('.holding').remove();
					$('.last').remove();
					displayCode();
				} else {
					return false;
				}
			});
		},
		mouseleave: function() {
			$(this).removeClass('delete');
		}
	});
}

function clearAll() {
	$('#drawingArea img').All().remove();
	displayCode();
}
