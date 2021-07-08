import nodemailer from "nodemailer";

interface sendMyNotificationInterface {
  userName: string;
  tel: string;
  email: string;
}
export default async function sendMyNotificationInterface({
  userName,
  tel,
  email,
}: sendMyNotificationInterface): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: "marketing@lojasoi.com",
      pass: "Lk2Ul^G%@1ri",
    },
  });
  await transporter.sendMail({
    from: "Marketing <marketing@lojasoi.com>",
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
