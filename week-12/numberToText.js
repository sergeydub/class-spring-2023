var ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

function convert_thousands(num) {
	if (num > 999) {
		return "?";
	} else {
		return convert_hundreds(num)
	}
}

function convert_hundreds(num) {
	if (num > 99) {
		return "?";
	} else {
		return convert_tens(num);
	}
}

function convert_tens(num) {
	if (num > 19) {
		return tens[Math.floor(num / 10)] + " " + convert_teens_and_onces(num % 10);
	} else {
		return convert_teens_and_onces(num);
	}
}

function convert_teens_and_onces(num) {
	if (num > 9) {
		return teens[num % 10];
	} else {
		return ones[num];
	}
}

function convert(num) {
	if (num == 0) {
		return "Zero";
	} else {
		return convert_thousands(num);
	}
}

var n = 0;
for (;n < 99; n++)
    console.log(n, convert(n));