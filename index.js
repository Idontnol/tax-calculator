
const trigger1 =document.getElementById("target-1");
const tooltip1 = document.getElementById("tooltip-1");
const trigger2 =document.getElementById("target-2");
const tooltip2 = document.getElementById("tooltip-2");
const trigger3 =document.getElementById("target-3");
const tooltip3 = document.getElementById("tooltip-3");
const trigger4 =document.getElementById("target-4");
const tooltip4 = document.getElementById("tooltip-4");


  trigger1.addEventListener("mouseover", () => {
    tooltip1.classList.add("active");
    console.log("hi werrttt - hover"); // Log message on hover
  });
  
  trigger1.addEventListener("mouseout", () => {
    tooltip1.classList.remove("active");
    console.log("hi werrttt - mouseout"); // Log message on mouseout 
  });

  trigger2.addEventListener("mouseover", () => {
    tooltip2.classList.add("active");
    console.log("hi werrttt - hover"); // Log message on hover
  });
  
  trigger2.addEventListener("mouseout", () => {
    tooltip2.classList.remove("active");
    console.log("hi werrttt - mouseout"); // Log message on mouseout 
  });
  trigger3.addEventListener("mouseover", () => {
    tooltip3.classList.add("active");
    console.log("hi werrttt - hover"); // Log message on hover
  });
  
  trigger3.addEventListener("mouseout", () => {
    tooltip3.classList.remove("active");
    console.log("hi werrttt - mouseout"); // Log message on mouseout 
  });
  trigger4.addEventListener("mouseover", () => {
    tooltip4.classList.add("active");
    console.log("hi werrttt - hover4"); // Log message on hover
  });
  
  trigger4.addEventListener("mouseout", () => {
    tooltip4.classList.remove("active");
    console.log("hi werrttt - mouseout4"); // Log message on mouseout 
  });
const closeButton=document.getElementById("closeButton");
const container2=document.getElementById("container2");
container2.classList.add("close");
closeButton.addEventListener("click",()=>{
    container2.classList.add("close");
    container2.classList.remove("open");
})


function afterTaxDeduction(grossIncome, extraIncome, deductions, age) {
    // Calculate overall income after deductions
    grossIncome = parseInt(grossIncome);
    extraIncome = parseInt(extraIncome);
    deductions = parseInt(deductions);

    const taxableIncome = grossIncome + extraIncome - deductions;
    // console.log(age + "age " + grossIncome + "gross " + extraIncome+"extra ",deductions);
    // console.log(taxableIncome,"taxable inome is");

    if (taxableIncome <= 800000) {
        console.log("no tax for", taxableIncome);
      return taxableIncome; // No tax
    }
  
    const excessIncome = taxableIncome - 800000;

    // Determine tax rate based on age
    let taxRate;
    if (age < 40) {
      taxRate = 0.3; // 30% tax rate for < 40 years old
    } else if (age >= 40 && age < 60) {
      taxRate = 0.4; // 40% tax rate for >= 40 and < 60 years old
    } else {
      taxRate = 0.1; // 10% tax rate for >= 60 years old
    }
  
    // Calculate tax amount
    const tax = excessIncome * taxRate;
  
    return taxableIncome-tax;
  }

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function validateInput(age, grossIncome, extraIncome, deductions) {
    let errorMessage = "";
    if (!age || isNaN(age) || age>150 || age<0) {
      errorMessage += "Please enter a valid age.\n";
    }
    if (!grossIncome || isNaN(grossIncome) || parseFloat(grossIncome) < 0) {
      errorMessage += "Please enter a valid gross income.\n";
    }
    if (!extraIncome || isNaN(extraIncome) || parseFloat(extraIncome) < 0) {
        errorMessage += "Please enter a valid extra income .\n";
      }
      if (!deductions || isNaN(deductions) || parseFloat(deductions) < 0) {
        errorMessage += "Please enter a valid deductions .\n";
      }

    return errorMessage || null; 
  }
  
const submitButton=document.getElementById("submitButton");

submitButton.addEventListener("click",()=>{

    const age = document.getElementById('age-group').value;
    const grossIncome = document.getElementById('gross-income').value;
    const extraIncome = document.getElementById('extra-income').value;
    const deductions = document.getElementById('deductions').value;

    const errorMessage = validateInput(age, grossIncome, extraIncome, deductions);
  if (errorMessage) {
    alert(errorMessage); // Display an alert with the error message
    return; // Prevent further processing if there are errors
  }

    const incomeResult = document.getElementById('income-result');
    
    const overallIncome = afterTaxDeduction(grossIncome, extraIncome, deductions, age);
    incomeResult.textContent =formatNumberWithCommas(overallIncome);
    
    container2.classList.add("open");
    container2.classList.remove("close");
});

const grossIncomeInput = document.getElementById("gross-income");
const exclamIcon1 = document.querySelector(".exclam-icon1");

grossIncomeInput.addEventListener("input", () => {

  const isValidNumber = !isNaN(grossIncomeInput.value);

  exclamIcon1.style.display = isValidNumber ? "none" : "block";
});

const extraIncomeInput = document.getElementById("extra-income");
const exclamIcon2 = document.querySelector(".exclam-icon2");

extraIncomeInput.addEventListener("input", () => {

  const isValidNumber = !isNaN(extraIncomeInput.value);

  exclamIcon2.style.display = isValidNumber ? "none" : "block";
});

const ageInput = document.getElementById("age-group");
const exclamIcon3 = document.querySelector(".exclam-icon3");

ageInput.addEventListener("input", () => {

  const isValidNumber = (ageInput.value>=1 && ageInput.value<=130);

  exclamIcon3.style.display = isValidNumber ? "none" : "block";
});

const deductionsInput = document.getElementById("deductions");
const exclamIcon4 = document.querySelector(".exclam-icon4");

deductionsInput.addEventListener("input", () => {

  const isValidNumber = !isNaN(deductionsInput.value);

  exclamIcon4.style.display = isValidNumber ? "none" : "block";
});