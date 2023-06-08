function validate(e) {

    e.preventDefault();

    var valid = true;

    //display warning if cat name is not entered
    if (profileForm.catname.value === "") {
        document.querySelector('#catNameWarning').textContent = "*Please enter Cat Name*";
        document.querySelector('#catname').style.borderColor = '#ff0000'
        valid = false;
    }

    // display warning if days needed are not checked

    const checkboxs = document.querySelectorAll('[name = "daysneeded"]');
    var checked = false
    for (var i = 0, l = checkboxs.length; i < l; i++) {
        if (checkboxs[i].checked) {
            checked = true
            break
        }
    }
    if (checked == false) {
        valid = false;
        document.querySelector('#daysNeededWarning').textContent = "*Please choose a Day*";
        
    }
    // // display warning if time arrive is not selected
    if (profileForm.timearrive.options.selectedIndex === 0) {
        valid = false;
        document.querySelector('#arriveTimeWarning').textContent = "*Select an arrive time*";
        document.querySelector('#timearrive').style.borderColor = '#ff0000'
        
    }


    // display warning if time leave is not selected
    if (profileForm.timeLeave.options.selectedIndex === -1) {
        document.querySelector('#leaveTimeWarning').textContent = "*Select a leave time*";
        document.querySelector('#timeLeave').style.borderColor = '#ff0000'
        valid = false;
        return
    }
    // display warning if time Leave is earlier than time arrive
    let a = document.querySelector('#timearrive').value
    let b = document.querySelector('#timeLeave').value
    if (a - b >= 0) {
        document.querySelector('#leaveTimeWarning').textContent = "*Leave time should later than arrive time*";
        valid = false;
        return

    }
    //display warning if describe diet is not entered
    if (document.querySelector("#specialDiet").style.display == "block") {
        if (profileForm.describediet.value === "") {
            document.querySelector('#describeDietWarning').textContent = "*Please describe diet*";
            document.querySelector('#describediet').style.borderColor = '#ff0000'
            valid = false;
            return
        }
    }
    //display warning if owner name is not entered
    if (profileForm.ownername.value == "") {
        document.querySelector('#ownerNameWarning').textContent = "*Please enter owner's name*";
        document.querySelector('#ownername').style.borderColor = '#ff0000'
        valid = false;
    }
    //display warning if owner's phone is not entered
    const daytime = document.querySelector('#daytimephone').value
    const cellphone = document.querySelector('#cellphone').value
 
    if (daytime == "" && cellphone == "") {
        document.querySelector('#daytimePhoneWarning').textContent = "*Please enter owner's cell phone or daytime phone*";
        document.querySelector('#daytimephone').style.borderColor = '#ff0000'
        document.querySelector('#cellphone').style.borderColor = '#ff0000'
        valid = false;
    }

    //display warning if contact name is not entered
    if (profileForm.contactName.value == "") {
        document.querySelector('#contactNameWarning').textContent = "*Please enter emergenct contact name*";
        document.querySelector('#contactName').style.borderColor = '#ff0000'
        valid = false;
    }
    //display warning if contact phone is not entered
    if (profileForm.contactPhone.value == "") {
        document.querySelector('#contactPhoneWarning').textContent = "*Please enter emergenct contact phone*";
        document.querySelector('#contactPhone').style.borderColor = '#ff0000'
        valid = false;
    }



    //display warning if terrieorial is not entered
    if (document.querySelector("#describe").style.display == "block") {
        if (profileForm.terrirotialdescribe.value === "") {
            document.querySelector('#terrirotialDescribeWarning').textContent = "*Please describe terrirotial*";
            document.querySelector('#terrirotialdescribe').style.borderColor = '#ff0000'
            valid = false;
            return
        }
    }


    //display warning if email is not entered
    
    //if (profileForm.email.value == "") {
       // document.querySelector('#emailWarning').textContent = "*Please enter email*";
        //document.querySelector('#ownername').style.borderColor = '#ff0000'
       // valid = false;
    //}
    






    //validate number

    if ((!daytime.match(/^\d+/)) && (!cellphone.match(/^\d+/))) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be numbers*";
        return
    }
    // validate 10 digits
    if ((daytime.length !== 10) && (cellphone.length !== 10)) {
        valid = false;
        document.querySelector('#daytimePhoneWarning').textContent = "*Phone should be 10 digits*";
        return
    }
    const emergency = document.querySelector('#contactPhone')
    if (!emergency.value.match(/^\d+/)) {
        valid = false;
        document.querySelector('#contactPhoneWarning').textContent = "*Phone should be numbers*";
        return
    }
    // validate 10 digits
    if (emergency.value.length !== 10) {
        valid = false;
        document.querySelector('#contactPhoneWarning').textContent = "*Phone should be 10 digits*";
        return
    }




    // valid than submit

    if (valid) {
        alert("Thank you!");
    }

    return valid;

}
