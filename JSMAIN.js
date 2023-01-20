var ktrkvc = { 2: 42, 3: 43, 4: 44, 5: 45, 6: 46, 7: 48, 8: 49, 9: 50, 10: 51, 11: 52, 12: 53, 13: 54, 14: 55, 15: 56, 16: 57, 17: 58, 18: 59, 19: 60, 20: 60, 21: 61, 22: 62, 23: 63, 24: 64, 25: 65, 26: 66,27: 66, 28: 67, 29: 68, 30: 69, 31: 69, 32: 70, 33: 70, 34: 70, 35: 71, 36: 71, 37: 72, 38: 73, 39: 74, 40: 74, 41: 74, 42: 75, 43: 75, 44: 75, 45: 76, 46: 77, 47: 78, 48: 78, 49: 79, 50: 80, 51: 80, 52: 81, 53: 81, 54: 82, 55: 82, 56: 83, 57: 84, 58: 85, 59: 85, 60: 86, 61: 87, 62: 87, 63: 88, 64: 88, 65: 88, 66: 89, 67: 90, 68: 91, 69: 92, 70: 93, 71: 93, 72: 94, 73: 95, 74: 95, 75: 96, 76: 96, 77: 98, 78: 99, 79: 100, 80: 101, 81: 102, 82: 103, 83: 104 },
	ktrj = { 5: 44, 6: 46, 7: 47, 8: 48, 9: 50, 10: 51, 11: 52, 12: 53, 13: 55, 14: 55, 15: 57, 16: 57, 17: 59, 18: 60, 19: 60, 20: 62, 21: 62, 22: 63, 23: 64, 24: 64, 25: 66, 26: 67, 27: 67, 28: 68, 29: 69, 30: 69, 31: 70, 32: 71, 33: 71, 34: 72, 35: 73, 36: 74, 37: 74, 38: 75, 39: 76, 40: 76, 41: 77, 42: 78, 43: 78, 44: 78, 45: 79, 46: 80, 47: 81, 48: 81, 49: 82, 50: 83, 51: 83, 52: 84},
	ktrh = { 6: 43, 7: 44, 8: 46, 9: 48, 10: 49, 11: 51, 12: 52, 13: 53, 14: 55, 15: 56, 16: 58, 17: 59, 18: 60, 19: 61, 20: 62, 21: 63, 22: 64, 23: 65, 24: 66, 25: 67, 26: 68, 27: 69, 28: 70, 29: 71, 30: 72, 31: 72, 32: 73, 33: 74, 34: 75, 35: 75, 36: 76, 37: 77, 38: 78, 39: 78, 40: 79, 41: 79, 42: 80, 43: 80, 44: 81, 45: 82, 46: 83, 47: 83, 48: 84, 49: 84, 50: 85, 51: 85, 52: 86, 53: 86, 54: 87, 55: 87, 56: 88, 57: 88, 58: 89, 59: 89, 60: 90, 61: 90, 62: 90, 63: 91, 64: 91, 65: 92, 66: 93, 67: 93, 68: 93, 69: 94, 70: 94, 71: 95, 72: 95, 73: 96, 74: 96, 75: 96, 76: 97, 77: 97, 78: 98, 79: 98, 80: 99, 81: 99 },
	ktrp = { 1: 42, 2: 44, 3: 45, 4: 45, 5: 46, 6: 47, 7: 48, 8: 49, 9: 50, 10: 50, 11: 51, 12: 52, 13: 53, 14: 54, 15: 54, 16: 55, 17: 56, 18: 57, 19: 68, 20: 59, 21: 59, 22: 60, 23: 61, 24: 62, 25: 63, 26: 63 },
	ktrms = { 1: 35, 2: 37, 3: 39, 4: 41, 5: 42, 6: 44, 7: 45, 8: 47, 9: 48, 10: 49, 11: 50, 12: 52, 13: 53, 14: 54, 15: 55, 16: 56, 17: 57, 18: 58, 19: 59, 20: 60, 21: 61, 22: 62, 23: 63, 24: 63, 25: 64, 26: 65,27: 66, 28: 67, 29: 67, 30: 68, 31: 69, 32: 70, 33: 70, 34: 71, 35: 72, 36: 73, 37: 73, 38: 74, 39: 75, 40: 75, 41: 76, 42: 77, 43: 77, 44: 78, 45: 78, 46: 79, 47: 79, 48: 80, 49: 81, 50: 81, 51: 82, 52: 82, 53: 83, 54: 83, 55: 84, 56: 84, 57: 85, 58: 85, 59: 86, 60: 86, 61: 87, 62: 87, 63: 88, 64: 88, 65: 89, 66: 89, 67: 89, 68: 90, 69: 90, 70: 91, 71: 91, 72: 91, 73: 92, 74: 92, 75: 93, 76: 93, 77: 93, 78: 94, 79: 94, 80: 94, 81: 95, 82: 95 },
	rostarr = { 2: 0.13, 3: 0.23, 4: 1.56, 5: 1.95, 6: 5.46, 7: 7.02, 8: 25, 9: 35.9, 10: 48.4, 11: 64, 12: 84.3, 13: 115.5, 14: 135.8, 15: 157.7, 16: 181.1, 17: 203, 18: 221.7, 19: 238.8, 20: 256, 21: 267, 22: 278, 23: 289, 24: 300, 25: 346, 26: 356, 27: 366, 28: 376, 29: 386, 30: 399, 31: 411, 32: 424, 33: 437, 34: 450, 35: 462, 36: 474, 37: 486, 38: 498, 39: 507, 40: 512, 41: 517, 42: 515 },
	vesarr = { 2: 0.0000004, 3: 0.0000695, 4: 0.0005, 5: 0.45, 6: 0.9, 7: 0.7, 8: 1, 9: 2, 10: 4, 11: 7, 12: 14, 13: 23, 14: 43, 15: 70, 16: 100, 17: 140, 18: 190, 19: 240, 20: 300, 21: 360, 22: 430, 23: 501, 24: 600, 25: 660, 26: 760, 27: 875, 28: 1005, 29: 1153, 30: 1319, 31: 1502, 32: 1702, 33: 1918, 34: 2146, 35: 2383, 36: 2622, 37: 2859, 38: 3083, 39: 3288, 40: 3462, 41: 3597, 42: 3685 },
	z = {1: {n: "Водолей", d: 21}, 2: {n: "Рыбы", d: 19}, 3: {n: "Овен", d: 21}, 4: {n: "Телец", d: 21}, 5: {n: "Близнецы", d: 22}, 6: {n: "Рак", d: 22}, 7: {n: "Лев", d: 21}, 8: {n: "Дева", d: 24}, 9: {n: "Весы", d: 23}, 10: {n: "Скорпион", d: 23}, 11: {n: "Стрелец", d: 23}, 12: {n: "Козерог", d: 22}};

