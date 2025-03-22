import Topics from "./Topics";

const Innovations = ({ data }) => {
  const { id, heading, subheading, image, topics } = data;
  return (
    <div className="grid grid-cols-2 gap-3">
      {id === 2 && (
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="pic"
            className="rounded-md hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl">{heading}</h2>
        <p className="text-[1.2rem]">{subheading}</p>
        {topics.map((topic) => (
          <Topics key={topic.id} topic={topic} />
        ))}
      </div>
      {id === 1 && (
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="pic"
            className="rounded-md hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Innovations;
