import Link from "next/link";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Link href="/">
        <p
          style={{
            margin: 20,
            cursor: "pointer",
            textAlign: "center",
            width: 100,
          }}
        >
          Home
        </p>
      </Link>
      <Link href="/listing">
        <p
          style={{
            margin: 20,
            cursor: "pointer",
            textAlign: "center",
            width: 100,
          }}
        >
          Listing Page
        </p>
      </Link>
      <Link href="/details/1">
        <p
          style={{
            margin: 20,
            cursor: "pointer",
            textAlign: "center",
            width: 100,
          }}
        >
          Details Page
        </p>
      </Link>
    </div>
  );
}

export default NavBar;
