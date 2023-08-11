  let totalReceipt = 0;
  const aims = [];

  function handleAddAim() {
      const aimInput = document.getElementById("aim");
    
      if (!aimInput.value) {
          alert("Please enter a valid number.");
          return; 
      }
    
      const aimAmount = parseFloat(aimInput.value);
      
      aims.push(aimAmount);
    
      updateAimsList();
      
      aimInput.value = "";
  }
  
  function updateAimsList() {
      const aimsList = document.getElementById("aims-list");
      aimsList.innerHTML = "";
    
      if (aims.length === 0) {
          const noAimsItem = document.createElement("li");
          noAimsItem.textContent = "No Aims added yet.";
          aimsList.appendChild(noAimsItem);
      } else {
          for (let i = 0; i < aims.length; i++) {
              const aimItem = document.createElement("li");
              aimItem.textContent = "Aiming Money: $" + parseFloat(aims[i]);
              aimsList.appendChild(aimItem);
          }
      }
  }


let budgets = 0;

function handleAddBudget() {
    const budgetInput = document.getElementById("budget");
  
    if (!budgetInput.value) {
        alert("Please enter a valid number.");
        return; 
    }
  
    const budgetAmount = parseFloat(budgetInput.value);
    
    budgets = budgetAmount;
    updateBudgetList();
    
    budgetInput.value = "";
}

function updateBudgetList() {
    const budgetList = document.getElementById("budgets-list");
    const span = document.createElement('span')
    span.innerHTML=`Budget Money: $${budgets}` 
    budgetList.appendChild(span)
}


const receiptList = [];
const addReceipt = () => {
    const receiptName = document.getElementById('receipt').value.trim();
    const receiptCost = parseFloat(document.getElementById('receipt-cost').value);
    if (receiptName && !isNaN(receiptCost) && receiptCost > 0) {
        const newReceipt = { name: receiptName, cost: receiptCost };
        receiptList.push(newReceipt);
        document.getElementById('receipt').value = '';
        document.getElementById('receipt-cost').value = '';
        updateReceiptTable();
    } else {
      alert("Please enter valid Receipt Name and Cost.");
   }
}
const updateReceiptTable = () => {
    const tableElement = document.getElementById('receipt-table');
    while (tableElement.firstChild) {
       tableElement.removeChild(tableElement.firstChild);
   }
   const headerRow= document.createElement('tr');
   const nameHeader= createTableCellReceipt('th', 'Receipt Name');
   const costHeader= createTableCellReceipt('th', 'Cost');
 	headerRow.append(nameHeader, costHeader);
	tableElement.appendChild(headerRow);
	for (let i = 0; i < receiptList.length; i++) {
	   	const row= document.createElement('tr');
	   	const nameCell= createTableCellReceipt('td', receiptList[i].name);
	   	const costCell=createTableCellReceipt( 'td', '$' + parseFloat(receiptList[i].cost).toFixed(2));

	  	row.append(nameCell,costCell );
	 	tableElement.appendChild(row); 
        tableElement.setAttribute('style','text-align:center;')

	}
	updateTotalAmountReceipt();
}
const createTableCellReceipt = (elementType, textContent) => {
     const cell= document.createElement(elementType);
     cell.textContent=textContent;
     return cell;
}
const updateTotalAmountReceipt = () => {
    let totalAmount = 0;
	for(let i = 0; i < receiptList.length; i++){
   		totalAmount += parseFloat(receiptList[i].cost);
	}

	document.getElementById("total-receipt").innerHTML = totalAmount.toFixed(2);
  const abc = document.getElementById('total-receipt').textContent
  totalReceipt = abc
}
const paymentInput = document.getElementById('payment');
const costInput = document.getElementById('cost');
const paymentList = [];
const addPayment = () => {
    const paymentName = document.getElementById('payment').value.trim();
    const paymentCost = parseFloat(document.getElementById('payment-cost').value);
    if (paymentName && !isNaN(paymentCost) && paymentCost > 0) {
        const newPayment = { name: paymentName, cost: paymentCost };
        paymentList.push(newPayment);
        document.getElementById('payment').value = '';
        document.getElementById('payment-cost').value = '';
        updatePaymentTable();
    } else {
      alert("Please enter valid Payment Name and Cost.");
   }
}
const updatePaymentTable = () => {
    const tableElement = document.getElementById('payment-table');
    while (tableElement.firstChild) {
       tableElement.removeChild(tableElement.firstChild);
   }
   const headerRow= document.createElement('tr');
   const nameHeader= createTableCellPayment('th', 'Payment Name');
   const costHeader=createTableCellPayment('th', 'Cost');
 	headerRow.append(nameHeader, costHeader);
	tableElement.appendChild(headerRow);
	for (let i = 0; i < paymentList.length; i++) {
	   	const row= document.createElement('tr');
	   	const nameCell= createTableCellPayment('td', paymentList[i].name);
	   	const costCell=createTableCellPayment( 'td', '$' + parseFloat(paymentList[i].cost).toFixed(2));

	  	row.append(nameCell,costCell );
	 	tableElement.appendChild(row); 
     tableElement.setAttribute('style','text-align:center;')
	}
	updateTotalAmountPayment();
}
const createTableCellPayment = (elementType, textContent) => {
     const cell= document.createElement(elementType);
     cell.textContent=textContent;
     return cell;
}
const updateTotalAmountPayment = () => {
    let totalAmount = 0;
	for(let i = 0; i < paymentList.length; i++){
   		totalAmount += parseFloat(paymentList[i].cost);
	}
	document.getElementById("total-payment").textContent = totalAmount.toFixed(2);
}
// $('button').click(function(){
//     $('.alert').addClass("show");
//     $('.alert').removeClass("hide");
//     $('.alert').addClass("showAlert");
//     setTimeout(function(){
//       $('.alert').removeClass("show");
//       $('.alert').addClass("hide");
//     },5000);
//   });
//   $('.close-btn').click(function(){
//     $('.alert').removeClass("show");
//     $('.alert').addClass("hide");
//   });

