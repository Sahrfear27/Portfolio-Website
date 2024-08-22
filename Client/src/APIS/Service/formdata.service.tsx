import http from "../axios";
type formType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const addMessage = (formData: formType) => {
  return http.post("/send", formData);
};

export default {
  addMessage,
};
