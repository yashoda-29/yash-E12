//To store and extract data on and from localStorage.
let Form=document.getElementById("Form");

const retrieveEntries=() =>{
let entries=localStorage.getItem("data");
if(entries) {
    entries=JSON.parse(entries);
} else{
    entries=[];
}
 return entries;

};
let dataEntry=retrieveEntries();

const displayEntries=()=>{
    const entries=retrieveEntries();

    const tableEntries=entries.map((entry)=>{
        const nameHold=`<td class='border px-4 py-2'>${entry.name} </td>`;
        const emailHold=`<td class='border px-4 py-2'>${entry.email} </td>`;
        const passwordHold=`<td class='border px-4 py-2'>${entry.password} </td>`;
        const dobHold=`<td class='border px-4 py-2'>${entry.dateOfBirth} </td>`;
        const acceptTermHold=`<td class='border px-4 py-2'>${entry.termsAndConditions} </td>`;
  const row=`<tr>${nameHold} ${emailHold} ${passwordHold} ${dobHold} ${acceptTermHold}</tr>`;
  return row;

    }).join("\n");

    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">DOB</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries}</table>`;

    let details=document.getElementById("data");
    details.innerHTML=table;

};


const saveForm=(event)=>{
event.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const dob=document.getElementById("dob").value;
const termsAndConditions=document.getElementById("acceptTerms").checked;
 
let DATAENTRYSET={
name, email,password,dob,termsAndConditions};

dataEntry.push(DATAENTRYSET);
localStorage.setItem("data", JSON.stringify(dataEntry));
displayEntries();
};

Form.addEventListener("submit", saveForm);
displayEntries();
localStorage.clear();


//To check if the age is between 18 and 55.
const input = document.querySelector("#dob");
        input.addEventListener("input", function() {
          const now = new Date();
          const enteredDate = new Date(input.value);
          const age = now.getFullYear() - enteredDate.getFullYear();
          if (age < 18 || age > 55) {
            input.setCustomValidity("Please enter a date between 1968 and 2005.");
          } else {
            input.setCustomValidity("");
          }
        });
