import { useRouter } from "next/router";
import { useState } from "react";

function Comment() {
  const router = useRouter();
  let id = null;
  const getID = () => {
    return router.asPath.replace("/details/", "");
  };
  id = getID();

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
    setShowComments(true);
  };

  const hideComments = () => {
    setShowComments(false);
  };

  return (
    <div>
      <div style={{ display: "flex", width: "100vw" }}>
        <button
          style={{
            margin: 50,
            height: 30,
            width: 120,
            borderRadius: 30,
            border: "1px solid grey",
            color: "black",
            cursor: "pointer",
          }}
          onClick={getComments}
        >
          See Comments
        </button>
        <button
          style={{
            margin: 50,
            height: 30,
            width: 110,
            borderRadius: 30,
            border: "1px solid grey",
            color: "black",
            cursor: "pointer",
          }}
          onClick={hideComments}
        >
          Hide Comments
        </button>
      </div>

      {showComments
        ? comments.map((item) => {
            console.log(item);
            return (
              <div style={{ width: "100vw", padding: 5, margin: 5 }}>
                <p style={{ paddingRight: 50, paddingLeft: 50, fontSize: 15 }}>
                  {item.body}
                </p>

                <p
                  style={{
                    paddingRight: 50,
                    paddingLeft: 50,
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                >
                  User Name: {item.name}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Comment;
