require("dotenv").config();
const nodemailer = require("nodemailer");
const {SERVER_EMAIL, SERVER_PASSWORD, TO_EMAIL} = process.env;

const sendEmail = (req, res) => {
    const {email, name, subject, message} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SERVER_EMAIL,
          pass: SERVER_PASSWORD
        }
      });

    //let htmlCode = ''
    const registerEmail = {
        from: email,
        to: TO_EMAIL,
        subject: `${subject} from ${name}`,
        text: message,
        //html: htmlCode
    }
        transporter.sendMail(registerEmail,(err, data) => {
            if (err){
                console.log(err)
                res.status(409).send("Error occured sending email")
            } else {
                console.log('Email sent successfully!')
                console.log(data)
                res.status(200).send("Email sent!")
            }
        })
}
module.exports = {sendEmail}