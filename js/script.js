$(function() {

	var rows = [],
		gameState = { numTilesRemaining : 0 };

	var answerDiv = $("#answer");
	var answerTextSpan = $("#answer #text");

	var showAnswer = function(answer) {
		if (!answer) {
			answer = "(TBD, Sorry)";
		}
		answerTextSpan.text(answer.toUpperCase());
		answerDiv.show();
		answerDiv.focus();
		--gameState.numTilesRemaining;
	};

	var hideAnswer = function(e) {
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
	$.each(data, function(category, answers) {
		var headerCell = $("<th>").text(category.toUpperCase());
		headerRow.append(headerCell);

		// Setup answers rows
		$.each(answers, function(rowIndex, answer) {
			if (!rows[rowIndex]) {
				rows[rowIndex] = [];
			}

			if (!rows[rowIndex][categoryIndex]) {
				rows[rowIndex][categoryIndex] = answer;
			}
		});

		++categoryIndex;

	});

	var tbody = $("#cells tbody");
	$.each(rows, function(rowIndex, columns) {
		var tr = $("<tr>");
		$.each(columns, function(columnIndex, cell) {
			var td = $("<td>")
				.text(cell.value)
				.attr("data-category-index", columnIndex)
				.attr("data-row-index", rowIndex)
				.attr("data-answer", cell.answer);

			td.click(function(e) {
				var el = $(e.target);
				if (!el.hasClass("clicked")) {
					showAnswer(el.attr("data-answer"));
					el.text("");
					el.addClass("clicked");
				}
			})
			tr.append(td);
			++gameState.numTilesRemaining;

		});
		tbody.append(tr);
	});

});
