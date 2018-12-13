// testing for inDesign

try {
	var dm = new DataMerge();
	// app.documents.DataMerge.getElements(); //:Array of DataMerge
}

catch (Exception) {
	$.writeln('Zmien target application na inDesign'); // wyswietla metody
}

var myDMFile = new File('c:\\Temp\\mydmdata.txt');
$.writeln(myDMFile);

try {
	var doc = app.activeDocument;
} catch (Exception) {
	$.writeln('pusty dokument.'); // wyswietla metody
	exit();
}

var myKeys = new Array('kij1', 'kij2', 'kij3');
doc.metadataPreferences.keywords = myKeys;
doc.metadataPreferences.documentTitle = 'some title';
doc.metadataPreferences.author = 'some author';

with (app.dataMergeOptions) {
	app.activeDocument.dataMergeProperties.selectDataSource(myDMFile);
	app.activeDocument.dataMergeProperties.selectDataSource(myDMFile);
	app.activeDocument.dataMergeProperties.selectDataSource(myDMFile);

	linkImages = true;
	removeBlankLines = false;
	createNewDocument = true;
	documentSize = 100;
} // (end of dataMergeOptions)

// var myDataSource = File("c:\\ak\\cv\\resume_ak_data.txt");
// app.activeDocument.dataMergeProperties.selectDataSource(myDataSource);

var dmth = new DataMergeTextPlaceholder();
$.writeln(dmth.field);
$.writeln(DataMergeTextPlaceholder.length);
// $.writeln(DataMergeTextPlaceholder.isValid);
$.writeln(dmth.parent);
$.writeln(dmth.index);

// $.writeln(DataMergeTextPlaceholder.field);
$.writeln(dmth.toSource());
// $.writeln(dmth.toSpecifier()); // not a function
// DataMergeTextPlaceholder.toSpecifier(); // is not a function
// DataMergeTextPlaceholder.getElements();

// dmth.getElements();

// var dmtps = DataMergeTextPlaceholders.item();

// Adobe InDesign CS2 Scripting Guide.pdf - str. 59

// Element of Object.reflect
// ReflectionInfo.parent

var f = new File("myfile");
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
	$.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}

obj = new String("hi");
var myClassName = obj.reflect.name; // => String
$.writeln(myClassName);

obj = new String("hi");
obj.reflect.methods; // => indexOf,slice,...

// $.writeln (obj.reflect.methods); // wyswietla metody

// obj.reflect.find ("indexOf"); // => the method info
$.writeln(obj.reflect.find("indexOf"));

// $.writeln(Math.reflect.properties); //This code gets a list of properties
$.writeln(Math.reflect.find("PI").type); // => number

var data = dmth.storyOffset;
// $.writeln (DataMergeTextPlaceholder.reflect.methods); // wyswietla metody -
// zle
$.writeln(app.activeDocument.dataMergeProperties.reflect.methods); // wyswietla
// metody -
// poprawnie
// selectDataSource,updateDataSource,removeDataSource,mergeRecords,exportFile,toSource,
// getElements,toSpecifier,addEventListener,removeEventListener,==,===,toSource,getElements,toSpecifier

// $.writeln(app.activeDocument.dataMergeProperties.reflect.properties); //This
// code gets a list of properties
// dataMergePreferences,isValid,parent,properties,preferences,dataMergeFields,events,
// eventListeners,isValid,__proto__

var myApp = new Application();
// app.activeDocument.dataMergeProperties.selectDataSource(myDMFile);
// Application.activeDocument.dataMergeProperties.selectDataSource(myDMFile);
// dm.selectDataSource(myDMFile); // selectDataSource is not a function

// DataMergeTextPlaceholderHolder()
// doc.DataMerge.selectDataSource(myDMFile);

// http://jongware.mit.edu/Js/pc_$.html
// $.writeln ($.reflect.methods); // wyswietla metody
// about,toString,write,writeln,bp,getenv,setenv,sleep,colorPicker,evalFile,list,listLO,summary,gc

