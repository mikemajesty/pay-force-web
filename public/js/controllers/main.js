angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function (data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function () {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function (data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		var salesData = {
			labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			datasets: [
				{
					label: "Back",
					fillColor: "rgba(19, 71, 34, 0.0)",
					strokeColor: "rgba(88, 188, 116, 1)",
					pointColor: "rgba(88, 188, 116, 1)",
					pointStrokeColor: "rgba(0,0,0,0.2)",
					pointHighlightStroke: "rgba(225,225,225,0.75)",
					data: [3400, 3400, 3400, 3400, 3400, 3400, 3400]
				},
				{
					label: "Middle",
					fillColor: "rgba(255, 172, 100, 0.0)",
					strokeColor: "rgba(255, 172, 100, 1)",
					pointColor: "rgba(255, 172, 100, 1)",
					pointStrokeColor: "rgba(0,0,0,0.2)",
					pointHighlightStroke: "rgba(225,225,225,0.75)",
					data: [3200, 3200, 3200, 3200, 3200, 3200, 3200]
				}
			]
		};
		var ctx = document.getElementById("salesData").getContext("2d");
		window.myLineChart = new Chart(ctx).Line(salesData, {
			pointDotRadius: 6,
			pointDotStrokeWidth: 2,
			datasetStrokeWidth: 3,
			scaleShowVerticalLines: false,
			scaleGridLineWidth: 2,
			scaleShowGridLines: true,
			scaleGridLineColor: "rgba(225, 255, 255, 0.015)",
			scaleOverride: true,
			scaleSteps: 9,
			scaleStepWidth: 500,
			scaleStartValue: 0,

			responsive: true

		});

		var channelSales = new ProgressBar.Circle('#channelSales', {
			color: '#e88e3c',
			strokeWidth: 5,
			trailWidth: 3,
			duration: 1000,
			text: {
				value: '0%'
			},
			step: function (state, bar) {
				bar.setText((bar.value() * 100).toFixed(0) + "%");
			}
		});
		var directSales = new ProgressBar.Circle('#directSales', {
			color: '#2bab51',
			strokeWidth: 5,
			trailWidth: 3,
			duration: 1000,
			text: {
				value: '0%'
			},
			step: function (state, bar) {
				bar.setText((bar.value() * 100).toFixed(0) + "%");
			}
		});
		channelSales.animate(0.64);
		directSales.animate(0.32);

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function (id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function (data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
		
	}]);