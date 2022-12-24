import { TypeAnimation } from 'react-type-animation';
import useWindowDimensions from '../../js/useWindowDimensions';

const  Body = () => {
    const { height, width } = useWindowDimensions();

    return (
      <>
        <div className="flex flex-col justify-center items-center w-screen text-main h-screen  p-0 m-0">
          <TypeAnimation
            sequence={[
              '',
              250,
              'Welcome',
              500, 
              'Welcome to', 
              500,
              'Welcome to the Nautillus',
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className = "text-6xl text-center my-2"
          />
          <p className="text-2xl my-2 text-center p-2">We will bring hackers at the sea to collect shells</p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button className="bg-main text-gray-50 py-3 px-10 rounded-md font-bold">Get started</button>
        </div>

        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-8">What Nautillus includes:</p>

          <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4">Theoritical knowledge</p>
                <p className="text-xl text-left w-64">Here, customer can get free and paid courses which will help him/her to learn more about cybersecurity.</p>
              </div>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4">Challenges</p>
                <p className="text-xl text-left w-64">There are additional challanges to test your problem solving skills.</p>
              </div>
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                    <p className="text-2xl text-left mb-4">Practical exercises</p>
                    <p className="text-xl text-left w-64">Here, customer can practice varios types of scenarios and understand how real hackers perform attacks on victims.</p>
                  </div>
                  <br/>
                  <button className="bg-main text-gray-50 py-3 px-10 rounded-md font-bold">Check out courses</button>
                  </>) : ""
              }
            </div>
            { (width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-4">
                <p className="text-2xl text-left my-4">Practical exercises</p>
                <p className="text-xl text-left w-64">Here, customer can practice varios types of scenarios and understand how real hackers perform attacks on victims.</p>
              </div>
              <br/>
              <button className="bg-main text-gray-50 py-3 px-10 rounded-md font-bold">Check out courses</button>
            </div>) : ""
          }
          </div>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-8">How custumer can grow:</p>

          <div className='flex flex-row'>
            {(width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-4">
                <p className="text-2xl text-left my-4">Chance to work with us</p>
                <p className="text-xl text-left w-64">After getting high scores on exams, customer will have opportunity to be a mentor or a pen-tester here at Nautillus.</p>
              </div>
            </div>) : ""}
            <div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4">Certificate</p>
                <p className="text-xl text-left w-64">After customer will pass exam, he/she will receive certificate.</p>
              </div>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left">Start Pen-testing</p>
                <p className="text-2xl text-left mb-4">or bug bounity</p>
                <p className="text-xl text-left w-64">In case of getting high skills, customer will be able to start penetration testing or bug bounity on his/her own.</p>
              </div>
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                    <p className="text-2xl text-left mb-4">Practical exercises</p>
                    <p className="text-xl text-left w-64">Here, customer can practice varios types of scenarios and understand how real hackers perform attacks on victims.</p>
                  </div>
                </>) : ""
              }
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="flex flex-col justify-center items-center w-screen text-main h-screen p-0 m-0">
          <p className="text-4xl text-center my-8">Q&A</p>

          <div className='flex flex-row'>
            {(width >= 700) ?
            (<div className='flex flex-col justify-center items-center'>
              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left">How can i learn</p>
                <p className="text-2xl text-left mb-4">hacking on Nautillus?</p>
                <p className="text-xl text-left w-64">Nautillus has theoritical and practical exercises.First, customer will get theoritical knowledge and after that he/she will start practicing.</p>
              </div> 
              <button className="bg-main text-gray-50 py-3 px-10 rounded-md font-bold m-6">More questions</button>
            </div>) : ""}
            <div className='flex flex-col justify-center items-center'>

              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                <p className="text-2xl text-left mb-4">What is Nautillus?</p>
                <p className="text-xl text-left w-64">Nautillus is online hacking platform where anyone can learn and practice hacking.</p>
              </div>

              <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                  <p className="text-2xl text-left mb-4">Can i see my progress?</p>
                  <p className="text-xl text-left w-64">Yes. Nautillus has a progress system built inside that will help customers to see your progress.</p>
              </div>
              
              { (width < 700) ?
                (<>
                  <div className="flex flex-col justify-center text-main p-6 bg-neutral-800 rounded-2xl m-3">
                    <p className="text-2xl text-left">How can i learn</p>
                    <p className="text-2xl text-left mb-4">hacking on Nautillus?</p>
                    <p className="text-xl text-left w-64">Nautillus has theoritical and practical exercises.First, customer will get theoritical knowledge and after that he/she will start practicing.</p>
                  </div> 
                  <button className="bg-main text-gray-50 py-3 px-10 rounded-md font-bold m-6">More questions</button>
                </>) : ""
              }
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Body;