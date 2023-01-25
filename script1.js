
  function test(){
    var name1=document.getElementById("first-name").value;
    var name2=document.getElementById("last-name").value;
    var dateOfBirth=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var fname1=document.getElementById("father-first-name").value;
    var fname2=document.getElementById("father-last-name").value;
    var mname1=document.getElementById("mother-first-name").value;
    var mname2=document.getElementById("mother-last-name").value;
    var gender=document.getElementById("gender-female").value;
    var Nationality=document.getElementById("nationality").value;
    var HomeAddress=document.getElementById("address").value;
    var city=document.getElementById("city").value;
    var country=document.getElementById("country").value;
    var TelephoneHome=document.getElementById("telephone-home").value;
    var telephoneMobile=document.getElementById("telephoneMobile").value;

    var name1a =localStorage.setItem("name1", name1);
    var name2a =localStorage.setItem("name2", name2);
    var dateOfBirtha =localStorage.setItem("dateOfBirth", dateOfBirth);
    var emaila =localStorage.setItem("email", email);
    var fname1a =localStorage.setItem("fname1", fname1);
    var fname2a =localStorage.setItem("fname2", fname2);
    var mname1a =localStorage.setItem("mname1", mname1);
    var mname2a  =localStorage.setItem("mname2", mname2);
    var gendera =localStorage.setItem("gender", gender);
    var Nationalitya =localStorage.setItem("Nationality", Nationality);
    var HomeAddressa =localStorage.setItem("HomeAddress", HomeAddress);
    var citya =localStorage.setItem("city", city);
    var countrya =localStorage.setItem("country", country);
    var TelephoneHomea =localStorage.setItem("TelephoneHome", TelephoneHome);
    var telephoneMobilea =localStorage.setItem("telephoneMobile", telephoneMobile);
   
 
  }

  