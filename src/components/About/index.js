import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const h1ref = useRef();
  console.log(h1ref);

  setTimeout(() => {
    console.log(h1ref.current.innerText);
  }, 10);

  return (
    <h1 ref={h1ref}>
      About Page.. Go to<Link to="/"> Back</Link>{" "}
    </h1>
  );
}