function Rasch(date) {
	var CNow = getCurDate('#date'), J = date.getDate(), M = date.getMonth(), A = date.getFullYear(), week = 7;

	if (date.getTime()<=CNow.getTime()) {
		$('#date').val(buildDate(CNow.getDate(), CNow.getMonth(), CNow.getFullYear())); // текущая дата
		if (!$('#man-date').val()) $('#man-date').val($('#date').val());
		var per = getPer(date), perweek = Math.floor(per/7);
		$('#preg-period').val(dispPer(per)); // срок беременности

		if (per >= 14 && per <= 294) {
			// если входит в диапазон берем значение из массива
			$('#rost').val(dispRost(rostarr[perweek]));
			$('#ves').val(dispVes(vesarr[perweek]));
		} else if (per < 14) {
			$('#rost').val('');
			$('#ves').val('');
		} else {
			$('#rost').val('больше 51 см 5 мм');
			$('#ves').val('больше 3 кг 685 гр');
		}
	} else {
		clearFields();
	}

	$('#zach').val(buildDate(J+2*week, M, A));
	$('#d7').val(buildDate(J+7*week, M, A));
	$('#d8').val(buildDate(J+8*week, M, A));
	$('#o7').val(buildDate(J+7*week, M, A));
	$('#d12').val(buildDate(J+12*week, M, A));
	$('#dd8').val(buildDate(J+11*week, M, A));
	$('#dd13-6').val(buildDate(J+13*week+6, M, A));
	$('#d11').val(buildDate(J+11*week, M, A));
	$('#d13-6').val(buildDate(J+13*week+6, M, A));
	$('#o10').val(buildDate(J+10*week, M, A));
	$('#o13-5').val(buildDate(J+10*week, M, A));
	$('#o12-2').val(buildDate(J+12*week+2, M, A));
	$('#o12-4').val(buildDate(J+12*week+4, M, A));
	$('#d15').val(buildDate(J+15*week, M, A));
	$('#d16-6').val(buildDate(J+16*week+6, M, A));
	$('#o15').val(buildDate(J+15*week, M, A));
	$('#o16-6').val(buildDate(J+16*week+6, M, A));
	$('#d18').val(buildDate(J+18*week, M, A));
	$('#d20-6').val(buildDate(J+20*week+6, M, A));
	$('#o20').val(buildDate(J+20*week, M, A));
	$('#o20-6').val(buildDate(J+20*week+6, M, A));
	var notp = (+$('#notp').val() > 0) ? +$('#notp').val() : 0;
	if ($('.preg-col:checked').val() == 0) {
		$('#dotp').val('140');
		$('#otp').val(buildDate(J+30*week, M, A));
		$('#otpto').val(buildDate(J+50*week - 1, M, A));
		$('#notpat').val((notp > 0) ? buildDate(J+30*week - notp, M, A) : '');
		$('#notpto').val((notp > 0) ? buildDate(J+30*week - 1, M, A) : '');
	} else {
		$('#dotp').val('194');
		$('#otp').val(buildDate(J+28*week, M, A));
		$('#otpto').val(buildDate(J+55*week+4, M, A));
		$('#notpat').val((notp > 0) ? buildDate(J+28*week - notp, M, A) : '');
		$('#notpto').val((notp > 0) ? buildDate(J+28*week - 1, M, A) : '');
	}
	$('#d32').val(buildDate(J+30*week, M, A));
	$('#d34-6').val(buildDate(J+34*week, M, A));
	$('#o32').val(buildDate(J+32*week, M, A));
	$('#o33-3').val(buildDate(J+33*week+3, M, A));
	$('#d38').val(buildDate(J+37*week, M, A));
	$('#d40-6').val(buildDate(J+41*week+6, M, A));
	$('#o40').val(buildDate(J+40*week, M, A));
	$('td.td-z').html(getZodiac(J+40*week, M, A));

	return false;
}

