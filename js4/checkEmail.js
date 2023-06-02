function isValidEmail(email) {
    if (email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')) {
      // If the email does not contain a single '@' symbol
      return false;
    }
  
    if (email.indexOf(' ') !== -1) {
      // If the email contains a space
      return false;
    }
  
    var parts = email.split('@');
    var domain = parts[1];
  
    if (domain.indexOf('.') === -1 || domain.length < 2) {
      // If the domain does not contain a '.' symbol or has less than 2 characters
      return false;
    }
  
    return true;
  }
  
  
  var email = 'example@example.com';
  var isValid = isValidEmail(email);
  console.log(isValid); // Output: true
  
  var invalidEmail = 'example@com';
  var isInvalid = isValidEmail(invalidEmail);
  console.log(isInvalid); // Output: false
  
  var invalidEmail2 = 'example @example.com';
  var isInvalid2 = isValidEmail(invalidEmail2);
  console.log(isInvalid2); // Output: false
  
  