const nodemailer = require('nodemailer')
const crypto = require('crypto')

const f = async (crypto, transporter) => {
  const key = await new Promise((resolve, reject) => {
    const key = crypto.randomBytes(48, (error, buffer) => {
      const key = buffer.toString('hex')
      resolve(key)
    })
  })
  const result = await new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'Archaeon Platform <no-reply@archaeon.io>',
      to: 'braungoodson@gmail.com',
      priority: 'high',
      subject: 'Welcome to Archaeon. Confirm your e-mail within.',
      text: `Hello, $username.

Here is your account information:

Username: $username
E-mail: $email
Password: $password

Use the following link to confirm your e-mail, and begin using the platform.

https://www.archaeon.io/confirm-email/$key

Good luck.

You're recieving this e-mail because somebody signed up for archaeon, a platform for dayz nitrado public slot server modding.`
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
  return Promise.resolve(key)
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'archaeonplatform@gmail.com',
    pass: '!Kaolaubuntu32'
  }
})

f(crypto, transporter)