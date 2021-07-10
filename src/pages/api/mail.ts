/* eslint-disable  */

import { VercelRequest, VercelResponse } from "@vercel/node";

import sendNotification from "../../../utils/sendEmailNotification";

export default async (request: VercelRequest, response: VercelResponse) => {
  const { userName, tel, email } = request.body;

  await sendNotification({
    userName,
    tel,
    email,
  });
  return response.status(201).json({ ok: true });
};
