var update_statuses = function() {
	$.ajax({
		url: "http://usolve.co/db/getStudents?room_id=5",
		dataType: "html"
	}).done(function( result ) {
		if ( result == "-1" ) {
			$('.tarif_status').removeClass('active');
			$('.tarif_status').removeClass('disconnected');
			$('.tarif_status').addClass('error');
		}
		else {
			var jsonResult = JSON.parse(result);
			// for (var student in jsonResult) {
			// 	if (student.student_id == 3) {
			// 		if (student.status == 1) {
			// 			$('.tarif_status').removeClass('error');
			// 			$('.tarif_status').removeClass('disconnected');
			// 			$('.tarif_status').addClass('active');
			// 		}
			// 		else {
			// 			$('.tarif_status').removeClass('error');
			// 			$('.tarif_status').removeClass('active');
			// 			$('.tarif_status').addClass('disconnected');
			// 		}
			// 	}
			// }
					if (jsonResult[0].status == 1) {
						$('.tarif_status').removeClass('error');
						$('.tarif_status').removeClass('disconnected');
						$('.tarif_status').addClass('active');
					}
					else {
						$('.tarif_status').removeClass('error');
						$('.tarif_status').removeClass('active');
						$('.tarif_status').addClass('disconnected');
					}

		}
	});
};

$(document).ready(function() {
	setInterval(update_statuses, 1000);
});
