/*Slide PopUp */
$('#hamburger').on('click', function() {
    $('#PopUp').slideToggle('slow');
  });
  
  $('.menu-link').each(function() {
    $(this).on('click', function() {
      $('#menu').slideToggle('slow');
    });
  });

  /*Mensagem error */
  const InputEcurtador = document.getElementById('EncurtarLink')
  const Shorten = document.getElementById('btn-input')
  const card = document.getElementById('card-generate')

  Shorten.addEventListener('click', EncurtarLink)
  function EncurtarLink() {
    InputEcurtadorTeste = InputEcurtador.value
    if (InputEcurtadorTeste === '') {
        document.getElementById('EncurtarLink').style.border = 'solid 1px red'
        document.getElementById('invalid').innerHTML = `<em>Please add a link</em>`

    } else {
        document.getElementById('card-generate').style.display = 'block'
    }
  }