// форматируем вывод даты
function buildDate(JJ, MM, AA) {
	var D = new Date(AA, MM, JJ), j = D.getDate(), m = D.getMonth()+1, a = D.getFullYear();
	if ( j < 10 ) j = '0' + j;
	if ( m < 10 ) m = '0' + m;

	return j + "." + m + "." + a;
}

// форматируем вывод даты
function getZodiac(JJ, MM, AA) {
	var D = new Date(AA, MM, JJ), j = D.getDate(), m = D.getMonth()+1, i = (j < z[m].d) ? ((m == 1) ? 12 : m-1) : m;
	return '<i class="z z' + i + '"></i> ' + z[i].n;
}

// считаем дни с текущей даты
function getPer( DD ) {
	var T_NOW = getCurDate('#date'), T_DD = DD.getTime();
	return Math.floor( (T_NOW - T_DD) / (1000 * 3600 * 24) );
}

// форматируем вывод периода
function dispPer( N ) {
	var S = Math.floor (N/7), J = (N - (S*7));
	return ((S > 0) ? S +" "+getPlural(S, ['неделя', 'недели', 'недель'])+" " : '') + ((J > 0) ? J +" "+getPlural(J, ['день', 'дня', 'дней']) : '');
}

function getPlural(n, text) {
	return text[plural=((((n%10)==1)&&((n%100)!=11))?(0):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(1):2))];
}

// форматируем вывод роста
function dispRost( N ) {
	var s = Math.floor(N/10), m = calcFloatSubtraction(N, s*10);
	return ((s > 0) ? s +" см " : '') + ((m > 0) ? m +" мм" : '');
}

// форматируем вывод веса
function dispVes( N ) {
	var k = Math.floor(N/1000), g = calcFloatSubtraction(N, k*1000);
	return ((k > 0) ? k +" кг " : '') + ((g > 0) ? g +" гр" : '');
}

// фикс для правильного вычитания дробных чисел
function calcFloatSubtraction( x, y ) {
	var l = (x+1).toString().split(/\./)[1], n = (l != undefined) ? l.length : 0, mult = Math.pow(10, n), tt = Math.floor(x*mult - y*mult)/mult;
    return tt.toFixed(n);
}

function clearFields() {
	$('.calc-table-res input, .calc-wrapper input:not(#but, #date)').val('');
	$('td.td-z').html('');
}

