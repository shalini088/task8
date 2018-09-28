  var sscper;
 var sscyop;
 var sscmks1;
 var sscmks;
var sscvalue;
var sscradio;
var career;

var interper;
var interyop;
var intermks;
var intermks1;
var intervalue;
var interradio;


 var techper;
 var techyop;
var techmks1;
var techmks;
var techvalue;
 var techradio;


function getDetails() {
  career=document.getElementById("careerobj").value;
  sscvalue=document.getElementById('sscvalue').value;
sscmks=document.getElementById('sscmks');
sscmks1=document.getElementById('sscmks1');
sscper=document.getElementById('sscper').value;
sscyop=document.getElementById('yop').value;
  console.log(sscvalue);
  console.log(career);
  console.log(sscper);
  console.log(sscyop);
  career=document.getElementById("careerobj").value;
intervalue=document.getElementById('intervalue').value;
intermks=document.getElementById('intermks');
intermks1=document.getElementById('intermks1');
interper=document.getElementById('interper').value;
interyop=document.getElementById('interyop').value;
console.log(intervalue);
console.log(career);
console.log(interper);
console.log(interyop);
career=document.getElementById("careerobj").value;
techvalue=document.getElementById('techvalue').value;
techmks=document.getElementById('techmks');
techmks1=document.getElementById('techmks1');
techper=document.getElementById('techper').value;
techyop=document.getElementById('techyop').value;
console.log(techvalue);
console.log(career);
console.log(techper);
console.log(techyop);
  if(sscmks.checked){
     sscradio=sscmks.value;
    console.log(sscradio);
  }else{
     sscradio=sscmks1.value;
    console.log(sscradio);
  }
  if(intermks.checked){
     interradio=intermks.value;
    console.log(interradio);
  }else{
     interradio=intermks1.value;
    console.log(interradio);
  }
 if(techmks.checked){
    techradio=techmks.value;
    console.log(techradio);
   }else{
      techradio=techmks1.value;
  console.log(techradio);
  }
}
// name=document.getElementById('name').value;
// rollno=document.getElementById('rollno').value;
// email=document.getElementById('email').value;
//
//
// console.log(name+" "+rollno+" "+email);\
//
// if(!window.indexedDB){
// console.log("indexed db is not working...!");
// }
// var request=window.indexedDB.open("svitDB",1);
// request.onerror=(e)=>{
// console.log(e);
// }
// request.onupgradeneeded=e=>{
//   var dbname=e.target.result;
//   dbname.createObjectStore("cse",{keyPath:"name"});
//   console.log("upgraded...!");
//
// }
//
// request.onsuccess=e=>{
// var dbname=e.target.result;
// store=dbname.transaction("cse","readwrite").objectStore("cse");
// store.put(
//   {
//     "name":name,
//     "roll":rollno,
//     "email":email,
//
//   }
// );
//
//
//
//
//   console.log("success...!");
// }
//
//
//
// }
