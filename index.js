 document.addEventListener('DOMContentLoaded',  function(){
    const change=document.querySelector('#text');
    if(change){
    change.textContent="This is really cool!";
  }else{
    console.error("Text not found ");

  }
});