// проверка правильности ввода даты
function isValidDate(value, userFormat) {
  // Используем формат по умолчанию, если ничего не указано
  userFormat = userFormat || 'mm/dd/yyyy';

  // Находим разделитель исключая символы месяца, дня и года (в английском варианте - m, d, y)
  var delimiter = /[^mdy]/.exec(userFormat)[0];

  // Создаем массив из месяца, дня и года,
  // то есть мы знаем порядок формата
  var theFormat = userFormat.split(delimiter);

  // Создаем массив из даты пользователя
  var theDate = value.split(delimiter);

  function isDate(date, format) {
    var m, d, y, len = format.length, f;
    for (i=0; i < len; i++) {
      f = format[i];
      if (/m/.test(f)) m = date[i];
      if (/d/.test(f)) d = date[i];
      if (/y/.test(f)) y = date[i];
    }
    return (
      m > 0 && m < 13 &&
      y && y.length === 4 &&
      d > 0 &&
      // Проверяем правильность дня месяца
      d <= (new Date(y, m, 0)).getDate()
    ) ? new Date(y, m-1, d) : false;
  }

  return isDate(theDate, theFormat);
}

// форматируем вывод веса
function getCurDate(el) {
	var date;
	if (el) date = isValidDate($(el).val(), 'dd.mm.yyyy');

	if (!date) {
		date = new Date();
		date.setTime(date.getTime() - ddif); // корректируем текущую дату
	}
	return date;
}

// форматируем вывод веса
function showError(el) {
	$(el).addClass('error');
}

// форматируем вывод веса
function hideError() {
	$('#content .error').removeClass('error');
}

function pregnancyCalc() {
	var day = 86400000;
	if ($('#method option:selected').val() == 'ktr') {
		var ktr = $('#ktr').val(), date = getCurDate('#ktr-date'), sel = $('#ktr-method option:selected'), rest = ktr < +sel.data('at') || ktr > +sel.data('to'), ktrarr = window['ktr' + sel.val()];

		if (rest) {
			clearFields();
			showError('#ktr, .ktr-desc');
			return false
		};
		$('#ktr-date').val(buildDate(date.getDate(), date.getMonth(), date.getFullYear()));

		date.setTime(date.getTime() - ktrarr[ktr]*day);
	} else if ($('#method option:selected').val() == 'man') {
		var mw = $('#man-w').val(), md = $('#man-d').val(), date = getCurDate('#man-date');

		date.setTime(date.getTime() - (mw*day*7 + md*day));
	} else if ($('#method option:selected').val() == 'uzd') {
		var mw = $('#uzd-w').val(), md = $('#uzd-d').val(), date = getCurDate('#menstrday');

		date.setTime(date.getTime() - (mw*day*7 + md*day));
	} else {
		var date = isValidDate($('#menstrday').val(), 'dd.mm.yyyy');

		if (!date) {
			clearFields();
			$('.ktr-desc').text('Уточните дату');
			showError('#menstrday, .ktr-desc');

			return false
		};
		switch ($('#method option:selected').val()) {
		  	case 'menstr':
		  		var cycle = 28, luteal = 14;
		    	if ($('#cycle').val() != "") cycle = parseInt($('#cycle').val());
				if (cycle < 21 || cycle > 35) {
					showError('#cycle, #cycle-desc');
				}
				if ($('#luteal').val() != "") luteal = parseInt($('#luteal').val());
				if (luteal < 9 || luteal > 16) {
					showError('#luteal, #luteal-desc');
				}
				date.setTime(date.getTime() + cycle*day - luteal*day - 14*day);
		    	break
		    case 'conception':
		    case 'zab':
		    	date.setTime(date.getTime() - 14*day);
		    	break
		    case 'pods':
		    	date.setTime(date.getTime() - 19*day);
		    	break
		    case 'isn':
		    	date.setTime(date.getTime() - 14*day);
		    	break
		}
	}
	hideError();
	Rasch(date);
	return false;
}

// печать
function print_doc(){
	window.print();
}

