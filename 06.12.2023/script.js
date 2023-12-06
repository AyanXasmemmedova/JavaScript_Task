let ad=document.getElementById("ad").value;
let soyad=document.getElementById("soyad").value;
let email=document.getElementById("email").value;
let parol=document.getElementById("parol").value;
if (ad !=="" && soyad!=="" && email !=="" && parol.length>=8 && parol.length<=16){  
    alert("Form dolduruldu");
} 
else {
    alert("Formu tam doldurun ve parolu duzgun uzunluqda daxil edin");
}



  