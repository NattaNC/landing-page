/*Slide PopUp */
$('#hamburger').on('click', function() {
    $('#PopUp').slideToggle('slow');
  });
  
  


  /*Mensagem error */
  const card = document.getElementById('card-generate')

  document.getElementById('btn-input').addEventListener('click', EncurtarLink)
  function EncurtarLink() {
    let url = document.getElementById('EncurtarLink').value;

    //api key: fddb50cf2f8f4835889323c567cae747
    
    //encurtar o link

    //headers
    let headers = {
      "Content-Type" : "application/json",
      "apiKey" : "fddb50cf2f8f4835889323c567cae747"
    }

    //dados
    let linkRequest = {
      destination: url,
      domain: { fullName: "rebrand.ly"}
    }

    fetch('https://api.rebrandly.com/v1/links', {
      method: "POST",
      headers: headers,
      body: JSON.stringify(linkRequest)
    }).then(Response => Response.json())
      .then(json => {
        let inputUrl = document.getElementById('EncurtarLink')
        inputUrl.value = json.shortUrl
        
        if (!url) {
          document.getElementById('EncurtarLink').style.border = 'solid 1px #ee1d1d'
          document.getElementById('EncurtarLink').style.webkitTextFillColor = '#ee1d1d'
          document.getElementById('invalid').innerHTML = `<em>Please add a link</em>`
      } else {
          document.getElementById('display').style.display = 'block'
          document.getElementById('link').innerText = url
          document.getElementById('link-encurtado').innerText = inputUrl.value
        }
      });
  }


  //copiar url

  document.getElementById('copied').addEventListener('click', copied)
  function copied() {  
    document.getElementById('copied').innerText = 'Copied!'

    let inputUrl = document.getElementById('EncurtarLink')
    
    inputUrl.select()
    inputUrl.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(inputUrl.value)
  }







  



