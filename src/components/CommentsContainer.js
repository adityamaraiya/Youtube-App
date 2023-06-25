const commentsData = [
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet, consectet",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="my-2 flex rounded-lg bg-gray-100 p-2 shadow-sm">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border-l-2 pl-5">
        <Comment data={comment} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-lg font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
