var utterance_dataFile = "/data/utterances_withoutID.json"
var utterances_pageElementID2 = "#utterances-table"

// tabulator_keyboardKeys_config = {
// const tabulator_utterances_config = {
var tabulator_utterances_config = {
	height:"211px",
	selectable:"highlight",
	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	// reactiveData:true, //turn on data reactivity |id020230117190349

	//---- persistence (https://tabulator.info/docs/5.4/persist)
	persistence:true, //enable table persistence
	persistence:{
		sort:true,
		filter:true,
		columns:true,
	},
	persistenceID:"utterancesPerststance",

	//---- responsiveLayout:"collapse"
	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false} //id020230115231856

		,{formatter:"rowSelection", titleFormatter:"rowSelection", align:"center", headerSort:false}

    // ,{formatter:"rowSelection", titleFormatter:"rowSelection", titleFormatterParams:{
		// 	rowRange:"active" //only toggle the values of the active filtered rows
		// }, hozAlign:"center", headerSort:false},
	

		,{title:"Utterance", field:"utterance", editor:"input"},
		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"Used For", field:"usedFor", width:130},
		{title:"Id", field:"id"}
	]	//end: columns

	// //__
	// , rowClick:function(e, row){
	// 	//e - the click event object
	// 	//row - row component

	// 	console.log("tabulator_utterances_config['rowClick'] |020020230119080853230119074306")
		
	// 	// row.toggleSelect(); //toggle row selected state on row click
	// }

	// ,rowClick:function(e, row){
	// 		//e - the click event object
	// 		//row - row component

	// 		console.log("'rowClick' |020230119081707")

	// 		row.toggleSelect(); //toggle row selected state on row click
	// }

	//additional tabulator configuration options
};		

console.log(utterancesData);
renderTable2(utterancesData,utterances_pageElementID2, tabulator_utterances_config);
// renderTable(utterance_dataFile,utterances_pageElementID2, tabulator_utterances_config);


//----------------------------------------------------------------

//---- Buttons: Reactivity Controls (https://tabulator.info/docs/5.4/reactivity#overview) |id020230117190349 --------------------------------
//__
//add row to bottom of table on button click
// document.getElementById("reactivity-add").addEventListener("click", function(){
// 	utterancesData.push({utterance:"bla020230117192258"}); //Works
// 	// tabledata.push({name:"IM A NEW ROW", progress:100, gender:"male"});
// });

// //remove bottom row from table on button click
// document.getElementById("reactivity-delete").addEventListener("click", function(){
// 	utterancesData.pop();
// });

// //update name on first row in table on button click
// document.getElementById("reactivity-update").addEventListener("click", function(){
// 	utterancesData[0].name = "bla020230117192433";
// });



