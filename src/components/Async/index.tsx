import { useEffect, useState } from "react";

export function Async() {
  const [isButtonVisble, setIsButtonVisble] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisble(true);
    }, 1000);
  }, []);
  return (
    <div>
      <div>Hello world</div>
      {isButtonVisble && <button>Button</button>}
    </div>
  );
}
