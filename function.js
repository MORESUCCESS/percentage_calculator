function calculate(){
    if(document.getElementById("Mark").value==0 || document.getElementById("TotalMarks").value==0){
        alert("All fields are required! in order to calculate percentage");
    }
    else{
    var score=document.getElementById('Mark').value;
    var Totalscore=document.getElementById('TotalMarks').value;
    var percent = (score * 100)/Totalscore;
    document.getElementById('Answer').innerHTML = percent + "%";
}
}