//
var x=123;
(function(){
	var action_12=[
		"Действие 1",
		"Действие 2",
		"Действие 3",
		"Действие 4",
		"Действие 5",
		"Действие 6",
		"Действие 7"
	];

	var action_14=[
		"Действие 1 (14)",
		"Действие 2 (14)",
		"Действие 3 (14)",
		"Действие 4 (14)",
		"Действие 5 (14)",
		"Действие 6 (14)",
		"Действие 7 (14)"
	];

	var action_16=[
		"Действие 1 (16)",
		"Действие 2 (16)",
		"Действие 3 (16)",
		"Действие 4 (16)",
		"Действие 5 (16)",
		"Действие 6 (16)",
		"Действие 7 (16)"
	];

	var action_18=[
		"Действие 1 (18)",
		"Действие 2 (18)",
		"Действие 3 (18)",
		"Действие 4 (18)",
		"Действие 5 (18)",
		"Действие 6 (18)",
		"Действие 7 (18)"
	];

	var arr=action_12;
	function randomInt(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	}

	var txt2="";
	$("#btn_12").on("click",function(){
		arr=action_12;
	});

	$("#btn_14").on("click",function(){
		arr=action_14;
	});

	$("#btn_16").on("click",function(){
		arr=action_16;
	});

	$("#btn_18").on("click",function(){
		arr=action_18;
	});

	$("#btnNext").on("click", function(){
		var txt=arr[randomInt(1,arr.length)-1];
		while(txt == txt2){
			txt=arr[randomInt(1,arr.length)-1];
		}
		txt2=txt;
		
		$("#action-text").text(txt);
		console.log(123);
	});
})(); 