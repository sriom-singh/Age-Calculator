const birthDay = document.getElementById("day")
const birthMonth = document.getElementById("month")
const birthYear = document.getElementById("year")

const date = new Date();
let currentMonth =date.getMonth()+1;
let currentDay = date.getDate();
let currentYear =date.getFullYear()
console.log(currentDay,currentMonth,currentYear);
const array=[31,28,31,30,31,30,31,31,30,31,30,31];



// Check cases in DAY input.
let flagForDay = false;
birthDay.addEventListener('input',checkDay)

function checkDay(e) {
    if(e.target.value==""){
        document.getElementById('day-error').textContent="This field is required"
        document.getElementById('day-label').style.color="hsl(0, 100%, 67%)"
        birthDay.style.borderColor="hsl(0, 100%, 67%)"
        flagForDay = false
    }else if (e.target.value<=0 || e.target.value>31) {
        document.getElementById('day-label').style.color="hsl(0, 100%, 67%)"
        document.getElementById('day-error').textContent="Must be a valid day"
        birthDay.style.borderColor="hsl(0, 100%, 67%)"
        flagForDay = false
    }
    else{
        document.getElementById('day-error').textContent=""
        document.getElementById('day-label').style.color="hsl(0, 1%, 44%)"
        birthDay.style.borderColor="hsl(0, 1%, 44%)"
        flagForDay=true;
    }
 
}


// Check cases in Month input

birthMonth.addEventListener('input',checkMonth)
let flagForMonth = false;
function checkMonth(e) {
    if(e.target.value==""){
        document.getElementById('month-error').textContent="This field is required"
        document.getElementById('month-label').style.color="hsl(0, 100%, 67%)"
        birthMonth.style.borderColor="hsl(0, 100%, 67%)"
        flagForMonth = false;
    }else if (e.target.value<=0 || e.target.value>12) {
        document.getElementById('month-label').style.color="hsl(0, 100%, 67%)"
        document.getElementById('month-error').textContent="Must be a valid day"
        birthMonth.style.borderColor="hsl(0, 100%, 67%)"
        flagForMonth = false;
    }
    else{
        document.getElementById('month-error').textContent=""
        document.getElementById('month-label').style.color="hsl(0, 1%, 44%)"
        birthMonth.style.borderColor="hsl(0, 1%, 44%)"
        day = e.target.value;
        flagForMonth = true;
    }
  
}



// Check cases in YEAR input

let flagForYear = false;

birthYear.addEventListener('input',checkYear)
function checkYear(e) {
   
        if(e.target.value==""){
             document.getElementById('year-error').textContent="This field is required"
             document.getElementById('year-label').style.color="hsl(0, 100%, 67%)"
             birthYear.style.borderColor="hsl(0, 100%, 67%)"
             flagForYear = false
        }else if (e.target.value<=1000 || e.target.value>date.getFullYear()) {
             document.getElementById('year-label').style.color="hsl(0, 100%, 67%)"
             document.getElementById('year-error').textContent=`Must be between 1000 - ${currentYear}`
            birthYear.style.borderColor="hsl(0, 100%, 67%)"
            flagForYear = false
         } else{
             document.getElementById('year-error').textContent=""
             document.getElementById('year-label').style.color="hsl(0, 1%, 44%)"
              birthYear.style.borderColor="hsl(0, 1%, 44%)"
             flagForYear = true
         }
   
   
}

// Function to calculate Age
const button = document.getElementById("submit");
button.addEventListener('click',showResult)

function showResult(){
    console.log(flagForDay,flagForMonth,flagForYear)
    if(flagForDay&&flagForMonth&&flagForYear){
    let day = parseInt(birthDay.value);
    let month = parseInt(birthMonth.value);
    let year =  parseInt(birthYear.value);
    
    if(currentDay<day){
        currentDay = currentDay + array[month-1]
        currentMonth = currentMonth - 1;
    }
    if(currentMonth<month){
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
    }

    document.getElementById('show-day').innerHTML=`${currentDay-day}`
    document.getElementById('show-month').innerHTML=`${currentMonth-month}`
    document.getElementById('show-year').innerHTML=`${currentYear-year}`
}else{
   if(birthDay.value==""){
        document.getElementById('day-error').textContent="This field is required"
   }
   if (birthMonth.value=="") {
    document.getElementById('month-error').textContent="This field is required"
   }
   if (birthYear.value=="") {
       document.getElementById('year-error').textContent="This field is required"

   }
}
}
