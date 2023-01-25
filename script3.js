document.querySelector("form").addEventListener("submit", function(e) {
    let valid = true;
  
    // Validate photo
    let photo = document.querySelector("#photo").files[0];
    if (!photo || photo.size > 4194304) {
      alert("Please select a valid photo with size less than 4MB");
      valid = false;
    }
  
    // Validate hsc
    let hsc = document.querySelector("#hsc").files[0];
    if (!hsc || hsc.size > 4194304) {
      alert("Please select a valid HSC mark sheet with size less than 4MB");
      valid = false;
    }
  
    // Validate ssc
    let ssc = document.querySelector("#ssc").files[0];
    if (!ssc || ssc.size > 4194304) {
      alert("Please select a valid SSC mark sheet with size less than 4MB");
      valid = false;
    }
  
    // Validate semesters
    let semesters = document.querySelector("#semesters").files[0];
    if (!semesters || semesters.size > 10485760) {
      alert("Please select a valid all semesters mark sheet with size less than 10MB");
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault();
    }
  });
  function test(){
    var Recentpassportsizephotograph=document.getElementById("photo").value;
    var HSCmarksheet=document.getElementById("hsc").value;
    var SSCmarksheet=document.getElementById("ssc").value;
    var Allsemestersmarksheet=document.getElementById("semesters").value;
     
    var Recentpassportsizephotographa =localStorage.setItem("Recentpassportsizephotograph", Recentpassportsizephotograph);
    var HSCmarksheeta =localStorage.setItem("HSCmarksheet", HSCmarksheet);
    var SSCmarksheea =localStorage.setItem("SSCmarksheet", SSCmarksheet);
    var RAllsemestersmarksheeta =localStorage.setItem("Allsemestersmarksheet", Allsemestersmarksheet);
  
  }