$(function () {
	var nn = new Date();
	ddif = (+$("#content").data("time")) ? (nn.getTime() - $("#content").data("time") * 1000) : 0;

	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Предыдущий',
		nextText: 'Следующий',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);

	$(".picker").datepicker({
        "changeMonth": true,
        "changeYear": true,
        "dateFormat": "dd.mm.yy",
        "onSelect": function(str, obj) {
            pregnancyCalc();
        }
    }).keyup(function(){
        pregnancyCalc();
    });

    $("#o40").datepicker({
        "changeMonth": true,
        "changeYear": true,
        "dateFormat": "dd.mm.yy",
        "onSelect": function(str, obj) {
            o40calc(str);
        }
    }).keyup(function(){
        o40calc($(this).val());
    });

    function o40calc(text) {
    	var d = isValidDate(text, 'dd.mm.yyyy');
    	if (d) {
			switch ($('#method option:selected').val()) {
			  	case 'menstr':
			    	var cycle = 28, luteal = 14;
			    	if ($('#cycle').val() != "") cycle = parseInt($('#cycle').val());
					if ($('#luteal').val() != "") luteal = parseInt($('#luteal').val());

					$("#menstrday").val(buildDate(d.getDate()-cycle+luteal-266, d.getMonth(), d.getFullYear()));
			    	break
			    case 'conception':
			    case 'zab':
			    	$("#menstrday").val(buildDate(d.getDate()-266, d.getMonth(), d.getFullYear()));
			    	break
			    case 'pods':
			    	$("#menstrday").val(buildDate(d.getDate()-262, d.getMonth(), d.getFullYear()));
			    	break
			    case 'isn':
			    	$("#menstrday").val(buildDate(d.getDate()-267, d.getMonth(), d.getFullYear()));
			    	break
			    case 'ktr':
			    	$("#menstrday").val(buildDate(d.getDate()-1-38*7, d.getMonth(), d.getFullYear()));
			    	break
			    case 'man':
			    	var date = new Date(d.getFullYear(), d.getMonth(), d.getDate()-40*7), N = getPer(date), S = Math.floor(N/7), J = (N - (S*7));
			    	$("#man-w").val((S > 0) ? S : '');
			    	$("#man-d").val((J > 0) ? J : '');
			    	break
			   	case 'uzd':
			    	var date = new Date(d.getFullYear(), d.getMonth(), d.getDate()-40*7), N = getPer(date), S = Math.floor(N/7), J = (N - (S*7));
			    	$("#uzd-w").val((S > 0) ? S : '');
			    	$("#uzd-d").val((J > 0) ? J : '');
			    	break
			}


			pregnancyCalc();
		}
    }

    //$("#notp, #ktr").keyup(function(){
    //    pregnancyCalc();
    //});

    $('#method').change(function(){
    	var t = $('option:selected', this).attr('title');
    	$(this).attr('title', (t) ? t : '');
    	switch ($(this).val()) {
		  case "menstr": {
		    $('.tr-menstr, #menstrday').show();
		    $('#ktr, .man-wrap, .ktr-desc, .tr-ktr, .tr-man, .tr-uzd').hide();
		    break;
		  }
		  case "ktr": {
		  	var sel = $('#ktr-method option:selected'), at = sel.data('at'), to = sel.data('to');
		  	$('#ktr, .ktr-desc, .tr-ktr').show();
		    $('.ktr-desc').text('мм (от ' + at + ' до ' + to + ' мм)');
		    $('#menstrday, .man-wrap, .tr-menstr, .tr-man, .tr-uzd').hide();
		    break;
		  }
		  case "man": {
		    $('.man-wrap, .tr-man').show();
		    $('#menstrday, #ktr, .ktr-desc, .tr-ktr, .tr-menstr, .tr-uzd').hide();
		    break;
		  }
		  case "uzd": {
		    $('#menstrday, .tr-uzd').show();
		    $('.man-wrap, #ktr, .ktr-desc, .tr-ktr, .tr-menstr, .tr-man').hide();
		    break;
		  }
		  default: {
		    $('#menstrday').show();
		    $('.man-wrap, #ktr, .ktr-desc, .tr-ktr, .tr-man, .tr-menstr, .tr-uzd').hide();
		    break;
		  }
		}
		pregnancyCalc();
	});

	$('#ktr-method').change(function(){
    	var sel = $('option:selected', this), t = sel.attr('title'), at = sel.data('at'), to = sel.data('to');
    	$(this).attr('title', (t) ? t : '');
		$('.ktr-desc').text('мм (от ' + at + ' до ' + to + ' мм)');
		pregnancyCalc();
	});

	$('.preg-col').change(function(){
		pregnancyCalc();
	});

    // разрешаем вводить только числа
	$("#cycle, #luteal, #ktr, #notp, #man-w, #man-d, #uzd-w, #uzd-d").keyup(function(){
		var ar_str = $(this).val().split("");
		var r  = /\d{1}/;
		var nv = '';
		for(var i = 0; i < ar_str.length; i++)
		{
		      if(r.test(ar_str[i]))
			nv +=  ar_str[i];
		}
		$(this).val(nv);
		pregnancyCalc();
	});

	$('#date-created').text(buildDate(nn.getDate(), nn.getMonth(), nn.getFullYear()));

	$('a.tt').click(function(e){
		window.external.helpOpen($(this).attr('href'));
		return false;
	});
});
