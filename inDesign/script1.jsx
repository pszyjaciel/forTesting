// ustaw target application na inDesign
// http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/2.1/docs/WebHelp/references/csawlib/com/adobe/indesign/package-detail.html
// http://jongware.mit.edu/idcsjs5.5/pc_DataMergeOption.html
// http://jongware.mit.edu/idcsjs5.5/inxx.html
// http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/2.1/docs/WebHelp/references/csawlib/

function showProperties(myObject) {
	for ( var property in myObject) {
		if (!myObject.hasOwnProperty(property))
			continue;
		$.writeln(myObject[property]);
	}
}

var myAppProperties = app.reflect.properties;
// $.writeln(myAppProperties);
// fhuj tych propertisuf
// showProperties();

var myDollarMethods = $.reflect.methods;
// $.writeln(myDollarMethods);
// about,toString,write,writeln,bp,getenv,setenv,sleep,colorPicker,evalFile,list,listLO,summary,gc

var myDollarProperties = $.reflect.properties;
// $.writeln(myDollarProperties);
// error,version,build,buildDate,global,stack,level,flags,strict,locale,localize,
// decimalPoint,memCache,appEncoding,screens,os,fileName,line,hiresTimer,dictionary,
// engineName,includePath,__proto__

// showProperties(myDollarProperties);

// ~ $.writeln($.error);
// ~ $.writeln('version: ' + $.version);
// ~ $.writeln('build: ' + $.build);
// ~ $.writeln('buildDate: ' + $.buildDate);
// ~ $.writeln('global: ' + $.global);
// ~ $.writeln('stack: ' + $.stack); // nazwa pliku scriptu
// ~ $.writeln($.level);
// ~ $.writeln('flags: ' + $.flags);
// ~ $.writeln($.strict);
// ~ $.writeln($.localize);
// ~ $.writeln('decimalPoint: ' + $.decimalPoint);
// ~ $.writeln('memCache: ' + $.memCache);
// ~ $.writeln('appEncoding: ' + $.appEncoding);
// ~ $.writeln('screens: ' + $.screens);
// ~ $.writeln('os: ' + $.os);
// ~ $.writeln('fileName: ' + $.fileName);
// ~ $.writeln('line: ' + $.line);
// ~ $.writeln('hiresTimer: ' + $.hiresTimer);
// ~ $.writeln('dictionary: ' + $.dictionary);

var myactiveDocumentProperties = app.activeDocument.reflect.properties;
// showProperties(myactiveDocumentProperties);

var myactiveDocumentMethods = app.activeDocument.reflect.methods;
// showProperties(myactiveDocumentMethods);

var myProperties = app.reflect.properties;
// showProperties(myProperties);

var myAppMethods = app.reflect.methods;
// showProperties(myAppMethods);

// var myActiveScriptProperties = app.activeScript.reflect.properties;
// showProperties(myActiveScriptProperties);

// var myActiveScriptMethods = app.activeScript.reflect.methods;
// showProperties(myActiveScriptMethods);

var myActiveWindowProperties = app.activeWindow.reflect.properties;
// showProperties(myActiveWindowProperties);

var myActiveWindowMethods = app.activeWindow.reflect.methods;
// showProperties(myActiveWindowMethods);

var myUserNameProperties = app.userName.reflect.properties;
// showProperties(myUserNameProperties);

var myUserNameMethods = app.userName.reflect.methods;
// showProperties(myUserNameMethods);

// var myDocument = new Document('maj_dokjument');
// var myUserNameMethods = myDocument.dataMergeTextPlaceholders.reflect.methods;

var myDocumentProperties = Document.reflect.properties;
// showProperties(myDocumentProperties);

var myDocumentMethods = Document.reflect.methods;
// showProperties(myDocumentMethods);

var myApplicationProperties = Application.reflect.properties;
// showProperties(myApplicationProperties);

var myApplicationMethods = Application.reflect.methods;
showProperties(myApplicationMethods);

// dataMergeOptions jest propertisem w app
var mydataMergeOptionsProperties = app.dataMergeOptions.reflect.properties;
// $.writeln(mydataMergeOptionsProperties);
// fittingOption,centerImage,linkImages,removeBlankLines,createNewDocument,documentSize,
// isValid,parent,properties,events,eventListeners,isValid,__proto__

