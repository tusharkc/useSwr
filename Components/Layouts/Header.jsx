import Logo from "./Logo";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <div>
        <button
          style={{
            margin: 10,
            height: 30,
            width: 90,
            backgroundColor: "white",
            borderRadius: 30,
            border: "1px solid grey",
            color: "skyblue",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
        <button
          style={{
            margin: 10,
            height: 30,
            width: 90,
            backgroundColor: "black",
            borderRadius: 30,
            border: "1px solid grey",
            color: "white",
            cursor: "pointer",
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Header;
