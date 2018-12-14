// the main function
var main = function() {

	if (app.documents.length == 0) {
		alert('Najsamfpjerf otwusz jakis dokument!');
		exit();
	}

	var doc = app.activeDocument; // get the current document
	$.writeln('doc.pages.length: ' + doc.pages.length);

	// loop the pages
	for (var i = 0; i < doc.pages.length; i++) {
		var page = doc.pages[i]; // isolate the page
		// loop all rectangles
		$.writeln('page.rectangles.length: ' + page.rectangles.length);
		
		for (var j = 0; j < page.rectangles.length; j++) {
			var rect = page.rectangles[j]; // isolate a rectangle
			// test if there is an image inside
			if (rect.images.length > 0) {
				var image = rect.images[0]; // isolate the image
				// asign a random color from th swatches
				image.fillColor = doc.swatches[Math.floor(Math.random()
						* doc.swatches.length - 1)];
			} else {
				alert('nie ma imidrza.');
			}// end if image
		} // end loop j rectangles
	} // end loop i pages
} // end of main
main(); // run it