// ~ $.writeln(app.dataMergeOptions.fittingOption);
// ~ $.writeln(app.dataMergeOptions.centerImage);
// ~ $.writeln(app.dataMergeOptions.linkImages);
// ~ $.writeln(app.dataMergeOptions.removeBlankLines);
// ~ $.writeln(app.dataMergeOptions.createNewDocument);
// ~ $.writeln(app.dataMergeOptions.documentSize);
// ~ $.writeln(app.dataMergeOptions.isValid);
// ~ $.writeln(app.dataMergeOptions.parent);
// ~ $.writeln(app.dataMergeOptions.properties);
// ~ $.writeln(app.dataMergeOptions.events);
// ~ $.writeln(app.dataMergeOptions.eventListeners);

var mydataMergeOptionsMethods = app.dataMergeOptions.reflect.methods;
// $.writeln(mydataMergeOptionsMethods);
// toSource,getElements,toSpecifier,addEventListener,removeEventListener,==,===,toSource,
// getElements,toSpecifier

// dataMergeProperties NIE jest propertisem w app
// var mydataMergePropertiesProperties =
// app.dataMergeProperties.reflect.properties;
// $.writeln(mydataMergePropertiesProperties);

var myactiveDocument_dataMergeOptionsProperties = app.activeDocument.dataMergeOptions.reflect.properties;
// $.writeln(myactiveDocument_dataMergeOptionsProperties);
// fittingOption,centerImage,linkImages,removeBlankLines,createNewDocument,documentSize,
// isValid,parent,properties,events,eventListeners,isValid,__proto__

// ~ $.writeln(app.activeDocument.dataMergeOptions.fittingOption);
// ~ $.writeln(app.activeDocument.dataMergeOptions.centerImage);
// ~ $.writeln(app.activeDocument.dataMergeOptions.linkImages);
// ~ $.writeln(app.activeDocument.dataMergeOptions.removeBlankLines);
// ~ $.writeln(app.activeDocument.dataMergeOptions.createNewDocument);
// ~ $.writeln(app.activeDocument.dataMergeOptions.documentSize);
// ~ $.writeln(app.activeDocument.dataMergeOptions.isValid);
// ~ $.writeln(app.activeDocument.dataMergeOptions.parent);
// ~ $.writeln(app.activeDocument.dataMergeOptions.properties);
// ~ $.writeln(app.activeDocument.dataMergeOptions.events);
// ~ $.writeln(app.activeDocument.dataMergeOptions.eventListeners);

var myactiveDocument_dataMergeOptionsMethods = app.activeDocument.dataMergeOptions.reflect.methods;
// $.writeln(myactiveDocument_dataMergeOptionsMethods);
// toSource,getElements,toSpecifier,addEventListener,removeEventListener,==,===,toSource,
// getElements,toSpecifier

var mydataMergePropertiesProperties = app.activeDocument.dataMergeProperties.reflect.properties;
// $.writeln(mydataMergePropertiesProperties);
// ~ dataMergePreferences,isValid,parent,properties,preferences,dataMergeFields,
// ~ events,eventListeners,isValid,__proto__

// ~ $.writeln(app.activeDocument.dataMergeProperties.dataMergePreferences);
// ~ $.writeln(app.activeDocument.dataMergeProperties.isValid);
// ~ $.writeln(app.activeDocument.dataMergeProperties.parent);
// ~ $.writeln(app.activeDocument.dataMergeProperties.properties);
// ~ $.writeln(app.activeDocument.dataMergeProperties.preferences);
// ~ $.writeln(app.activeDocument.dataMergeProperties.dataMergeFields);
// ~ $.writeln(app.activeDocument.dataMergeProperties.events);
// ~ $.writeln(app.activeDocument.dataMergeProperties.eventListeners);

var mydataMergePropertiesMethods = app.activeDocument.dataMergeProperties.reflect.methods;
// $.writeln(mydataMergePropertiesMethods);
// ~ selectDataSource,updateDataSource,removeDataSource,mergeRecords,exportFile,
// ~
// toSource,getElements,toSpecifier,addEventListener,removeEventListener,==,===,
// ~ toSource,getElements,toSpecifier

// ~ Element of DataMergeImagePlaceholder.field
// ~ DataMergeTextPlaceholder.field

var dm = new DataMerge();
var myPreferences = dm.reflect.properties;
// $.writeln(myPreferences);

var myMethods = dm.reflect.methods;
// $.writeln(myMethods);

var dmf = new DataMergeField();
var myPreferences = dmf.reflect.properties;
// $.writeln(myPreferences);

var myMethods = dmf.reflect.methods;
// $.writeln(myMethods);

// showProperties(myPreference);

