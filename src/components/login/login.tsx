import { PropsWithChildren, useState } from "react";
import "./login.css";
import { renderIf } from "../utils";

export function Login(props: PropsWithChildren) {
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function hash(s: string) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(s)
    );
    const hashArray = Array.from(new Uint8Array(buf));
    const h = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return h;
  }

  async function check() {
    const h = await hash(password);
    if (h === import.meta.env.VITE_PASSWORD) {
      setIsVerified(true);
    } else {
      setMessage("Unauthorized");
    }
  };

  const onChange = (event: any) => {
    setPassword(event.target?.value);
    setMessage("");
  };
  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
        check();
    }
  }

  return renderIf(
    () => isVerified,
    () => props.children,
    () => (
      <div className="login-container col">
        <div className="row">
          <input
            id="password"
            name="password"
            className="password-input"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button type="button" className="login-button" onClick={check}>
            Submit
          </button>
        </div>
        <div className="msg-box">{message}</div>
      </div>
    )
  );
}
