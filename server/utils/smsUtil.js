// HEARTBEAT
const heartbeats = require("heartbeats")
const heart = heartbeats.createHeart(1000 * 10)

// heart.createEvent(1, async (count, last) => {
//     const peopleThatMatch = await db.auth.get_phone_numbers()
//     console.log(peopleThatMatch)
//     console.log(count)
// })


//   This is the action. 
  module.exports = {
    sendText: async (count, last, db) => {
        // const peopleThatMatch = await db.get_phone_numbers()
        // console.log(peopleThatMatch)
        // peopleThatMatch.forEach((element) => {
//     twilio.messages
//       .create({
//         body: "Do the thing in the calendar!",
//         from: "+15005550006",
//         to: element.phone,
//       })
//       .then((message) => {
//         console.log(`Text sent to ${message.to}`)
//         console.log(message.body)
//       })
//       .catch((err) => console.log(err))
//   })
        console.log(count)
    }
    }