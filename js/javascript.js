// const minutesRatio =  ( secondsRatio + currentDate.getMinutes()) / 60 last ma 60 atla mate add karyu kem ke 1minutes ma 60seconds hoi che
// ( secondsRatio + currentDate.getMinutes()) jo apde secondration+getminytues nai karvi to 3 arow 1 jode move karse
// ( secondsRatio + currentDate.getMinutes ) secondRatio + GetMinutes atla mate kem ke second A minutes na percantage che 60 seconds = 1minute

setInterval(setClock, 1000);

const hourHand = document.querySelector(".hour");
const MinuteHand = document.querySelector(".minute");
const SecondHand = document.querySelector(".second");

// const hourHand = document.querySelector(["data-hour-hand"]);
// const MinuteHand = document.querySelector(["data-minute-hand"]);
// const SecondHand = document.querySelector(["data-hour-hand"]);

function setClock() {
	const currentDate = new Date();
	let secondsRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hourRatio = (minutesRatio + currentDate.getHours()) / 12;

	setRotation(SecondHand, secondsRatio);
	setRotation(MinuteHand, minutesRatio);
	setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
	element.style.transform = `rotate(${rotationRatio * 360}deg)`;
	// element.style.setProperty("--rotation", rotationRatio * 360);
}
