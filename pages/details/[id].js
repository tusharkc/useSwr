import Header from "../../Components/Layouts/Header";
import NavBar from "../../Components/Layouts/NavBar";
import GoBack from "../../Components/Layouts/GoBack";
import Comment from "../../Components/Comment";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((data) => {
    return {
      params: { id: data.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return {
    props: { data: data },
  };
};

function details({ data }) {
  return (
    <div>
      <Header />
      <NavBar />
      <GoBack />
      <div style={{ width: "100vw" }}>
        <h1 style={{ paddingRight: 50, paddingLeft: 50, paddingTop: 10 }}>
          Title: {data.title}
        </h1>
        <br />
        <p style={{ paddingRight: 50, paddingLeft: 50 }}>{data.body}</p>
        <br />

        <Comment />
      </div>
    </div>
  );
}

export default details;
