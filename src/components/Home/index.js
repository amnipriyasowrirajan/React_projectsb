import React from "react";

const MyContext = React.createContext();
export default function Home(props) {
  // useEffect(() => {
  //   localStorage.getItem("myvar");
  //   // ...

  //   localStorage.setItem("myvar", "software engineer");
  // }, []);

  // Provider => it allows all the Components inside this particular
  // Provider to access whatever you pass inside this particular value attribute
  function MyComponent() {
    return <h1>This is a custom component.</h1>;
  }
  return (
    <MyContext.Provider
      value={{
        name: "amni",
      }}
    >
      <p>
        <div>
          <p>
            <MyComponent />
          </p>
        </div>
      </p>
    </MyContext.Provider>
  );
}
