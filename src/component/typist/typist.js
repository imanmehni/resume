
export default(tag,contenttype="ok",speed=100)=>{
    const title=document.querySelector(tag)
      let counter=0;
      let max=contenttype.length
      const myval=setInterval(()=>{
        counter++;
        title.innerHTML=contenttype.slice(0,counter)+'_'; 
         if(counter>=max){
          title.innerHTML=contenttype;
          clearInterval(myval);
        }
      },speed)
  }