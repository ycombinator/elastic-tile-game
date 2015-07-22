String.prototype.padLeft = function (paddingValue) {
   return String(paddingValue + this).slice(-paddingValue.length);
};

$(function() {

	// "Constants"
	var TIMER_SECONDS = 30;

	var rows = [],
		gameState = { numTilesRemaining : 0 },
		answerDiv = $("#answer"),
		answerTextDiv = $("#answer #text"),
		answerTimerDiv = $("#answer #timer"),
		timesUpAudio = new Audio("audio/times-up.wav"),
		timerId;

	var alertUser = function() {
		timesUpAudio.play();
		answerTextDiv.html("SORRY, <br />TIME'S UP");
	}

	var startTimer = function() {
		var secondsRemaining = TIMER_SECONDS;
		answerTimerDiv.text(":" + secondsRemaining.toString().padLeft("00"));
		timerId = setInterval(function() {
			--secondsRemaining;
			answerTimerDiv.text(":" + secondsRemaining.toString().padLeft("00"));

			if (secondsRemaining === 0) {
				clearInterval(timerId);
				alertUser();
			}
		}, 1000);
	}

	var stopTimer = function() {
		clearInterval(timerId);
	}

	var showAnswer = function(answer) {
		if (!answer) {
			answer = "(TBD, Sorry)";
		}
		answerTextDiv.text(answer.toUpperCase());
		answerDiv.show();
		answerDiv.focus();
		--gameState.numTilesRemaining;
		startTimer();
	};

	var hideAnswer = function(e) {
		stopTimer();
		answerDiv.hide();
		if (gameState.numTilesRemaining == 0) {
			window.location.reload();
		}
	};

	answerDiv.on("click", hideAnswer);
	answerDiv.on("keydown", function(e) {
		if (e.keyCode == 27) { // ESC
			hideAnswer();
		}
	});

	// Setup header row
	var headerRow = $("#headers thead tr");
	var categoryIndex = 0;
	$.each(data, function(category, tiles) {
		var headerCell = $("<th>").text(category.toUpperCase());
		headerRow.append(headerCell);

		// Setup answers rows
		$.each(tiles, function(rowIndex, tile) {
			if (!rows[rowIndex]) {
				rows[rowIndex] = [];
			}

			if (!rows[rowIndex][categoryIndex]) {
				rows[rowIndex][categoryIndex] = tile;
			}
		});

		++categoryIndex;

	});

	var tbody = $("#cells tbody");
	$.each(rows, function(rowIndex, tiles) {
		var tr = $("<tr>");
		$.each(tiles, function(columnIndex, tile) {

			// Choose random answer for tile
			var answers = tile.answers;
			if (!Array.isArray(answers)) {
				answers = [ answers ];
			}
			var randomIndex = Math.floor(answers.length * Math.random());
			var answer = answers[randomIndex];

			var td = $("<td>")
				.text(tile.value)
				.attr("data-category-index", columnIndex)
				.attr("data-row-index", rowIndex)
				.attr("data-answer", answer);

			td.click(function(e) {
				var el = $(e.target);
				if (!el.hasClass("clicked")) {
					showAnswer(el.attr("data-answer"));
					el.html("&nbsp;");
					el.addClass("clicked");
				}
			})
			tr.append(td);
			++gameState.numTilesRemaining;

		});
		tbody.append(tr);
	});

});
