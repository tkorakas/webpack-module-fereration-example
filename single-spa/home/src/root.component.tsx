import { useEffect, useState } from "react";

export default function Root(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handler = (event) => {
      console.log(event.detail);

      setCount(count + 1);
    };
    window.addEventListener("hello", handler);

    return () => window.removeEventListener("hello", handler);
  });
  return (
    <section>
      {props.name} is {count}!
    </section>
  );
}
