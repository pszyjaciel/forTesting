var nEmail = "mailto:name@address.com;name2@address.com?&cc=name@address.com;name2@address.com&subject=New Service Request Submittal";
// this.submitForm({cURL: nEmail, cSubmitAs: "PDF"});

var aSubmitFields = new Array("BondSeriesProgram", "BondSeries");
// this.submitForm({cURL:
// "http://localhost:80/api/loanstatus/submitpdf",aFields: aSubmitFields,
// cSubmitAs: "HTML"});

event.value = identity.name + " at "
		+ util.printd("h:MM tt, mmm dd, yyyy", new Date());
