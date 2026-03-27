 function GetData(params){
    fetch(`https://jsonplaceholder.typicode.com/${params}`).then((res)=>res.json())
    .then((data)=>{
        console.log("common service",data)
        return data;
      
    })
  };

  export default GetData;