//Create an example data file.
var myTextFile = File.saveDialog("Save Data File As", undefined);
// If the user clicked the Cancel button, the result is null.
if (myTextFile != null) {
	// Open the file with write access.
	myTextFile.open("w");
	myString = "Name\tAddress\tCity\tState\r";
	for (var myCounter = 0; myCounter < 20; myCounter++) {
		myString += "Record: " + myCounter + ", Field:" + 1 + "\t";
		myString += "Record: " + myCounter + ", Field:" + 2 + "\t";
		myString += "Record: " + myCounter + ", Field:" + 3 + "\t";
		myString += "Record: " + myCounter + ", Field:" + 4 + "\r";
	}
	myTextFile.writeln(myString);
	myTextFile.close();
}
var myDocument = app.documents.add();
myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
var myPage = myDocument.pages.item(0);
var myTextFrame = myPage.textFrames.add({
	geometricBounds : [ 72, 72, 288, 288 ]
});

var myString = "Name:\rAddress:\rCity:\rState:\r";
myTextFrame.contents = myString;
myDocument.dataMergeProperties.selectDataSource(myTextFile);

var myDataMergeProperties = myDocument.dataMergeProperties;
var myStory = myTextFrame.parentStory;

var myStoryOffset = myTextFrame.lines.item(0).insertionPoints.item(-2).index;
var myNamePlaceHolder = myDocument.dataMergeTextPlaceholders.add(myStory,
		myStoryOffset, myDataMergeProperties.dataMergeFields.item(0));
myStoryOffset = myTextFrame.lines.item(1).insertionPoints.item(-2).index;
var myAddressPlaceHolder = myDocument.dataMergeTextPlaceholders.add(myStory,
		myStoryOffset, myDataMergeProperties.dataMergeFields.item(1));
myStoryOffset = myTextFrame.lines.item(2).insertionPoints.item(-2).index;
var myCityPlaceHolder = myDocument.dataMergeTextPlaceholders.add(myStory,
		myStoryOffset, myDataMergeProperties.dataMergeFields.item(2));
myStoryOffset = myTextFrame.lines.item(3).insertionPoints.item(-2).index;
var myStatePlaceHolder = myDocument.dataMergeTextPlaceholders.add(myStory,
		myStoryOffset, myDataMergeProperties.dataMergeFields.item(3));
myDocument.dataMergeProperties.mergeRecords();
