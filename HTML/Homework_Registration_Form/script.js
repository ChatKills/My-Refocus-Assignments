    const form = document.forms.registration;
    const firstName = form.firstName;
    const middleName = form.middleName;
    const lastName = form.lastName;
    const birthday = form.birthday;
    const email = form.email;
    const region = form.region;
    const province = form.province;
    const barangay = form.barangay;
    const street = form.street;
    const errorGender1 = document.getElementById("gender-error-1");
    const errorGender2 = document.getElementById("gender-error-2");
    const errorGender3 = document.getElementById("gender-error-3");
    const gender = form.gender;
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");
    const genderOther = document.getElementById("other");
    const vaccineBrand = form.vaccineBrand;
    const vaccineDate = form.vaccineDate;
    const vaccineSite = form.vaccineSite;
    const checkYes = document.getElementById("check-Yes");
    const checkNo = document.getElementById("check-No");
    const vaccYes = document.getElementById("chkYes");
    const vaccNo = document.getElementById("chkNo");
    const secondVaccine = form.secondVaccine;
    const vaccineBrandDose2 = form.vaccineBrandDose2;
    const vaccineDateDose2 = form.vaccineDateDose2;
    const vaccineSiteDose2 = form.vaccineSiteDose2;
    const formTwo = form.formTwo;
    const textBox = document.getElementById("text-box");
    const buttonSubmit = document.getElementById("buttonSubmit");
    const buttonReset = document.getElementById("buttonReset");

    province.readOnly = true;
    barangay.readOnly = true;
    street.readOnly = true;

    region.addEventListener('change', function(){
        province.readOnly = region.value === '';
        barangay.readOnly = region.value === '';
        street.readOnly = region.value === '';
        if (!region.value){
            province.value = '';
            barangay.value = '';
            street.value = '';
        }
    });

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!firstName.value) {
        setError(firstName, "First name is required.")
        return;        
    }
    if (!middleName.value) {
        setError(middleName, "Middle name is required.");
        return;   
    }
    if (!lastName.value) {
        setError(lastName, "Last name is required.");
        return;   
    }
    if (!birthday.value) {
        setError(birthday, "Birthdate is required.");
        return;   
    }
    if (!email.value) {
        setError(email, "Email is required.");
        return;   
    }
    if (!region.value){
        setError(region, "Please select a Region");
        return;
    }
    if (!province.value) {
        setError(province, "Province is required.");
        return;   
    }
    if (!barangay.value) {
        setError(barangay, "Barangay is required.");
        return;   
    }
    if (!street.value) {
        setError(street, "Street is required.");
        return;   
    }
    if (!genderMale.checked && !genderFemale.checked & !genderOther.checked) {
        setError(genderMale && genderFemale && genderOther, "Choose at least one option.");
        errorGender1.classList.remove("container");
        errorGender1.classList.add("container-error");
        errorGender2.classList.remove("container");
        errorGender2.classList.add("container-error");
        errorGender3.classList.remove("container");
        errorGender3.classList.add("container-error");
        return;
    }
    if (!vaccineBrand.value) {
        setError(vaccineBrand, "Vaccine Brand is required.");
        return;   
    }
    if (!vaccineDate.value) {
        setError(vaccineDate, "Date of Vaccination is required.");
        return;   
    }
    if (!vaccineSite.value) {
        setError(vaccineSite, "Site of Vaccination is required.");
        return;   
    }
    if (!vaccYes.checked && !vaccNo.checked) {
        setError(vaccYes && vaccNo, "Choose at least one option.");
        checkYes.classList.remove("container");
        checkYes.classList.add("container-error");
        checkNo.classList.remove("container");
        checkNo.classList.add("container-error");
        return;
    }

    if (vaccYes.checked) {
        document.getElementById("second-vaccine-visiblity").style.display = "block";
        
        if (!vaccineBrandDose2.value && vaccYes.checked) {
            setError(vaccineBrandDose2, "Vaccine Brand is required.");
            return;   
        }
        if (!vaccineDateDose2.value && vaccYes.checked) {
            setError(vaccineDateDose2, "Date of Vaccination is required.");
            return;   
        }
        if (!vaccineSiteDose2.value && vaccYes.checked) {
            setError(vaccineSiteDose2, "Site of Vaccination is required.");
            return;   
        }
    }
    


    document.getElementById("firstNameText").innerText = firstName.value;
    document.getElementById("middleNameText").innerText = middleName.value;
    document.getElementById("lastNameText").innerText =lastName.value;
    document.getElementById("birthdayText").innerText = birthday.value;
    document.getElementById("emailText").innerText = email.value;
    document.getElementById("regionText").innerText = region.value;
    document.getElementById("provinceText").innerText = province.value;
    document.getElementById("barangayText").innerText = barangay.value;
    document.getElementById("streetText").innerText = street.value;
    document.getElementById("genderText").innerText = gender.value;
    document.getElementById("vaccineBrandDose1Text").innerText = vaccineBrand.value;
    document.getElementById("vaccineDateDose1Text").innerText = vaccineDate.value;
    document.getElementById("vaccineSiteDose1Text").innerText = vaccineSite.value;
    document.getElementById("secondVaccineText").innerText = secondVaccine.value;
    
    if (vaccYes.checked)
    {
    document.getElementById("final-form-submision").style.display = "block";
    document.getElementById("vaccineBrandDose2Text").innerText = vaccineBrandDose2.value;
    document.getElementById("vaccineDateDose2Text").innerText = vaccineDateDose2.value;
    document.getElementById("vaccineSiteDose2Text").innerText = vaccineSiteDose2.value;
    }

    alert("Registration successful!")

});

