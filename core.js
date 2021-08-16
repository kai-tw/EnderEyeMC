"use strict";
function getEq(xPos, zPos, angle) {
	let m = Math.tan(-angle / 180 * Math.PI); // calculate the slope of equation.
    let b = xPos - m * zPos; // calculate the offset of equation.
    return [m, -1, -b];
}
function eqSolver(eq1, eq2) {
	/* Solve equations through Cramer's rule. */
	let detDel = eq1[0] * eq2[1] - eq1[1] * eq2[0];
    let detZ = eq1[2] * eq2[1] - eq1[1] * eq2[2];
    let detX = eq1[0] * eq2[2] - eq1[2] * eq2[0];
    return [detZ / detDel, detX / detDel];
}
function averagePoint(points) {
	let x = 0, z = 0;
	points.forEach(function(point) {
		z += point[0];
		x += point[1];
	});
	z /= points.length;
	x /= points.length;
	return [z, x];
}