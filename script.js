let quotesJSON = `[
      "Don’t see others doing better than you, beat your own records every day because success is a fight between you and yourself.",
      "A rebellion is not a revolution. It may ultimately lead to that end.",
      "Revolution is an inalienable right of mankind. Freedom is an imperishable birthright of all.",
      "Where the mind is led forward by thee into ever-widening thought and action-Into that heaven of freedom, my father, let my country awake.",
      "A war based on Satyagraha is always of two kinds. One is the war we wage against injustice and the other we fight against our own weaknesses.",
      "Those who are prepared to die for any cause are seldom defeated.",
      "Freedom is not worth having if it does not include the freedom to make mistakes.",
      "First they ignore you, then they laugh at you, then they fight you, then you win.",
      "You must be the change you wish to see in the world.",
      "Live as if you were to die tomorrow. Learn as if you were to live forever."
    ]`;
let quotesAuthorJSON = `[
      "Chandrasekhar Azad",
      "Bhagat Singh",
      "Bhagat Singh",
      "Rabindranath Tagore",
      "Sardar Vallabhbhai Patel",
      "Pandit Jawarharlal Nehru",
      "Mahatma Gandhi",
      "Mahatma Gandhi",
      "Mahatma Gandhi",
      "Mahatma Gandhi"
    ]`;
let quotesImageJSON = `[
      "pictures/Chandrasekhar Azad.jpeg",
      "pictures/Bhagat Singh.jpeg",
      "pictures/Bhagat Singh.jpeg",
      "pictures/Rabindranath Tagore.jpeg",
      "pictures/Sardar Vallabhbhai Patel.jpeg",
      "pictures/Pandit Jawarharlal Nehru.jpeg",
      "pictures/Mahatma Gandhi.jpeg",
      "pictures/Mahatma Gandhi.jpeg",
      "pictures/Mahatma Gandhi.jpeg",
      "pictures/Mahatma Gandhi.jpeg"
    ]`;
let quotesAuthorPositionJSON = `[
      "Freedom Fighter",
      "Freedom Fighter",
      "Freedom Fighter",
      "Poet",
      "Iron Man Of India",
      "First Prime Minister Of India",
      "Father Of the Nation",
      "Father Of the Nation",
      "Father Of the Nation",
      "Father Of the Nation"
    ]`;
let quotes = JSON.parse(quotesJSON);
//console.log(quotes);
let quotesAuthor = JSON.parse(quotesAuthorJSON);
let quotesImage = JSON.parse(quotesImageJSON);
let quotesAuthorPosition = JSON.parse(quotesAuthorPositionJSON);
//console.log(quotesAuthorPosition);
function getquote() {
  let num = Math.floor(Math.random() * 10);
  document.getElementById("quote-text-id").innerHTML = quotes[num];
  document.getElementById("quote-author-id").innerHTML = quotesAuthor[num];
  document.getElementById("quote-image-id").src = quotesImage[num];
  document.getElementById("quote-image-id").alt = quotesAuthor[num];
  document.getElementById("quote-job-id").innerHTML = quotesAuthorPosition[num];
}
