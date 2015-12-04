$(function() {
	$.ajax({
		url: "http://localhost:3000/stations/"
	}).done(function(data){
		var options = $("#testSelect");
		$.each(data, function() {
				options.append(new Option(this.name, this._id.$oid));
		});
	});
	
	$("#testButton").click(function() {
		$.ajax({
			url: "http://localhost:3000/stations/" + $("#testSelect").val()
		}).done(function(data){
			console.log(data.observations);
		});
	});
	
	$("#nappi").click(function() {
		$.ajax({
			url: "http://localhost:3000/users/new/Loffe/123456/",
			beforeSend: function() {console.log("START");}
		}).done(function(data){
			console.log(data.observations);
		});
	});
	
	
});