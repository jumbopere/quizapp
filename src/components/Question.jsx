import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';



const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {

    const Option = "w-[calc(50%-20px)] border-solid border border-[#bbb] rounded-[5px] cursor-pointer text-center";
    const optionActive = "bg-[#1428cd] text-[#fff] w-[calc(50%-20px)] border-solid border border-[#bbb] rounded-[5px] cursor-pointer text-center";
    const [selectedOption, setSelectedOption] = useState(null);
    const timer = useRef(null);
    const progressBar = useRef(null)

    const gotoNextQuestion = () => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        flushSync(() => {
            setAnswer(selectedOption)
        });
        setSelectedOption(null)
    }
    useEffect(() => {
        progressBar.current.classList.remove("animate-active")

        setTimeout(() => {
            progressBar.current.classList.add("animate-active")
        }, 0);
        timer.current = setTimeout(gotoNextQuestion, 10000)
        return gotoNextQuestion;
    }, [question])

    return (
        <div className='question'>
            <div className='progress-bar w-[0%] h-[8px]' ref={progressBar}></div>
            <div className='question-count my-5 mx-0 text-center text-[15px] text-[#555]'>

                <b>
                    {currentQuestion}
                </b>
                of
                <b> {totalQuestions}</b>
            </div>

            <div className='py-5 px-10 '>
                <div className='title'>
                    <span className='text-[15px] text-[#555] font-semibold '>Question:</span>
                    <p className=' mt-[5px] text-[#111]'>  {question.title}</p>
                </div>
                <div className='mt-10 mx-0 mb-5 flex justify-between flex-wrap gap-5'>
                    {
                        question.options.map((option, index) => {
                            return (
                                <div className={index == selectedOption ? optionActive : Option}
                                    key={index}
                                    onClick={() => setSelectedOption(index)}
                                >
                                    {option}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='py-[10px] px-[20px] flex justify-end items-center border-t-[#000] border-t-[1px]'>
                <button onClick={gotoNextQuestion} className="cursor-pointer m-3 py-[10px] px-5 bg-[#111] text-[#fff] border-none outline-none text-lg rounded-[5px] font-poppins">Next</button>
            </div>
        </div>
    )
}

export default Question