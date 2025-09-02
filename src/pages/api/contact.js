require('dotenv').config();
export default function nodemail(req,res){
    
    let nodemailer= require('nodemailer')
    const transporter = nodemailer.createTransport({
        port:process.env.SECRET_PORT,
        host:process.env.SECRET_HOST,
        auth:{
            user: process.env.GMAIL_USER,
            pass:process.env.SECRET_PASSWORD,  
        },
        secure:true,
    });
    
    
    console.log(req.body)

    const mailData = {
        from: process.env.GMAIL_USER,
        to:process.env.GMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
}
export const config = {
    api:{
        externalResolver: true,
    },
}

