let title= document.getElementById('title');
let price= document.getElementById('price');
let taxes= document.getElementById('taxes');
let ads= document.getElementById('ads');
let total= document.getElementById('total');
let count= document.getElementById('count');
let cateogery= document.getElementById('cateogery');
let create = document.getElementById('create');


let temp;
let searchmode="";

let mode ="create" ;

function gettotal(){
    if(price.value != ''){
        let result= (+price.value + +taxes.value - +ads.value);
        total.innerHTML= result
        total.style.background='green'

    }
    else{
        total.innerHTML=''
        total.style.background='rgb(238, 102, 102)';

    }
   
};


let datapro ;



if(localStorage.product !=null){
    datapro= JSON.parse(localStorage.product)
 }else{
    datapro=[];
 }







create.onclick=function(){
    
    let newpro ={
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        total: total.innerHTML,
        count: count.value,
        cateogery: cateogery.value,

    };

    if(title.valie!='' && price.value !='' && cateogery.value!=''){
        if(mode==="create"){
            if(newpro.count>1){
                for(i=0; i<newpro.count;i++){
                    datapro.push(newpro);
        
                }
            }else{
                datapro.push(newpro);
            }
            
    
        }else{
            datapro[temp]=newpro;
        }
        

       
    }else{
        cleardata();
   

    }

    

  
    location.reload()
    localStorage.setItem('product',JSON.stringify(datapro));
    
    
 

    

};




function cleardata(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    total.innerHTML='';
    count.value='';
    cateogery.value='';

};



function showdata(){

    let table = document.getElementById('tbody');
    for(i=0;i<datapro.length ; i++ ){
        table.innerHTML+= `
        <tr>

                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].count}</td>
                    <td>${datapro[i].cateogery}</td>
                    <td><button onclick ="updatedata(${i})">update</button></td>
                    <td><button onclick="deletedata(${i})" >delete</button></td>
                    
                </tr>
        `
        ;
    };

    if(datapro.length>0){
        let deleteAll=document.getElementById('deleteall');
        deleteAll.innerHTML=`
        <button id="alldelete" onclick="deleteall()">DeleteAll</button>
        `
       

    }
};



function deletedata(i){
    datapro.splice(i,1);
    localStorage.setItem('product',JSON.stringify(datapro));
    location.reload();
    
    
    


};
function deleteall(){
    datapro.splice(0);
    localStorage.clear()
    location.reload()
};

showdata();



function updatedata(i){
    title.value= datapro[i].title;
    price.value= datapro[i].price;
    taxes.value= datapro[i].taxes;
    ads.value= datapro[i].ads;
    cateogery.value= datapro[i].cateogery;

    count.style.display="none";
    gettotal();
    create.innerHTML="update";

    temp=i;

    mode = 'update';

    scroll({
        top:0,
        behavior:"smooth",
    })
   



   
}
let search = document.getElementById("searchbar");

function getsearchmode(id){
    showdata()
    
    
    
    search.value=""
    if(id=='searchtitle'){
        searchmode="title";
        search.placeholder="search by title";
        search.focus();
    }else{
        searchmode="cateogry"
        search.placeholder="search by cateogory"
        search.focus();
    }
    
}

function searchdata(value){
    let table = document.getElementById('tbody');
    if(searchmode=="title"){
        
        for(i=0 ;i<datapro.length; i++){
            if(datapro[i].title.includes(value)){
                table.innerHTML= `
                <tr>
        
                            <td>${i}</td>
                            <td>${datapro[i].title}</td>
                            <td>${datapro[i].price}</td>
                            <td>${datapro[i].taxes}</td>
                            <td>${datapro[i].ads}</td>
                            <td>${datapro[i].total}</td>
                            <td>${datapro[i].count}</td>
                            <td>${datapro[i].cateogery}</td>
                            <td><button onclick ="updatedata(${i})">update</button></td>
                            <td><button onclick="deletedata(${i})" >delete</button></td>
                            
                        </tr>
                `
                ;
                

            }

        }








    }else{
        for(i=0;i<datapro.length;i++){
            if(datapro[i].cateogery.includes(value)){
                table.innerHTML= `
                <tr>
        
                            <td>${i}</td>
                            <td>${datapro[i].title}</td>
                            <td>${datapro[i].price}</td>
                            <td>${datapro[i].taxes}</td>
                            <td>${datapro[i].ads}</td>
                            <td>${datapro[i].total}</td>
                            <td>${datapro[i].count}</td>
                            <td>${datapro[i].cateogery}</td>
                            <td><button onclick ="updatedata(${i})">update</button></td>
                            <td><button onclick="deletedata(${i})" >delete</button></td>
                            
                        </tr>
                `
                ;
                
            }
        }
    }
       
    


    
    
}























