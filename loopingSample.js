function looping(){
let resume=[{
    name : "vijaya",
    age :22,
    gender:"female",
    qualification:"BCA",
    email:"xyx@gmail.com",
    phoneNo:1234567890,
    address:{
        city:"coimbatore",
        state:"Tamilnadu",
        country:"india"
    }
}]
for(let i=0;i<resume.length;i++){
console.log(resume[i]); 
}
let resume1={
    name : "vijaya",
    age :22,
    gender:"female",
    qualification:"BCA",
    email:"xyx@gmail.com",
    phoneNo:1234567890,
    address:{
        city:"coimbatore",
        state:"Tamilnadu",
        country:"india"
    }
}
for (let key in resume1) {
    console.log(resume1[key]);
}
// console.log(resume1["address"]["city"]);
for(const [key,value] of Object.entries(resume1)){
    // console.log(`${key}:${value} `);
}
Object.entries(resume1).forEach(([key, value]) => {
    if(key=="address"){
        for (key in value)
        console.log(`${key}: ${value[key]}`);
    }else{
        console.log(`${key}: ${value}`);
    }
})
}
looping()
