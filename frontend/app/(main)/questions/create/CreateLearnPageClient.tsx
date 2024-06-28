
"use client";

import { useState } from "react";

interface CreateLearnPageClientProps {
  question: { question: string };
  answer: { answer: string };
}

const CreateLearnPageClient: React.FC<CreateLearnPageClientProps> = ({ question }) => {
  const [answer, setAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const normalizeString = (str: string) => {
    return str.trim().replace(/\s+/g, ' ');
  };

  const handleSubmit = () => {
    const normalizedUserAnswer = normalizeString(answer);
    const normalizedCorrectAnswer = normalizeString(question.answer);

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setFeedback("Resposta correta! Parabéns!");
      //CREATE TABLE Clientes ( ID INT PRIMARY KEY, Nome VARCHAR(100), Email VARCHAR(100));
    } else {
      setFeedback(`Resposta errada. O certo é: ${question.answer}`);
    }
  };

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h3>{question.question}</h3>
      <br />
      <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
        <textarea
          placeholder="Resposta"
          className="w-full bg-transparent border-none focus:outline-none resize-none"
          rows={10}
          value={answer}
          onChange={handleAnswerChange}
        />
      </pre>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar Resposta
      </button>
      {feedback && (
        <div
          className={`mt-4 p-4 rounded ${
            feedback.includes("correta") ? "bg-green-200" : "bg-red-200"
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default CreateLearnPageClient;