// $.writeln ($.list ());
$.writeln($.getenv('temp'));

// $.writeln ($.summary ());

// var colorNumber = $.colorPicker( 0x80109a);
// $.writeln(colorNumber);

// dm2.reflect.name() - daje dm2.reflect.name is not a function (blad ze som
// klamerki)

var dm2 = new DataMerge();
var mydm2Name = dm2.reflect.name;
var mydm2Methods = dm2.reflect.methods;
$.writeln(mydm2Methods);

// to nie som metody ..
// $.writeln(DataMerge.reflect.methods);
// $.writeln(DataMergeField.reflect.methods);
// $.writeln(DataMergeImagePlaceholder.reflect.methods);

// $.writeln (app.reflect.methods);

// performanceMetric,performanceMetricShortName,performanceMetricLongName,dumpFromMemoryMark,
// dumpBetweenMemoryMarks,memoryStatistics,unpackageUCF,packageUCF,loadPreflightProfile,
// deleteUnusedTags,loadXMLTags,saveXMLTags,mountProject,importStyles,exportStrokeStyles,
// findText,changeText,findGrep,changeGrep,findGlyph,changeGlyph,findObject,changeObject,
// saveFindChangeQuery,loadFindChangeQuery,deleteFindChangeQuery,findTransliterate,
// changeTransliterate,print,exportPresets,importFile,place,clearFrameFittingOptions,
// updateFonts,loadMotionPreset,cut,copy,paste,pasteInto,pasteInPlace,pasteWithoutFormatting,
// loadSwatches,saveSwatches,importAdobeSwatchbookSpotColor,importAdobeSwatchbookProcessColor,
// loadConditions,select,applyShortcutSet,applyWorkspace,applyMenuCustomization,
// togglePanelSystemVisibility,open,quit,doScript,activate,cascadeWindows,insertLabel,
// extractLabel,findKeyStrings,translateKeyString,undo,redo,tileWindows,generateIDMLSchema,
// cancelAllTasks,waitForAllTasks,setApplicationPreferences,toSource,getElements,toSpecifier,
// addEventListener,removeEventListener,==,===,toSource,getElements,toSpecifier

// dataMergeOptions

// $.writeln (app.reflect.properties);

