const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.gridCustomKey);
export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Lastname: ${body.lastname}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

  const data = {
    to: "georgetsiftsiss@gmail.com",
    from: "georgetsiftsiss@gmail.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};
