import Layout from "../Components/Layouts/Layout";
import useSWR from "swr";
import { Link } from "@mui/material";

function Listing() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const posts = [];

  for (let i = 0; i < 10; i++) {
    posts.push({
      id: data[i]["id"],
      title: data[i]["title"],
      body: data[i]["body"],
    });
  }

  return (
    <div>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          {posts.map((data) => {
            return (
              <Link
                href={"/details/" + data.id}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <p
                  style={{
                    margin: 10,
                    backgroundColor: "#ebebeb",
                    boxShadow: "10px 5px 5px #c7c7c7",
                    height: 60,
                    width: "80vw",
                    textAlign: "center",
                    paddingTop: 5,
                    paddingLeft: 5,
                    borderRadius: 2,
                  }}
                >
                  {data["title"]}
                </p>
              </Link>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Listing;
