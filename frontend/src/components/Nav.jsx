import React, { useRef } from "react";
import { Button, Icon } from "semantic-ui-react";

const Nav = () => {
  const buttonRef = useRef();
  return (
    <div>
      <nav className="navbar">
        <div style={{ marginTop: "10rem" }}>
          <Button
            ref={buttonRef}
            style={{
              width: "35vh",
              height: "8vh",
              marginTop: "1rem",
            }}
          >
            {" "}
            <span>Atendance</span>
          </Button>
          <div>
            <Button
              ref={buttonRef}
              style={{
                width: "35vh",
                height: "8vh",
                marginTop: "1rem",
              }}
            />
          </div>
          <div>
            <Button
              ref={buttonRef}
              style={{
                width: "35vh",
                height: "8vh",
                color: "black",
                marginTop: "1rem",
              }}
            />
          </div>
          <div>
            <Button
              ref={buttonRef}
              style={{
                width: "35vh",
                height: "8vh",
                color: "black",
                marginTop: "1rem",
              }}
            />
          </div>
          <div>
            <Button
              ref={buttonRef}
              style={{
                width: "35vh",
                height: "8vh",
                marginTop: "1rem",
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
