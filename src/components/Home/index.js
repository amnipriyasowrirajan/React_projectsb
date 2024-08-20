import { Link } from "react-router-dom";

export default function Home() {
  //Google Captcha =>useRef
  // document.togetElement

  return (
    <h1>
      Home. Go to <Link to="/about">About</Link>
    </h1>
  );
}
