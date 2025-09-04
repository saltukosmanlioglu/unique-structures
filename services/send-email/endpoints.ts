import service from "../instance";

import { SendEmailRequest } from "./types";

export const sendEmail = (data: SendEmailRequest) =>
    service.post<SendEmailRequest>("send-email", data);