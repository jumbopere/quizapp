import { useState } from 'react';
import JoinScreen from './components/JoinScreen';
import Navbar from './components/Navbar';
import QuizScreen from './components/QuizScreen';



const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  return (
    <>
      <Navbar />
      <div className='relative mt-[50px] mx-auto mb-5 w-[95%] max-w-[650px] min-h-[350px] bg-[#fff] border-solid border-[#eee] border shadow' >
        {
          isQuizStarted ? (
            <QuizScreen />
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)} />
          )
        }
      </div>
    </>
  )
}

export default App