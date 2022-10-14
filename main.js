const Sform = document.querySelector('.form');
const Fname = document.querySelector('#first-name');
const Lname = document.querySelector('#last-name');
const Semail = document.querySelector('#email');
const Sphn = document.querySelector('#phone');
const btn = document.querySelector('#button');

btn.addEventListener('click', (e) =>{

    e.preventDefault();
    
    if(Fname.value === '' || Lname.value === '' || Semail.value === '' || Sphn.value === ''){

      alert("Please Enter Valid Details");

        Fname.value = '';
        Lname.value = '';
        Semail.value = '';
        Sphn.value = '';
    }

    else{

     

       localStorage.setItem('Fname', Fname.value);
       localStorage.setItem('Lname', Lname.value);
       localStorage.setItem('email', Semail.value);
       localStorage.setItem('phone', Sphn.value);

        alert('We Saved your details. Thank You!. Connect Soon');
        
        Fname.value = '';
        Lname.value = '';
        Semail.value = '';
        Sphn.value = '';

    }

});