//jshint esnext:true

function getPromise(url)
{
  
  return new Promise(function(resolve, reject)
{
  
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", url, true);
  
  xhr.onload = function(){
   
    if(xhr.status === 200){
      resolve(JSON.parse(xhr.response));
    }
    else
    {
      reject(xhr.statusText +', Status: '+xhr.status); 
    } 
};
  
    xhr.onerror = function(){
    reject(xhr.statusText);  
 };
 
  xhr.send();

});
}

let url = 'http://jsonplaceholder.typicode.com/users';

let promise = getPromise(url);

// we create varaible 

let ArrayName = [];
let userArray = [];
let adress = [];
let ids = [];
let geoArray = [];
let StreetArray = [];
let productArray = [];

// we create object 
let geoObject = {
  lat : '',
  lng : ''
}
  
let company = {
  name : '',
  id : '',
  company : '',
  zipcode : ''
}

let product = {
  
 id: '',
 bs: '' 
}

let addressStreet = {
  
  street: '',
  zipcode: ''    
  
}

promise.then(function(data){

  // Part 1
  //  we disaply all the name in the html which is id out put 
  for(let i=0; i < data.length; i++)
  {
  
   document.getElementById("names").innerHTML += JSON.stringify(data[i].name)+'</a><br>';
  }

  // Part 2
 // we disaply all the lat and lng address in the html which is geo out put 

  for(let n=0; n < data.length; n++)
  {
    geoObject.lat = JSON.stringify(data[n].address.geo.lat);
    geoObject.lng = JSON.stringify(data[n].address.geo.lng);

    geoArray.push(JSON.stringify(geoObject));
  
    document.getElementById("geo").innerHTML += geoArray[n]+'</a><br>';
   
  }
    // Part 3
    // we disaply all the name, id , comapny name and address zipcode  in the html which is userdetails out put 

   for(let c=0; c < data.length; c++)
  {
    
    company.name = JSON.stringify(data[c].name);
    company.id = JSON.stringify(data[c].id);
    company.company = JSON.stringify(data[c].company.name);
    company.zipcode = JSON.stringify(data[c].address.zipcode);
    
    userArray.push(JSON.stringify(company));
    
    document.getElementById("userdetails").innerHTML += userArray +'</a><br>';
    
  }
  // Part 4
 // we disaply all the name, id , comapny name and address zipcode  in the html which is userdetails out put 

   for(let q=0; q < data.length; q++)
  {
  
    addressStreet.street = JSON.stringify(data[q].address.street);
    addressStreet.zipcode = JSON.stringify(data[q].address.zipcode);
    
   let check = data[q].address.zipcode;
   
   // will check of sipcode starts with the digit 5 
   if(check[0] === '5')
  {  
    adress[q] = data[q].address.zipcode;
  }
   
  StreetArray.push(JSON.stringify(addressStreet));
    
  document.getElementById("StreetName").innerHTML += StreetArray +'</a><br>';

  }
  
// Part 5
 // we disaply all the id, prodcut comapny name in the html which is product out put 

   for(let p=0; p < data.length; p++)
  {
    
    product.id = JSON.stringify(data[p].id);
    product.bs = JSON.stringify(data[p].company.bs);
   
    productArray.push(JSON.stringify(product));
    
    document.getElementById("product").innerHTML += productArray +'</a><br>';

  }
    
});




 
  