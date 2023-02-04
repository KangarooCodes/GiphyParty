let clearForm = $('#input');
let add = document.getElementById('result')

$('form').on('submit', async function(e){
     e.preventDefault();  
       
     giphy('')

     async function giphy() {
          const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=cEIj9I4H7j6nOKQJcV1nK5RoOxV8tCxo&q=${clearForm.val()}&limit=1&offset=1&rating=pg-13&lang=en`);
     
          let resURL = res.data.data[0].images.original.url;

          $('#result').append(`<div><img src=${resURL}>`)

          return res.data.data[0].images.url;
     }
     clearForm.val('');  
})

$('button').on('click', () => {
     location.reload();
})
     

// giphy('bear')
