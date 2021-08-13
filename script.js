
//Mask of form----------------------------

    function formatar(mascara, documento){
      var i = documento.value.length;
      var saida = mascara.substring(0,1);
      var texto = mascara.substring(i)
      
      if (texto.substring(0,1) != saida){
                documento.value += texto.substring(0,1);
      }
      
    }
    //--------------------------------------------

    
    //Function of soft scroll ----------------------------

    const menuItens = document.querySelectorAll('.menu a[href^="#"]')

    menuItens.forEach(item => {
      item.addEventListener('click', scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
      event.preventDefault()
      const element = event.target;
      const id = element.getAttribute('href')
      const to = document.querySelector(id).offsetTop;
      
      window.scroll({
        top: to,
        behavior: "smooth"

      });
      
    }