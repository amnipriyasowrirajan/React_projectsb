import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// React => will re-render (props,state)
export default function Home(props) {
  //Google Captcha =>useRef
  // document.togetElement

  const h1Ref = useRef();
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  //   console.log(h1ref);

  //   setTimeout(() => {
  // console.log(h1ref.current.innerText);
  //     console.log(h1ref.current.innerHTML);
  //   }, 10);

  //   console.log(h1Ref);
  // without [] => everytime it rerender .
  //[] =>we got only one console.log(h1ref ) rerender
  // if you put [counter] => each time increment the counter 1,2,3 => it rerender you can see it console

  // componentdidMount
  useEffect(() => {
    // fetching course  information -> when the url changes
    console.log(h1Ref);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <h1>{counter2}</h1>

      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter 1
      </button>
      <button onClick={() => setCounter2((counter2) => counter2 + 1)}>
        Counter 2
      </button>
    </div>
  );
}
