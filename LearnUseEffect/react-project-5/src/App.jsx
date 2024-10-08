
import TimerComponent from './components/TimerComponent';

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  // alert("I will run on  each render")
  // });
  // useEffect(() => {
  //  alert("I will run on first render")
  // }, [])
  // useEffect(() => {
    
  // alert("I will run on every time when count is Updated ")
  //   },[count])

 // variation 4
//  useEffect(() => {
//    alert("I will run on each time when count/total is upated ")

//  }, [count,total])
 
  

// function handleClick(){
//   setCount(count+1)
// }
// function handleTotal(){
//   setTotal(total+1)
// }
  




  return (
  <div>
    {/* <button onClick={handleClick}>update count</button>
    <br/>
    count is : {count}
    <br/>
    <button onClick={handleTotal}>update total </button>
    <br/>
    count is : {total} */}
    <TimerComponent/>
  </div>
  )
}

export default App
