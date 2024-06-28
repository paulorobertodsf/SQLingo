import { getQuestion } from "@/db/queries";

export const fetchQuestion = async () => {
  const question = await getQuestion();
  return question;
};
