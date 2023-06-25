import Button from "./Button";

const ButtonList = () => {
  const categories = [
    "All",
    "News",
    "Movies",
    "Games",
    "Music",
    "Comedy",
    "Travel",
    "Trailers",
    "Podcasts",
    "Debates",
    "Javascript",
    "React.js",
    "Shopping",
  ];

  return (
    <div className="flex">
      {categories.map((category, index) => (
        <Button name={category} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