// xmlViewPreferences,performanceMetrics,toolBoxTools,displayPerformancePreferences,galleyPreferences,
// textEditingPreferences,preflightOptions,preflightBookOptions,allPreflightObjectTypes,
// allPreflightRuleCategories,allPreflightRuleIDs,dataMergeOptions,layoutAdjustmentPreferences,
// notePreferences,jpegExportPreferences,textImportPreferences,textExportPreferences,
// taggedTextExportPreferences,taggedTextImportPreferences,wordRTFImportPreferences,
// excelImportPreferences,xmlPreferences,xmlImportPreferences,xmlExportPreferences,
// exportForWebPreferences,transparencyPreferences,textFramePreferences,textPreferences,
// textDefaults, dictionaryPreferences, storyPreferences, anchoredObjectDefaults,
// anchoredObjectSettings,baselineFrameGridOptions,footnoteOptions,allParagraphStyles,
// allCharacterStyles,textWrapPreferences,findChangeTextOptions,findChangeGrepOptions,
// findChangeGlyphOptions,findChangeObjectOptions,findTextPreferences,changeTextPreferences,
// findGrepPreferences,changeGrepPreferences,findGlyphPreferences,changeGlyphPreferences,
// findObjectPreferences,changeObjectPreferences,findChangeTransliterateOptions,
// findTransliteratePreferences,changeTransliteratePreferences,allTableStyles,allCellStyles,
// documentPreferences,gridPreferences,guidePreferences,marginPreferences,pasteboardPreferences,
// viewPreferences,smartGuidePreferences,spellPreferences,autoCorrectPreferences,scriptPreferences,
// scriptArgs,epsExportPreferences,pdfExportPreferences,interactivePDFExportPreferences,
// pdfPlacePreferences,placeableFileExtensions,placeableFileTypes,linkingPreferences,grabberPreferences,
// indexGenerationOptions,trackChangesPreferences,userColor,userName,incopyExportOptions,imePreferences,
// imageIOPreferences,imagePreferences,strokeFillProxySettings,polygonPreferences,allObjectStyles,
// clearOverridesWhenApplyingStyle,pageItemDefaults,alignDistributePreferences,frameFittingOptions,
// buttonPreferences,epsImportPreferences,importedPageAttributes,swfExportPreferences,
// xflExportPreferences,unusedSwatches,watermarkPreferences,conditionalTextPreferences,
// colorSettings,layoutGridData,storyGridData,cjkGridPreferences,gridPrintingPreferences,
// mojikumiUIPreferences,activeBook,selection,activeWindow,liveScreenDrawing,name,fullName,
// filePath,version,locale,activeScript,visible,activeDocument,generalPreferences,
// clipboardPreferences,transformPreferences,modalState,featureSet,label,undoName,redoName,
// undoHistory,redoHistory,activeScriptUndoMode,serialNumber,isValid,parent,properties,
// preferences,displaySettings,preflightProfiles,preflightRules,preflightProcesses,panels,
// libraries,printerPresets,xmlExportMaps,xmlImportMaps,xmlRuleProcessors,xmlTags,flattenerPresets,
// userDictionaries,paragraphStyleGroups,characterStyleGroups,characterStyles,paragraphStyles,
// textVariables,tableStyles,tableStyleGroups,cellStyles,cellStyleGroups,strokeStyles,
// dashedStrokeStyles,dottedStrokeStyles,stripedStrokeStyles,documentPresets,autoCorrectTables,
// events,eventListeners,idleTasks,inks,trapPresets,pdfExportPresets,languagesWithVendors,
// indexingSortOptions,objectStyleGroups,objectStyles,transformationMatrices,fonts,motionPresets,
// documents,swatches,colors,tints,gradients,mixedInks,mixedInkGroups,dialogs,conditions,
// conditionSets,compositeFonts,namedGrids,kinsokuTables,mojikumiTables,books,numberingLists,
// windows,layoutWindows,storyWindows,backgroundTasks,menuActions,scriptMenuActions,menus,isValid,__proto__

// $.writeln (app.activeDocument.dataMergeProperties.reflect.methods); //
// wyswietla metody - poprawnie
// dla activeDocument propertisem jest dataMergeProperties

//dataMergeOptions
//dataMergeProperties
//dataMergeTextPlaceholders
//dataMergeImagePlaceholders

// $.writeln (app.activeDocument.reflect.properties);

// xmlViewPreferences,galleyPreferences,preflightOptions,activeProcess,dataMergeProperties,

// dataMergeOptions,layoutAdjustmentPreferences,xmlPreferences,xmlImportPreferences,xmlExportPreferences,

// associatedXMLElement,exportForWebPreferences,versionState,editingState,transparencyPreferences,

// textFramePreferences,textPreferences,textDefaults,dictionaryPreferences,storyPreferences,

// anchoredObjectDefaults,anchoredObjectSettings,baselineFrameGridOptions,footnoteOptions,

// allParagraphStyles,allCharacterStyles,textWrapPreferences,allTableStyles,allCellStyles,

// documentPreferences,gridPreferences,guidePreferences,marginPreferences,pasteboardPreferences,

// viewPreferences,printPreferences,printBookletOptions,printBookletPrintPreferences,placeGuns,

// metadataPreferences,indexGenerationOptions,allPageItems,allGraphics,allObjectStyles,pageItemDefaults,

// frameFittingOptions,buttonPreferences,fullName,name,visible,filePath,modified,saved,zeroPoint,

// unusedSwatches,label,watermarkPreferences,converted,recovered,readOnly,activeLayer,id,

