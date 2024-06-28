import { getQuestion } from "@/db/queries";

const CreateLearnPage = async () => {
    const question = await getQuestion();

    // const handleInputChange = (event: Event) => {
    //     var respostaUser = event;
    //     if (respostaUser == question.answer){
    //         var div = document.getElementById('resposta');
    //         if(div) {
    //             div.innerHTML = '<h1>RESPOSTA CORRETA</h1>';
    //         }
    //     }
    // };

    return (
        <div>
            <div className="h-full max-w-[912px] px-3 mx-auto">
                <h3>{question.question}</h3>
                <br></br>            
                <pre className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto">
                    <textarea
                        placeholder="Resposta"
                        // onChange={handleInputChange} 
                        className="w-full bg-transparent border-none focus:outline-none resize-none"
                        rows="10"
                    />
                </pre>
            </div>
        </div>
    );
}

export default CreateLearnPage;