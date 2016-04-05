function loadData() {
    //Loading zones    
    var zones = ["Zone 1: Bayview/Hunter's Point", "Zone 2: Mission", "Zone 3: Visitacion Valley/OMI", "Zone 4: Western Addition/TL/SoMa"];
    addOptionsToSelect("zone", zones);

    //Loading housing status
    var hstatus = ["Permanent Housing", "Temporary Housing", "Homeless"];
    addOptionsToSelect("housing_status", hstatus);

    //Loading risk levels
    var rlevel = ["At Risk", "High Risk", "In Risk", "Out Of Risk"];
    addOptionsToSelect("risk_level", rlevel);

    //Loading races
    var races = ["African American", "American Indian/Native Alaskan", "Asian", "Declined To State", "Multi-Race", "Pacific Islander", "White/Caucasian", "Other", "Other (Specify)"];
    addOptionsToSelect("race", races);

    //Loading ethnicities
    var ethnicities = ["Hispanic/Latino", "Not Hispanic/Latino"];
    addOptionsToSelect("ethnicity", ethnicities);

    //Loading english fluencies
    var eFluencies = ["Fluent", "Not Fluent", "Somewhat Fluent"];
    addOptionsToSelect("english_fluency", eFluencies);

    //Loading home languages
    var hlangs = ["English", "Spanish", "Cantonese", "Japonese", "Khmer (Cambodian)", "Korean", "Laotian", "Mandarin", "Samoan", "Tagalog", "Vietnamese", "Other (Specify"];
    addOptionsToSelect("home_language", hlangs);

    //Loading genders
    var genders = ["Male", "Female", "Transmale", "Transfemale"];
    addOptionsToSelect("gender", genders);

    //Loading LGBT
    var lgtbs = ["Yes", "No", "Unsure"];
    addOptionsToSelect("lgbt", lgtbs);

    //Loading education status
    var eStatus = ["Enrolled In School", "Dropped Out", "HS Diploma/GED", "Homeschooled"];
    addOptionsToSelect("education_status", eStatus);

    //Loading current grade
    var cGrades = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];
    addOptionsToSelect("current_grade", cGrades);

    //Loading employment status
    var emStatus = ["Employed Full Time", "Employed Part Time", "Enrolled in Job Training", "Unemployed"];
    addOptionsToSelect("employment_status", emStatus);

    //Loading schools
    var schools = ["University of Michigan", "Cornell University", "Massachusetts Institute of Technology", "Carnegie Mellon University"];
    addOptionsToSelect("school", schools);

    //Loading special needs 
    var sNeeds = ["Yes", "No"];
    addOptionsToSelect("special_need", sNeeds);

    //Loading special needs description
    var sNeedsDesc = ["Attention Deficit/Hyperactivity Disorder (AD/HD)", "Autism Spectrum Disorder", "Emotional Disturbance", "Learning Difficulties/Disabilities", "Speech and/or Language Delays", "Other (Specify)"];
    //addOptionsToSelect("specific_need", sNeedsDesc);
    addOptionsToSelectClass("specific_need", sNeedsDesc);

    //Loading Client Status
    var clStatus = ["Pending", "Active", "Closed", "Potential"];
    addOptionsToSelect("client_status", clStatus);

    //Loading Reason For Close
    var rFClose = ["Deceased", "Moved", "Client Refusal", "Services No Longer Needed"];
    addOptionsToSelect("reason_for_close", rFClose);
}

function addOptionsToSelect(element, array){
    var x = document.getElementById(element);
    for (var index = 0; index < array.length; index++) {
        var option = document.createElement("option");
        var text = array[index];
        option.text = text;
        x.add(option);
    }
}

function addOptionsToSelectClass(element, array) {
    var allDivs = document.getElementsByClassName(element);
    for (var i = 0; i < allDivs.length; i++) {
        var x = allDivs[i];
        for (var index = 0; index < array.length; index++) {
            var option = document.createElement("option");
            var text = array[index];
            option.text = text;
            x.add(option);
        }
    }
}