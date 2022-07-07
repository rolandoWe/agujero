
let ondas=document.querySelectorAll('.ondas')
document.querySelector('.animar').addEventListener('click',()=>{
    console.log('psps')
    ondas.forEach((o)=>{
    o.classList.toggle('addAnim')
    })
    if(document.querySelector('.animar').innerHTML==="animar"){
        document.querySelector('.animar').innerHTML="parar"
    }else{
        document.querySelector('.animar').innerHTML="animar"
    }
})