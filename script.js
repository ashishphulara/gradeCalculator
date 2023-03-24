const calculate = ()=>{


const english = document.querySelector(".english").value
const maths = document.querySelector(".maths").value
const physics = document.querySelector(".physics").value
const chemistry = document.querySelector(".chemistry").value
const computer = document.querySelector(".computer").value

let marks = "";
let totalPosssibleMArks = 500;

let totalMarks = parseFloat(english)+ parseFloat(maths) + parseFloat(physics)+ parsefloat(chemistry) + parseFloat(computer)

let percent = (totalMarks/ totalPosssibleMArks) *100


if(percent <100  && percent > 90){
    grade = "A"
}else if(percent <89 && percent > 80){
    grade ="B"
}else if(percent <79 && percent > 70){
    grade ="C"
}else if(percent <69 && percent > 60){
    grade ="D"
}else if(percent > 60){
    grade ="F"
}

if(english == "" || maths == "" || physics == "" || chemistry=="" || computer == ""){
    alert("please enter all the fields")
}else{
    if(percent > 35 ){
        document.querySelector(".para_1").innerHTML = `Your total is ${totalMarks}`
    }
}

}


