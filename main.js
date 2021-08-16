"use strict";
document.getElementById("add-new-point").addEventListener("click", function() {
	let item = document.createElement("div");
	item.classList.add("item");
	item.innerHTML = "<div class='row'><span>X 座標</span><input type='number' step='0.001'></div><div class='row'><span>Z 座標</span><input type='number' step='0.001'></div><div class='row'><span>角度</span><input type='number' step='0.1'></div>";
	document.getElementById("point-list").appendChild(item);
});
document.getElementById("calculate").addEventListener("click", function() {
	let points = [];
	let list = document.getElementById("point-list").getElementsByClassName("item");
	for (let i = 0; i < list.length; i++)
		for (let j = i + 1; j < list.length; j++)
			points.push(eqSolver(getEq(
				list[i].getElementsByTagName("input")[0].value,
				list[i].getElementsByTagName("input")[1].value,
				list[i].getElementsByTagName("input")[2].value
			), getEq(
				list[j].getElementsByTagName("input")[0].value,
				list[j].getElementsByTagName("input")[1].value,
				list[j].getElementsByTagName("input")[2].value
			)));
	let result = averagePoint(points);
	document.getElementById("x-axis").innerText = result[1].toFixed(3);
	document.getElementById("z-axis").innerText = result[0].toFixed(3);
	console.log(points);
});
document.getElementById("reset").addEventListener("click", function() {
	document.getElementById("point-list").innerHTML = "";
	for (let i = 0; i < 2; i++)
		document.getElementById("add-new-point").click();
});