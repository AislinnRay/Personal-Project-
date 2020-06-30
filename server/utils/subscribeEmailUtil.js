require("dotenv").config();
const nodemailer = require("nodemailer");
const {SERVER_EMAIL, SERVER_PASSWORD, FROM_EMAIL} = process.env;

const sendEmail = (req, res) => {
    const {email, firstName} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SERVER_EMAIL,
          pass: SERVER_PASSWORD
        }
      });

    let htmlCode = `<!DOCTYPE html>
    <!-- PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> -->
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Plantsiful</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
            <tr>
                <td style="padding: 10px 0 30px 0;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                        <tr>
                            <td align="center" bgcolor="#ffffff" style="padding: 0px 0 0px 0; color: #cccccc; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                <img src='https://www.proflowers.com/blog/wp-content/uploads/2019/06/how-to-water-plants-on-vacation-hero-1.jpg'
                                 alt="Plants in pots" width="600" height="200" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #617872; font-family: Arial, sans-serif; font-size: 24px;">
                                            <b>Welcome to Plantsiful, ${firstName}!</b>
                                        </td>
                                    </tr>
                                    <tr>
                                            <td style="padding: 20px 0 30px 0; color: #364440; font-family: Arial, sans-serif; font-size: 20px; line-height: 22px;">
                                                Thank you for registering. Plantsiful is where plant-lovers of all ages can keep track of their plants' care. Whether you're keeping track of each plant's watering schedule or documenting growth, we're delighted to be part of your journey.
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                                                    <img src="https://cdn.pixabay.com/photo/2019/01/09/14/13/leaves-3923413__480.jpg" alt="" width="100%" height="140" style="display: block;" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #364440; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                    Hey! We know you are just getting started, so head over to your profile page and update your profile picture. Get creative! Feel free to update your credentials here as well at any time in the future.  
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">
                                                        &nbsp;
                                                    </td>
                                                    <td width="260" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                                <td> 
                                                                    <a href="http://localhost:3000/#/" style="color: #ffffff;">
                                                                    <img src="https://cdn.pixabay.com/photo/2017/05/27/03/20/succulents-2347550__480.jpg" alt="" width="100%" height="140" style="display: block;" />
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                    Start adding new plants to your collection now. Updated plant profile that includes plant's location, acquisition date, fertilizer specifics and schedule, rotation log, photo gallery with timestamps and comments to track growth.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#b3cfcc" style="padding: 30px 30px 30px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #080707; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                            &reg; Plantsiful, Seattle 2013<br/>
                                            <a href="#" style="color: #0c0a0a;"><font color="#0c0a0a">Unsubscribe</font></a> to this newsletter instantly
                                        </td>
                                        <td align="right" width="25%">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                            <img src="https://image.flaticon.com/icons/svg/1384/1384017.svg" alt="Twitter" width="38" height="38"  border="0" />
                                                        </a>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.instagram.com/" style="color: #ffffff;">
                                                            <img /src="https://image.flaticon.com/icons/svg/1384/1384015.svg" alt="Instagram" width="38" height="38"  border="0" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `
    const registerEmail = {
        from: FROM_EMAIL,
        to: email,
        subject: 'News from Plantsiful',
        text: "You've got mail",
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