import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendAccountActivationEmail = async (email, otp) => {
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);
  console.log("SMTP_USER:", process.env.SMTP_USER);
  // const mailOptions = {
  //   from: process.env.SMTP_USER,
  //   to: email,
  //   subject: "Your OTP Code",
  //   text: `Your OTP code is: ${otp}`,
  // };
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verify Your Email - OTP Code",
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #ffffff;">
    <main style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
      <!-- Header -->
      <div style="background: linear-gradient(90deg, #4a90e2, #007bff); padding: 30px 20px; text-align: center;">
        <img src="https://your-frontend.vercel.app/logo.png" alt="App Logo" style="height: 50px; margin-bottom: 10px;" />
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Welcome to Auth</h1>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">
        <p style="font-size: 17px; margin-bottom: 15px; font-weight: bold; color: #111;">Hey there 👋</p>

        <p style="font-size: 15px; color: #333; margin-bottom: 15px;">
          To complete your sign-up, please use the code below to verify your email:
        </p>

        <p style="font-size: 15px; color: #444; padding: 10px; background-color: #f6f6f6; border-radius: 8px;">Do not share this code with anyone.</p>

        <div style="font-size: 28px; font-weight: bold; color: #007bff; margin: 30px 0;">
          ${otp}
        </div>

        <p style="font-size: 14px; color: #444;">
        This one-time code will expire in <strong>5 minutes</strong>.
</p>
<p style="font-size: 14px; color: #444;">
  Didn’t create an account? just ignore this email.
</p>
      </div>
    </main>
  </div>
`,
  };

  await transporter.sendMail(mailOptions);
};
