import { useState } from "react";
import { useSignal } from "@preact/signals-react";

export default function Signal() {
  const currentInput = useSignal("");
  const [inputs, setInputs] = useState("");
  return (
    <form>
      <input
        onChange={(e) => {
          setInputs(e.target.value);
        }}
        value={inputs}
      ></input>
      <input
        onChange={(e) => {
          currentInput.value = e.target.value;
        }}
        value={currentInput.value}
      ></input>
    </form>
  );
}
