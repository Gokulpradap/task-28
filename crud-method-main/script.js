var isEdit;
var currentid;
async function submitData(){
    try {

        if(isEdit==true){
            putData();
            isEdit=false;
        }else{
            postData();
            
        }
        
    } catch (error) {
        console.log(error)
    }
  
}






async function postData(){
    var formdata= {
        FirstName : document.getElementById("fstname").value,
        
        LastName : document.getElementById("lstname").value,
        Gender : document.getElementById("gender").value,
        Choice_Of_Food : document.getElementById("food").value,
        Address : document.getElementById("address").value,
        State : document.getElementById("state").value,
        Country : document.getElementById("country").value,
        Pin_Code : document.getElementById("pin").value
    }
try{
    var postdata= await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/formdata",{
        method:"POST",
        body:JSON.stringify(formdata),
        headers:{
            "Content-type":"application/json"
        }
        
    } )
    alert("Data stored");
    getdata()
}catch(error){
    alert("something went wrong");
}
    
}


async function getdata(){
    try {
        var datas=await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/formdata");
        var dat= await datas.json();
        console.log(dat)
        let tbody=document.getElementById("tbody");
        tbody.innerText="";
            

        dat.forEach((data) => {
            var tr=document.createElement("tr");

            var idtd=document.createElement("td");
            idtd.innerText=data.id;

            var rowid=data.id;

            var FirstNametd=document.createElement("td");
            FirstNametd.innerText=data.FirstName;

            var LastNametd=document.createElement("td");
            LastNametd.innerText=data.LastName;

            var Gendertd=document.createElement("td");
            Gendertd.innerText=data.Gender;

            var Choice_Of_Foodtd=document.createElement("td");
            Choice_Of_Foodtd.innerText=data.Choice_Of_Food;

            var Addresstd=document.createElement("td");
            Addresstd.innerText=data.Address;

            var Statetd=document.createElement("td");
            Statetd.innerText=data.State;

            var Countrytd=document.createElement("td");
            Countrytd.innerText=data.Country;

            var Pin_Codetd=document.createElement("td");
            Pin_Codetd.innerText=data.Pin_Code;


        
         

            var edit=document.createElement("td");
            var iedit=document.createElement("i");
            edit.append(iedit);

            iedit.setAttribute("class","far fa-edit");
            iedit.addEventListener("click",async function (){
                try {
                 var edata=await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/formdata/"+rowid)
                 var editdata=await edata.json();
                 console.log(editdata);
                                 currentid=editdata.id;
                 document.getElementById("fstname").value=editdata.FirstName;
                 document.getElementById("lstname").value=editdata.LastName;  
                 document.getElementById("gender").value=editdata.Gender;
                 document.getElementById("food").value=editdata.Choice_of_Food;
                 document.getElementById("address").value=editdata.Address;
                 document.getElementById("state").value=editdata.State;
                 document.getElementById("country").value=editdata.Country;
                 document.getElementById("pin").value=editdata.Pin_Code;
            
                 } catch (error) {
                    console.log(error)
                } 
                isEdit=true;
             });



            var delet=document.createElement("td");
            var idelet=document.createElement("i");
            delet.append(idelet);
            
            idelet.setAttribute("class","fas fa-trash-alt");
            
            idelet.addEventListener("click",async function(){
                         try {
                            fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/formdata/"+rowid,{
                                method:"DELETE"
                                
                                
                            })
                            alert("Data Deleted");
                            getdata();
                             
                         } catch (error) {
                             console.log(error)
                         }
                        
            })
         

            
            // edit.onclick=formEdit();
        tr.appendChild(idtd);
        tr.appendChild(FirstNametd);
        tr.appendChild(LastNametd);
        tr.appendChild(Gendertd);
        tr.appendChild(Choice_Of_Foodtd);
        tr.appendChild(Addresstd);
        tr.appendChild(Statetd);
        tr.appendChild(Countrytd);
        tr.appendChild(Pin_Codetd);
        tr.appendChild(edit);
        tr.appendChild(delet);
        
        tbody.appendChild(tr);
        });
        
    
    } catch (error) {
        alert("something went wrong")
        console.log(error)
        
    }
}
getdata();


async function putData(){
    var formdata= {
        
        FirstName : document.getElementById("fstname").value,
        
        LastName : document.getElementById("lstname").value,
        Gender : document.getElementById("gender").value,
        Choice_Of_Food : document.getElementById("food").value,
        Address : document.getElementById("address").value,
        State : document.getElementById("state").value,
        Country : document.getElementById("country").value,
        Pin_Code : document.getElementById("pin").value
    }
    // getdata();

try {
    var putdata=await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/formdata/"+currentid,{
        method:"PUT",
        body:JSON.stringify(formdata),
        headers:{"Content-type":"application/json"}
    
    })
    alert("data updated")
    getdata();
}
catch (error) {
    console.log(error);
}
    
}






