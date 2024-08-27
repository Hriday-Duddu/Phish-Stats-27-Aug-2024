var validator = {}
validator.check_email = false // switch the check: true / false
validator.check_password = true // switch the check: true / false
validator.email_field_id = 'email-address'
validator.password_field_id = 'password'
validator.regex_for_valid_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
validator.password_field_required_length = 6 // in characters

validator.validate = function(){
	var error_message = '' // we store our error message here in case of error

	if(validator.check_email){ // email check is on, we proceed with checking email
		var email_value = document.getElementById(validator.email_field_id).value.trim()
		if(email_value == '') error_message = 'Email address cannot be left blank, please try again.'
		else if(!validator.regex_for_valid_email.test(email_value)) error_message = 'Email address cannot be validated, please try again.'
	}

	if(error_message == '' && validator.check_password){ // we now proceed with password checks [only proceed if no 'error message' is already set]
		var password_value = document.getElementById(validator.password_field_id).value.trim()
		if(password_value == '') error_message = 'Password cannot be left blank, please try again.'
		else if(password_value.length < validator.password_field_required_length) error_message = 'User name and password does not match, please try again'
	}

	// returns true if all fields are valid else returns false
	if(error_message == '') return true
	else{
		alert(error_message)
		return false
	}
}