// Creating Elements
// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
const article = document.createElement('article')
article.id = "messages"

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.


// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.
// Example output.



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