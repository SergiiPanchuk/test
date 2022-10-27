(function () {

	let canselBtn = document.querySelector(".button__cansel");
	let clearBtn = document.querySelector(".button__clear");
	let enterBtn = document.querySelector(".button__enter");

	let zero = document.querySelector(".button__zero");
	let one = document.querySelector(".button__one");
	let two = document.querySelector(".button__two");
	let three = document.querySelector(".button__three");
	let four = document.querySelector(".button__four");
	let five = document.querySelector(".button__five");
	let six = document.querySelector(".button__six");
	let seven = document.querySelector(".button__seven");
	let eight = document.querySelector(".button__eight");
	let nine = document.querySelector(".button__nine");


	function insert(num) {
		document.form.textview.value = document.form.textview.value + num;
	}

	function cansel() {
		document.form.textview.value = '';
	}

	function clear() {
		document.form.textview.value = document.form.textview.value.split('').slice(0,document.form.textview.value.length -1).join('');
	};

	function enter() {
		alert(document.form.textview.value);
	}

	function hide() {
		
	}




	canselBtn.addEventListener('click', clear);
	clearBtn.addEventListener('click', cansel);
	enterBtn.addEventListener('click', enter);

	zero.addEventListener('click', function () { insert("0") });
	one.addEventListener('click', function () { insert("1") });
	two.addEventListener('click', function () { insert("2") });
	three.addEventListener('click', function () { insert("3") });
	four.addEventListener('click', function () { insert("4") });
	five.addEventListener('click', function () { insert("5") });
	six.addEventListener('click', function () { insert("6") });
	seven.addEventListener('click', function () { insert("7") });
	eight.addEventListener('click', function () { insert("8") });
	nine.addEventListener('click', function () { insert("9") });
	point.addEventListener('click', function () { insert(".") })


})();