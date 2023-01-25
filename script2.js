
  function test(){
    var HSCInstitutionname=document.getElementById("hscInstitution").value;
    var HSCBoard=document.getElementById("sscBoard").value;
    var ScoreinHSCinpercentage=document.getElementById("hscScore").value;
    var SSCInstitutionname=document.getElementById("sscInstitution").value;
    var SSCBoard=document.getElementById("sscBoard").value;
    var ScoreinSSinpercentage=document.getElementById("sscScore").value;
    var Currentlypursuing=document.getElementById("currentlyPursuing").value;
    var Currenteducationalinstitutionname=document.getElementById("currentInstitution").value;
    var Overallpercentage=document.getElementById("overallPercentage").value;
    var Currentbacklogsifany=document.getElementById("backlogs").value;
    

    var HSCInstitutionnamea =localStorage.setItem("HSCInstitutionname", HSCInstitutionname);
    var HSCBoarda =localStorage.setItem("HSCBoard", HSCBoard);
    var ScoreinHSCinpercentagea =localStorage.setItem("ScoreinHSCinpercentage", ScoreinHSCinpercentage);
    var SSCInstitutionnamea=localStorage.setItem("SSCInstitutionname", SSCInstitutionname);
    var SSCBoarda=localStorage.setItem("SSCBoard", SSCBoard);
    var ScoreinSSinpercentagea =localStorage.setItem("ScoreinSSinpercentage", ScoreinSSinpercentage);
    var Currentlypursuina =localStorage.setItem("Currentlypursuing", Currentlypursuing);
    var Currenteducationalinstitutionnamea  =localStorage.setItem("Currenteducationalinstitutionname", Currenteducationalinstitutionname);
    var Overallpercentagea =localStorage.setItem("Overallpercentage", Overallpercentage);
    var Currentbacklogsifanya =localStorage.setItem("Currentbacklogsifany", Currentbacklogsifany);
  }
  