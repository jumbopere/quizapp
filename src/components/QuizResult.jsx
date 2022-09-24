import React from 'react'

const QuizResult = ({result}) => {
  return (
    <div
    className=' w-full h-[350px] flex flex-col justify-center items-center gap-5'>
        <h2>Result: {result.point} points</h2>
        <p>Selected {result.correct} correct options out of {result.total} questions</p>
    </div>
  )
}

export default QuizResult