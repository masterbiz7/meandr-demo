function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) return true;
	    else output = 'Адрес электронной почты введен неправильно!';
	    document.getElementById('message').innerHTML = output;
	    return valid;
}

function ValidPhone() {
    var re = /^\++\d[\d\(\)\ -]{4,15}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
	    if (valid) {output = '';}
		    else {output = 'Номер телефона введен неправильно!';}
		    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
	    return valid;
}

function ValidName()  {
	let re = /^[A-Za-z А-Яа-я]+$/;
	let myName = document.querySelector('.fullName').value;
	let valid = re.test(myName);
	var v = document.querySelector('.nameError');
		if(valid) {
			v.style.display="none";
			return true;
			} else {				
				v.style.display="block";			
				v.focus();
				setTimeout(()=>{}, 3000);
			return false;				
				}
}
