import nodemailer from "nodemailer";

interface sendMyNotificationInterface {
  userName: string;
  tel: string;
  email: string;
}
async function sendMyNotification({
  userName,
  tel,
  email,
}: sendMyNotificationInterface): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: "teste351@zohomail.com",
      pass: "diego.lopes",
    },
  });
  await transporter.sendMail({
    from: "Marketing <teste351@zohomail.com>",
    to: "diegojob09@gmail.com",
    subject: "teste local",
    html: `
      <p style="margin-bottom:22px; font-size: 18px" >
        Uma nova pessoa pretende fazer um agendamento.
      </p>
      <p style="margin-bottom:22px; font-size: 18px" >
        <strong>Nome: </strong>${userName}<br/>
        <strong>Email: </strong>${email}<br/>
        <strong>Telefone: </strong>${tel}<br/>
      </p>
    `,
  });
}
export default sendMyNotification;
