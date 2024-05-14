import { useEffect } from "react";
import { useState } from "react";

export default function Question(){
    const [question, setQuestion] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:3000/api/question/123')
            .then(resp => resp.json())
            .then(json => setQuestion(json));

    },[]);

    function renderAnswers(){
        if(question){
            return question.answers.map((a, index) => {
                return <li key={index} > {a} </li>
            });
        }
        
        return false;
    }


    return (
        <div>
            <h1>Questions</h1>
            <br/>

            <div>
                <span> {question?.id} - {question?.question} </span>
                <ul>
                    {renderAnswers()}
                </ul>
            </div>
        </div>
    );
}