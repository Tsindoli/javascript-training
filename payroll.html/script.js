document.getElementById("Calculate").addEventListener("click", function (event) {
  event.preventDefault();
});

  
function calculate_gross(basic_salary, benefits) {
  let grossSalary = basic_salary + benefits;
  return grossSalary;
}

function link_gross() {
  let basicSalary = Number(document.getElementById("basic_salary").value);
  let benefit = Number(document.getElementById("benefit").value);
  let gross = calculate_gross(basicSalary, benefit);
  document.getElementById("gross").innerText = gross;
}
  // let gross = calculate_gross(basicSalary, benefit);
function find_nssf(gross, nssf_rate = 0.06) {
  if (gross <= 18000) {
    nssf = gross * nssf_rate;
  } else {
    nssf = 18000 * 0.06
  }
  return nssf;
}

function link_nssf() {
  let gross = Number(document.getElementById("gross").innerText);
  let nssf = find_nssf(gross);
  document.getElementById("nssf").innerText = nssf;
}

function find_nhdf(gross, nhdf_rate = 0.03) {
  if (gross <= 83334) {
    nhdf = gross * nhdf_rate;
  } else {
    nhdf = 2500
  }
  return nhdf;
}
function link_nhdf() {
  let gross = Number(document.getElementById("gross").innerText);
  let nhdf = find_nhdf(gross);
  document.getElementById("nhdf").innerText = nhdf;
}
function find_nssf_nhdf_total(nssf, nhdf) {
  let total = nssf + nhdf;
  alert(total)
  return total;
}
function link_nssf_nhdf_total() {
  let nssf = Number(document.getElementById("nssf").value);
  let nhdf = Number(document.getElementById("nhdf").value);
  let total = find_nssf_nhdf_total(nssf, nhdf);
  document.getElementById("total_nssf_nhdf").innerHTML = total;
}

function calculate_taxable_income(gross,total) {
  let total_income = gross-nssf-nhdf;
  return total_income
}
function link_taxable_income() {
  let gross = Number(document.getElementById("gross").innerText);
  let nssf = Number(document.getElementById("nssf").innerText);
  let nhdf = Number(document.getElementById("nssf").innerText);
  let total=Number(document.getElementById("total_nssf_nhdf").value);

  let total_income = calculate_taxable_income(gross,nssf,nhdf);
  document.getElementById("taxable_income").innerText = total_income;}
// function calculate_taxable_income(gross, total_nhdf_nssf) {
//   let total_income = gross - total_nhdf_nssf;
//   return total_income;
// }

// function link_taxable_income() {
//   document.getElementById("taxable_income").innerHTML = calculate_taxable_income(
//     document.getElementById("gross").innerText,
//     document.getElementById("total_nssf_nhdf").innerText,

//   );
// }
function find_nhif(gross) {
  if (gross == 0) {
    nhif_contribution = 0;
    (nhif_contribution)
  } else if (gross <= 5999) {
    nhif_contribution = 150;
  } else if (gross >= 6000 && gross <= 7999) {
    nhif_contribution = 300;
  } else if (gross >= 8000 && gross <= 11999) {
    nhif_contribution = 400;
  } else if (gross >= 12000 && gross <= 14999) {
    nhif_contribution = 500;
  } else if (gross >= 15000 && gross <= 19999) {
    nhif_contribution = 600;
  } else if (gross >= 20000 && gross <= 24999) {
    nhif_contribution = 750;
  } else if (gross >= 25000 && gross <= 29999) {
    nhif_contribution = 850;
  } else if (gross >= 30000 && gross <= 34999) {
    nhif_contribution = 900;
  } else if (gross >= 35000 && gross <= 39999) {
    nhif_contribution = 950;
  } else if (gross >= 40000 && gross <= 44999) {
    nhif_contribution = 1000;
  } else if (gross >= 50000 && gross <= 59999) {
    nhif_contribution = 1200;
  } else if (gross >= 60000 && gross <= 69999) {
    nhif_contribution = 1300;
  } else if (gross >= 70000 && gross <= 79999) {
    nhif_contribution = 1400;
  } else if (gross >= 80000 && gross <= 89999) {
    nhif_contribution = 1500;
  } else if (gross >= 90000 && gross <= 99999) {
    nhif_contribution = 1600;
  } else {
    nhif_contribution = 1700;
  }

  return nhif_contribution;
}
function link_nhif() {
  let gross = Number(document.getElementById("gross").innerText);
  let nhif = find_nhif(gross);
  document.getElementById("nhif").innerText = nhif;
}

// function link_nhif() {
//   document.getElementById("nhif").innerText = find_nhif(
//     document.getElementById("gross").value
//   );
// }



function find_payee(taxable_income, personal_relief = 2400) {
  if(taxable_income<=24000){
    grosspayee = 24000*0.1
    netpayee = grosspayee-personal_relief
  }
  else if(taxable_income<=32333){
    grosspayee= ((taxable_income-24000)*0.25)+2400
    netpayee= grosspayee-personal_relief
  }
  else if(taxable_income<=500000){
    grosspayee=((taxable_income-32333)*0.3)+4483.25
    netpayee=grosspayee -personal_relief
  }
  else if(taxable_income<=800000){
    grosspayee=(taxable_income-500000)*0.325+144783.35+2400
    netpayee=grosspayee -personal_relief
  }
  else {
    grosspayee=((taxable_income-800000)*0.35)+242283.35+2400
    netpayee=grosspayee-personal_relief
  }
  return netpayee
  // if (taxable_income <= 24000) {
  //   grosspayee = 24000 * 0.1;
  //   netpayee = (grosspayee - personal_relief);
  // } else if ((taxable_income <= 32333)) {
  //   grosspayee = (taxable_income - 24000) * 0.25 + 2400;
  //   netpayee = (grosspayee - personal_relief);
  // } else if (taxable_income <= 500000) {
  //   grosspayee = (taxable_income - 32333) * 0.3 + 4483.25;
  //   netpayee = (grosspayee - personal_relief);
  // } else if (taxable_income > 500000) {
  //   grosspayee = (taxable_income - 80000) * 0.35 + 4483.25;
  //   netpayee = (grosspayee - personal_relief);
  // } else {
  //   netpayee = 0;
  // }
  // return netpayee.toFixed(2);
}

function link_payee() {
  let taxableIncome = Number(document.getElementById("taxable_income").innerText);
  document.getElementById("payee").innerText = find_payee(taxableIncome);
}


function find_net_pay(gross_salary, nhif, nhdf, nssf_pay, netPayee) {
  netSalary = gross_salary - (nhif + nhdf + nssf_pay + netPayee);

  return netSalary;
}

function link_net_pay() {
  document.getElementById("net_pay").innerText = find_net_pay(
    Number(document.getElementById("gross").innerText),
    Number(document.getElementById("nhif").innerText),
    Number(document.getElementById("nhdf").innerText),
    Number(document.getElementById("nssf").innerText),
    Number(document.getElementById("payee").innerText)
  );
}
function linkAllCalculations(){
  link_gross();
  link_nssf();
  link_nhdf();
  link_nhif();
  link_taxable_income();
  link_payee();
  link_net_pay();
  check_input();
}