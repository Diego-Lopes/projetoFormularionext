import { NextApiRequest, NextApiResponse } from "next/types";

import sendNotification from "../../../utils/sendNotification";

export default async function mail(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    const { userName, tel, email } = req.body;
    sendNotification({
      userName,
      tel,
      email,
    });
    return res.status(200).json({ sucess: "email is send" });
  } else {
    return res.status(400).json({ error: "invalid request method" });
  }
}
