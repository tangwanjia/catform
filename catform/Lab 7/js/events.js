
//remove warning if time arrive has input
document.querySelector('#timearrive').addEventListener("blur", function () {
    if (profileForm.timearrive.options.selectedIndex !== -1) {
        arriveTimeWarning.textContent = "";
        timearrive.style.borderColor = ''
    }
});
//remove warning if time leave has input
document.querySelector('#timeLeave').addEventListener("blur", function () {
    if (profileForm.timeLeave.options.selectedIndex !== -1) {
        leaveTimeWarning.textContent = "";
        timeLeave.style.borderColor = ''
    }
});


// choose territorial and show the description inputbox
function myFunction(num) {
    // Get the output text
    let text = document.querySelector("#describe");
    // If the checkbox is checked, display the output text
    if (num == 1) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    return;
}

// Special diet is a check box which if selected will make Describe Diet appear below.
function myFunction2() {
    let checkBox = document.querySelector('#special')
    let text = document.querySelector("#specialDiet");
    if (checkBox.checked) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


//remove warning if cat name has input
document.querySelector('#catname').addEventListener("blur", function () {
    if (this.value !== "") {
        catNameWarning.textContent = "";
        catname.style.borderColor = ''
    }
});
//remove warning if owner name has input
document.querySelector('#ownername').addEventListener("blur", function () {
    if (this.value !== "") {
        ownerNameWarning.textContent = "";
        ownername.style.borderColor = ''
    }
});



//remove warning if contact name has input
document.querySelector('#contactName').addEventListener("blur", function () {
    if (this.value !== "") {
        contactNameWarning.textContent = "";
        contactName.style.borderColor = ''
    }
});
//remove warning if contact phone has input
document.querySelector('#contactPhone').addEventListener("blur", function () {
    if (this.value !== "") {
        contactPhoneWarning.textContent = "";
        contactPhone.style.borderColor = ''
    }
});
//remove warning if described diet has input
document.querySelector('#describediet').addEventListener("blur", function () {
    if (this.value !== "") {
        describeDietWarning.textContent = "";
        describediet.style.borderColor = ''
    }
});
//remove warning if described territorialt has input
document.querySelector('#terrirotialdescribe').addEventListener("blur", function () {
    if (this.value !== "") {
        terrirotialDescribeWarning.textContent = "";
        terrirotialdescribe.style.borderColor = ''
    }
});

//remove warning if owner's phone has input
document.querySelector('#cellphone').addEventListener("blur", function () {
    if (this.value !== "") {
        daytimePhoneWarning.textContent = "";
        cellphone.style.borderColor = ''
        daytimephone.style.borderColor = ''
    }
});
document.querySelector('#daytimephone').addEventListener("blur", function () {
    if (this.value !== "") {
        daytimePhoneWarning.textContent = "";
        daytimephone.style.borderColor = ''
        cellphone.style.borderColor = ''
    }
});

//remove warning if days has inputed


document.querySelectorAll('[name = "daysneeded"]')[0].addEventListener("blur", function () {
    if (this.checked) {
        document.querySelector('#daysNeededWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "daysneeded"]')[1].addEventListener("blur", function () {
    if (checked) {
        document.querySelector('#daysNeededWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "daysneeded"]')[2].addEventListener("blur", function () {
    if (checked) {
        document.querySelector('#daysNeededWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "daysneeded"]')[3].addEventListener("blur", function () {
    if (checked) {
        document.querySelector('#daysNeededWarning').textContent = '';
    }
});
document.querySelectorAll('[name = "daysneeded"]')[4].addEventListener("blur", function () {
    if (checked) {
        document.querySelector('#daysNeededWarning').textContent = '';
    }
});


//remove warning if number is checked
document.querySelector('#contactPhone').addEventListener("blur", function () {
    if (this.value.length === 9) {
        document.querySelector('#contactPhoneWarning').textContent = '';
    }
})

document.querySelector('#daytimephone').addEventListener("blur", function () {
    if (this.value.length === 10) {
        document.querySelector('#daytimePhoneWarning').textContent = '';
    }
})
document.querySelector('#cellphone').addEventListener("blur", function () {
    if (this.value.length === 10) {
        document.querySelector('#daytimePhoneWarning').textContent = '';
    }
})



// Add an event to the form on submit to validate input
document.profileForm.addEventListener("submit", validate);