form.addEventListener('reset' , (event) => {
    event.preventDefault();

    firstName.value = "";
    clearMessage(firstName, "");
    middleName.value = "";
    clearMessage(middleName, "");
    lastName.value = "";
    clearMessage(lastName, "");
    birthday.value = "";
    clearMessage(birthday, "");
    email.value = "";
    clearMessage(email, "");
    region.value = "";
    clearMessage(region, "");
    province.value = "";
    clearMessage(province, "");
    barangay.value = "";
    clearMessage(barangay, "");
    street.value = "";
    clearMessage(street, "");
    genderMale.checked = false;
    genderFemale.checked = false;
    genderOther.checked = false;
    clearMessage(genderMale && genderFemale && genderOther, "");
    errorGender1.classList.remove("container-error");
    errorGender1.classList.add("container");
    errorGender2.classList.remove("container-error");
    errorGender2.classList.add("container");
    errorGender3.classList.remove("container-error");
    errorGender3.classList.add("container");
    vaccineBrand.value = "";
    clearMessage(vaccineBrand, "");
    vaccineDate.value = "";
    clearMessage(vaccineDate, "");
    vaccineSite.value = "";
    clearMessage(vaccineSite, "");
    vaccYes.checked = false;
    vaccNo.checked = false;
        checkYes.classList.remove("container-error");
        checkYes.classList.add("container");
        checkNo.classList.remove("container-error");
        checkNo.classList.add("container");
    clearMessage(vaccYes && vaccNo, "");
    vaccineBrandDose2.value = "";
    clearMessage(vaccineBrandDose2, "");
    vaccineDateDose2.value = "";
    clearMessage(vaccineDateDose2, "");
    vaccineSiteDose2.value = "";
    clearMessage(vaccineSiteDose2, "");
    document.getElementById("second-vaccine-visiblity").style.display = "none"

    document.getElementById("firstNameText").innerText = "";
    document.getElementById("middleNameText").innerText = "";
    document.getElementById("lastNameText").innerText = "";
    document.getElementById("birthdayText").innerText = "";
    document.getElementById("emailText").innerText = "";
    document.getElementById("regionText").innerText = "";
    document.getElementById("provinceText").innerText = "";
    document.getElementById("barangayText").innerText = "";
    document.getElementById("streetText").innerText = "";
    document.getElementById("genderText").innerText = "";
    document.getElementById("vaccineBrandDose1Text").innerText = "";
    document.getElementById("vaccineDateDose1Text").innerText = "";
    document.getElementById("vaccineSiteDose1Text").innerText = "";
    document.getElementById("secondVaccineText").innerText = "";
    document.getElementById("vaccineBrandDose2Text").innerText = "";
    document.getElementById("vaccineDateDose2Text").innerText = "";
    document.getElementById("vaccineSiteDose2Text").innerText = "";
    document.getElementById("final-form-submision").style.display = "none";

});

function checkSecondVaccine() {
    vaccineBrandDose2.disabled = vaccYes.checked ? false: true;
    vaccineDateDose2.disabled = vaccYes.checked ? false: true;
    vaccineSiteDose2.disabled = vaccYes.checked ? false: true;
}

function setError(field, errorMsg) {
        field.style.borderColor = 'red';
        document.getElementById("error-" + field.name).innerHTML = errorMsg;
}

function clearMessage(field, clrMsg) {
    field.style.borderColor = '#162040';
    document.getElementById("error-" + field.name).innerText = clrMsg;
}