// function calendarControl() {
//   const day = document.getElementById('mon')
//   const tableContent = document.getElementById('calendar-day')
//   let content = "";
//   for (let index = 1; index <= 31; index++) {

//   }
// }
const currentDate = new Date();

function createCalendar(year, month) {
  const calendar = document.getElementById("calendar-day");

  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  // console.log(firstDay)

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // console.log(daysInMonth)

  // Create a table element
  const table = document.createElement("table");

  // Create the header row
  const headerRow = document.createElement("tr");
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < 7; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      // console.log(i,j)
      if (i === 0 && j < firstDay) {
        const td = document.createElement("td");
        row.appendChild(td);
      } else if (date > daysInMonth) {
        break;
      } else {
        const td = document.createElement("td");
        td.textContent = date;
        row.appendChild(td);
        if (date === currentDate.getDate()){
          td.setAttribute('class','active')
        }
        date++;
      }
    }
    table.appendChild(row);
    
  }

  calendar.appendChild(table);
}

// Call the createCalendar function with the current year and month
console.log(currentDate.getDate())

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
createCalendar(currentYear, currentMonth);

function handleCalcWallet () {
  const result = document.getElementById('result')
  // const receipt = document.getElementById('total-receipt')
  const payment = document.getElementById('total-payment')

  if (receipt && payment && budgets){
    const moneyResult = (parseInt(budgets) + parseInt(totalReceipt)) - parseInt(payment.textContent)
    console.log(moneyResult)
    console.log(budgets,receipt.textContent,payment.textContent)
    result.innerHTML= `$${moneyResult}`
  }

}

// const calendarControl = new CalendarControl();
// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");
// let progressStartValue = 0,    
//     progressEndValue = 90,    
//     speed = 100;
// let progress = setInterval(() => {
//     progressStartValue++;
//     progressValue.textContent = `${progressStartValue}%`
//     circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
//     if(progressStartValue == progressEndValue){
//         clearInterval(progress);
//     }    
// }, speed);