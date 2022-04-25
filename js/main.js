
const myBtn = document.querySelector('button')
myBtn.addEventListener('click', getFetch)
myBtn.addEventListener('keyup', (x) => {
  if (x === 13) {
    myBtn.click()
  }})


function getFetch(){
  
  const url = 'https://deckofcardsapi.com/api/deck/new/draw/?deck_count=1'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        localStorage.setItem('deck', data.deck_id)
//card needs to display
        document.querySelector('img').src = data.cards[0].image
//Decision area based on suit of the card
        if (data.cards[0].suit === "SPADES") {
          console.log('spades')
          //document.querySelector('h2').innerText = 'Your decision has been made'
          document.querySelector('h2').innerText = 'Fate swirls, the answer is NO'
          } else if (data.cards[0].suit === "HEARTS") {
          console.log('hearts')
          //document.querySelector('h2').innerText = 'Your decision has been made'
          document.querySelector('h2').innerText = 'Fate swirls, the answer is Yes. There is more however, fate shines on you. Something unforseen but good happens to the character, what is it? '
          } else if (data.cards[0].suit === "DIAMONDS") {
          console.log('diamonds')
          //document.querySelector('h2').innerText = 'Your decision has been made'
          document.querySelector('h2').innerText = 'Fate swirls, the answer is YES'
          } else if (data.cards[0].suit === "CLUBS") {
          console.log('clubs')
          //document.querySelector('h2').innerText = 'Your decision has been made'
          document.querySelector('h2').innerText = 'Fate swirls, the answer is Yes. There is more however, fate throws shade on you. Something unforseen but bad happens to the character, what is it? '
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

