// Question 01

function signupForm(event){
    event.preventDefault()

     // Form data ko get karny k liye built in constructor method
     let formData = new FormData(document.getElementById("signup-form"));

     // Form data ko ek object mein store karna hai

     formObject = {}

     for(var key of formData.keys()){
            var value = formData.get(key);
            formObject[key] = value;        
        // ub form ko display krwana hai

        let submittedDataDiv = document.getElementById("submitted-data");
        submittedDataDiv.innerHTML = `<h2>Submitted Data:</h2>`
        for(var key of formData.keys()){
            submittedDataDiv.innerHTML += `<p><strong>${key}:</strong> ${formObject[key]}</p>`
        }
     }
}