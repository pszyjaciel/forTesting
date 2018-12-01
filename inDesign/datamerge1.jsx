
// testing for inDesign

var myActiveDocumentProps = app.activeDocument.reflect.properties;
$.writeln(myActiveDocumentProps);

var myActiveDocumentMeths = app.activeDocument.reflect.methods;
//$.writeln(myActiveDocumentMeths);


try {
var dm = new DataMerge();
//app.documents.DataMerge.getElements();    //:Array of DataMerge 
}

catch (Exception) {
    $.writeln ('Zmien target application na inDesign');    // wyswietla metody
}



try {
    var doc = app.activeDocument;  
}
catch (Exception) {
    $.writeln ('pusty dokument.');    // wyswietla metody
    exit();
}


exit();

var myKeys = new Array('kij1', 'kij2', 'kij3');
doc.metadataPreferences.keywords = myKeys;
doc.metadataPreferences.documentTitle = 'some title';
doc.metadataPreferences.author = 'some author';

with (app.dataMergeOptions) {
    linkImages = true;  
    removeBlankLines = false;  
    createNewDocument = true;  
    documentSize = 100;  
} // (end of dataMergeOptions)


//var myDataSource = File("c:\\ak\\cv\\resume_ak_data.txt");

var myDMFile = new File('c:\\Temp\\mydmdata.txt');
$.writeln(myDMFile);
var ds = app.activeDocument.dataMergeProperties.selectDataSource(myDMFile);
var f = app.activeDocument.dataMergeProperties;
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    //$.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}


//$.writeln(app.activeDocument.dataMergeOptions.dataMergePreference.recordNumber);

// dataMergeFields ma tylko length
//var myDataMergeFieldsProp = app.activeDocument.dataMergeProperties.dataMergePreferences.reflect.properties;
var myDataMergeFieldsProp = app.activeDocument.dataMergeProperties.dataMergePreferences.reflect.properties;
//$.writeln(myDataMergeFieldsProp);

$.writeln(app.activeDocument.dataMergeProperties.dataMergePreferences.recordNumber);
$.writeln(app.activeDocument.dataMergeProperties.dataMergePreferences.recordRange);
$.writeln(app.activeDocument.dataMergeProperties.dataMergePreferences.recordSelection);

var myCount = app.activeDocument.dataMergeProperties.dataMergeFields.count();
// $.writeln(myCount);     // 7 pol w pliku txt

var myDataMergeProperties = app.activeDocument.dataMergeProperties;
//$.writeln(myDataMergeProperties.dataMergeFields.firstItem);

// dataMergeTextPlaceholders ma tylko length
var myDataMergeTextPlaceholders = app.activeDocument.dataMergeTextPlaceholders.reflect.properties;
//$.writeln(myDataMergeTextPlaceholders);
//$.writeln(myDataMergeTextPlaceholders.length);

var myDataMergeTextPlaceholders2 = app.activeDocument.dataMergeTextPlaceholders.reflect.methods;
//$.writeln(myDataMergeTextPlaceholders2);

//var f = new File ("myfile");
var f = myDataMergeTextPlaceholders;
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    //$.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}

var myDataMergeTextPlaceholders_anyItem = app.activeDocument.dataMergeTextPlaceholders.anyItem();
$.writeln(myDataMergeTextPlaceholders_anyItem.length);

var f = myDataMergeTextPlaceholders_anyItem;
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    //$.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}

var myDataMergeTextPlaceholders_anyItem_field = myDataMergeTextPlaceholders_anyItem.field.getElements();
$.writeln(myDataMergeTextPlaceholders_anyItem.toSource());

for (var i in myDataMergeTextPlaceholders_anyItem_field)
{
    $.writeln(i);
}

//app.activeDocument.dataMergeProperties.mergeRecords();

var myEveryItem = app.activeDocument.dataMergeProperties.dataMergeFields.everyItem();

for (var i in myEveryItem)
{
    //$.writeln(i);
}

var myFields = app.activeDocument.dataMergeProperties.dataMergeFields;
//$.writeln(myFields);
    
// dataMergeFields ma tylko length    
var myDataMergeFieldsProp = app.activeDocument.dataMergeProperties.dataMergeFields.reflect.properties;
//$.writeln(myDataMergeFieldsProp);

var myDataMergeFieldsMeth = app.activeDocument.dataMergeProperties.dataMergeFields.reflect.methods;
//$.writeln(myDataMergeFieldsMeth);


