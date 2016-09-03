(function() {

	var app = angular.module('webdxd', []);

	app.controller('AppCtrl', function($http) {
		var app = this;
		$http.get('http://localhost:3000/student').success(function(student) {
		  	app.student = student;
		});

		app.selectStudent = function(student) {
			$http.get('http://localhost:3000/student/' + student._id).success(function(student) {
				app.selectedStudent = student;
		  		app.selectedStudent.fullName = student.firstName + " " + student.lastName;
			});
		}
	});

})();

