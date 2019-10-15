// Creating Elements
// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.

const myContainer = document.querySelector(".container")
const article = document.createElement('article')
article.id = "messages"
myContainer.appendChild(article)


// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.


// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.
// Example output.

// creating elements for 5 messages
const message1 = document.createElement('section')
const message2 = document.createElement('section')
const message3 = document.createElement('section')
const message4 = document.createElement('section')
const message5 = document.createElement('section')

// a list of messages to cycle through
const messageList = [message1, message2, message3, message4, message5]

// assigning className of message to each message, adding the innerHTML with corresponding message number, appending final message to article
for (let i = 0; i < messageList.length; i++) {
    messageList[i].className = "message"
    messageList[i].innerHTML = `This is message number ${i +1}`
    article.appendChild(messageList[i])
}





// <article id="messages">
//     <section class="message">
//         Are we doing fireworks this year?
//     </section>
//     <section class="message">
//         After last year's "tree incident", should we?
//     </section>
//     <section class="message">
//         The fire fighters put it out in like a minute. Wasn't even a real fire.
//     </section>
//     <section class="message">
//         We can set them off in the street.
//     </section>
//     <section class="message">
//         Our neighbors' houses are flammable, too
//     </section>
// </article>