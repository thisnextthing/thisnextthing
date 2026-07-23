document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".dropdown button").forEach((b)=>{
    document.addEventListener("click", function(event){
      if(event.target === b || b.contains(event.target))
      {
        const menu = b.nextElementSibling
        menu.classList.toggle("active")  
      }
      else
      {
        document.querySelectorAll(".dropdown menu").forEach((m)=>{
          m.classList.remove("active")
        })
      }
    })
  })
})