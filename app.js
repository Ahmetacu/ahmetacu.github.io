// Navbar dropdown ögeleri açmak ve kapamak için gerekli js kod blogu
document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
      if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'block';
      }
    });
  });
// Form Validator
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone= document.getElementById('phone');
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı bir mail adresi');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });  
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    }else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
    }else {
        success(input);
    }
}




function isNumber(input){
  return typeof(input.value) === 'number';
}

function checkPhone(input) {
  if(isNumber(input)){
    success(input);
  } else {
    error(input, 'hatalı bir telefon numarası');
  }}



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = document.getElementById('form');
    const username = document.getElementById('Ad-Soyad');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone')
    
    function error(input, message) {
        input.className = 'form-control is-invalid';
        const div = input.nextElementSibling;
        div.innerText = message;
        div.className = 'invalid-feedback';
    }
    
    function success(input) {
        input.className = 'form-control is-valid';
    }
    
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        if(re.test(input.value)) {
            success(input);
        } else {
            error(input, 'hatalı bir mail adresi');
        }
    }
    
    function checkRequired(inputs) {
        inputs.forEach(function(input) {
            if(input.value === '') {
                error(input, `${input.id} is required.`);
            } else {
                success(input);
            }
        });  
    }
    
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            error(input, `${input.id} en az ${min} karakter olmalıdır`);
        }else if (input.value.length > max) {
            error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
        }else {
            success(input);
        }
    }
    
    
    function checkPhone(input) {
        var exp = /^\d{10}$/;   
        if(!exp.test(input.value)) {error(input, 'Telefon 10 karakterli ve sayı türünde  olmalıdır.');} 
            
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        checkRequired([username,email,phone]);
        checkEmail(email);
        checkLength(username,5,15);      
        checkPhone(phone);
    });
    checkRequired([username,email,phone]);
    checkEmail(email);
    checkLength(username,5,15);
    
  
    checkPhone(phone);
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all img elements on the page
    var images = document.getElementsByTagName('img');

    // Loop through all img elements and add loading="lazy" attribute
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('loading', 'lazy');
    }
});


