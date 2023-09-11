import { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [diff, setDiff] = useState(null)
  const [initial, setInitial] = useState(null)

  const tick = () => {
    setDiff(new Date(+new Date() - initial))
  };
  const start = () => { setInitial(+new Date()) }

  useEffect(()=>{
    if (initial){
      requestAnimationFrame(tick);
  }
}, [initial]);
  useEffect(()=>{
    if (diff){
      requestAnimationFrame(tick);
  }
}, [diff]);
return (
  <div className="App" onClick={start}>
    <h1 className="timer">{timeFormat(diff)}</h1>
  </div>
  );
}

const timeFormat = (date) =>{
  if (!date || date === null ){ return "00:00:00"}
  let mm = date.getUTCMinutes()
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10)

  mm = mm < 10 ? ""+mm : mm;
  ss = mm < 10 ? ""+ss : ss;
  cm = mm < 10 ? ""+cm : cm;

  return `${mm}:${ss}:${cm}`;
};

export default App;
