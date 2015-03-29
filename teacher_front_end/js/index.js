var App = angular.module('roomsApp', []);

App.controller('RoomsCtrl', function($scope, $http) {
  $http.get('http://usolve.co/db/getRooms?teacher_id=1')
       .then(function(res){
          $scope.rooms = res.data;                
        });
});

var currentlySelected;
$('.mstb-box a').on('click', function() {
	currentlySelected = $(this);
});

$('.r-to-l').on('click', function() {
	currentlySelected.remove();
	$('#box-1').children().append(currentlySelected);
	rebindAndReset();
});

$('.l-to-r').on('click', function() {
	currentlySelected.remove();
	$('#box-2').children().append(currentlySelected);
	rebindAndReset();
});

function rebindAndReset() {
	//rebind the click event
	currentlySelected.on('click', function() {
		currentlySelected = $(this);
	});

	currentlySelected = null;
}

$('#submitPack').on('click', function() {
	var teacher_id = 1;
	var name = $('#name_box').val();
	var funcs = '[';
	$('#box-1 ul li').each( function( index ) {
		funcs += '%22' + $(this).text() + '%22,';
	});
	if (funcs.length > 1) {
		funcs = funcs.substring(0, funcs.length - 1);
	}
	funcs += ']';
	var url = "http://usolve.co/db/mkpack?teacher_id=" + teacher_id +
			  "&name=" + name + 
			  "&funcs=" + funcs;
	$.ajax({
		url: url,
		dataType: "html"
	}).done(function( result ) {
		if ( result == "-1" ) {
			alert("There was an error.  Sent this url: " +  url);
		}
		else {
			alert(result);
		}
	});

	$('#box-1 a').each(function (index) {
		currentlySelected = $(this);
		currentlySelected.remove();
		$('#box-2').children().append(currentlySelected);
		rebindAndReset();
	});

});
