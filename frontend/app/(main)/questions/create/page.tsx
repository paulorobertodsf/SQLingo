
import { fetchQuestion } from "@/lib/fetchQuestion";
import CreateLearnPageClient from "./CreateLearnPageClient";

const CreateLearnPage = async () => {
  const question = await fetchQuestion();

  return <CreateLearnPageClient question={question} />;
};

export default CreateLearnPage;