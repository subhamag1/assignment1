function savetrainer ()
{

const emp = new trainer();

emp.setup(

    document.getElementById('eid').value,
    

    document.getElementById('eName').value,

    document.getElementById('eEmail').value,

);
        localStorage.setItem(emp.eEmail,JSON.stringify({

            eId : emp.eId,

            eName: emp.eName,

            eEmail: emp.eEmail,

        
        }))
    }
    function searchtrainer ()
    {  
        const emp = new trainer();
    
        const employees = emp._filter(
    
                            document.getElementById('searchBy').value,
                                   );
    console.log(employees)
        buildEmployeeTable(employees);
    }
    const buildEmployeeTable = (employees) =>
    {   drop = " ";
        employees.forEach((emp)=>{
            drop +=`<option value="${emp.eName}">${emp.eName}</option>`

               });
               document.getElementById('list').innerHTML= drop;
               
            }

    
    
      class trainer {
         setup(eId,eName,eEmail)
         {
            
                        this.eId = eId
            
                        this.eName = eName
                       this.eEmail = eEmail
         }  
         _filter(searchBy){

            let employees = [];
    
        
    
            
    
                        Object.keys(localStorage).forEach((e)=>{
    
                            const _emp = JSON.parse(localStorage.getItem(e));
    
                            if(_emp.eId == searchBy){
    
                                employees.push(_emp);
                                }
    
                            })
        
        return employees;}
    }          
    
    function assign(){
       cls= document.getElementById("class").value
       slot= document.getElementById("SLOT").value
       sub= document.getElementById("searchBy").value
       trainer= document.getElementById("list").value
       if(slot==1){
           document.getElementById("s1").innerHTML=sub
           document.getElementById("t1").innerHTML=trainer
           
       }
       if(slot==2){
        document.getElementById("s2").innerHTML=sub
        document.getElementById("t2").innerHTML=trainer
        
    }
    if(slot==3){
        document.getElementById("s2").innerHTML=sub
        document.getElementById("t2").innerHTML=trainer
        
    }
    if(slot==4){
        document.getElementById("s2").innerHTML=sub
        document.getElementById("t2").innerHTML=trainer
        
    }
    if(slot==5){
        document.getElementById("s2").innerHTML=sub
        document.getElementById("t2").innerHTML=trainer
        
    }
    if(slot==6){
        document.getElementById("s2").innerHTML=sub
        document.getElementById("t2").innerHTML=trainer
        
    }
    }