// conditionalTextPreferences,cmykProfileList,rgbProfileList,cmykProfile,rgbProfile,solidColorIntent,

// afterBlendingIntent,defaultImageIntent,rgbPolicy,cmykPolicy,accurateLABSpots,layoutGridData,

// storyGridData,cjkGridPreferences,mojikumiUIPreferences,chapterNumberPreferences,selection,

// undoName,redoName,undoHistory,redoHistory,isValid,parent,index,properties,preferences,

// preflightProfiles,dataMergeTextPlaceholders,dataMergeImagePlaceholders,xmlElements,xmlItems,

// xmlComments,xmlInstructions,dtds,xmlExportMaps,xmlImportMaps,xmlStories,stories,xmlTags,

// validationErrors,tocStyles,hyphenationExceptions,paragraphStyleGroups,characterStyleGroups,

// characterStyles,paragraphStyles,textVariables,tableStyles,tableStyleGroups,cellStyles,

// cellStyleGroups,strokeStyles,dashedStrokeStyles,dottedStrokeStyles,stripedStrokeStyles,pages,

// spreads,ovals,splineItems,pageItems,rectangles,graphicLines,textFrames,polygons,sections,

// events,eventListeners,inks,trapPresets,masterSpreads,links,languages,layers,indexes,

// indexingSortOptions,hyperlinks,bookmarks,hyperlinkPageItemSources,hyperlinkTextSources,

// hyperlinkTextDestinations,hyperlinkPageDestinations,crossReferenceFormats,crossReferenceSources,

// paragraphDestinations,hyperlinkExternalPageDestinations,hyperlinkURLDestinations,guides,

// objectStyleGroups,objectStyles,groups,epstexts,formFields,buttons,multiStateObjects,fonts,

// motionPresets,swatches,colors,tints,gradients,mixedInks,mixedInkGroups,conditions,conditionSets,

// compositeFonts,namedGrids,kinsokuTables,mojikumiTables,numberingLists,assignments,windows,
// layoutWindows, storyWindows, isValid, __proto__

// $.writeln (app.activeDocument.reflect.methods); // wyswietla metody -
// poprawnie

// packageForPrint,embed,mapStylesToXMLTags,mapXMLTagsToStyles,importDtd,importXML,deleteUnusedTags,
// loadXMLTags,saveXMLTags,changeComposer,revertToProject,synchronizeWithVersionCue,checkIn,createTOC,
// importStyles,recompose,exportStrokeStyles,findText,changeText,findGrep,changeGrep,findGlyph,
// changeGlyph,findObject,changeObject,findTransliterate,changeTransliterate,print,printBooklet,
// place,loadMasters,importFormats,updateCrossReferences,align,distribute,clearFrameFittingOptions,
// resetAllMultiStateObjects,resetAllButtons,close,save,extractLabel,insertLabel,loadSwatches,
// saveSwatches,importAdobeSwatchbookSpotColor,importAdobeSwatchbookProcessColor,exportFile,
// asynchronousExportFile,revert,saveACopy,loadConditions,select,undo,redo,toSource,getElements,
// toSpecifier,addEventListener,removeEventListener,==,===,toSource,getElements,toSpecifier

$.writeln(app.activeDocument.dataMergeProperties.reflect.methods); // wyswietla
// metody -
// poprawnie
// dla activeDocument propertisem jest dataMergeProperties

methods:
// selectDataSource,updateDataSource,removeDataSource,mergeRecords,exportFile,toSource,getElements,
// toSpecifier,addEventListener,removeEventListener,==,===,toSource,getElements,toSpecifier

$.writeln(app.activeDocument.dataMergeProperties.reflect.properties); // wyswietla
// metody
// -
// poprawnie
// properties:
// dataMergePreferences,isValid,parent,properties,preferences,dataMergeFields,events,eventListeners,
// isValid, __proto__

// $.about();

$.writeln('koniec.');
exit();
