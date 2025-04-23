import Topics from "./Topics";

const Innovations = ({ data }) => {
  const { id, heading, subheading, image, topics } = data;
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-3">
      {id === 2 && (
        <div className="hidden md:flex justify-center items-center">
          <img
            src={image}
            alt="pic"
            className="rounded-md hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl md:text-3xl font-semibold">{heading}</h2>
        <p className="md:text-[1.2rem]">{subheading}</p>
        {topics.map((topic) => (
          <Topics key={topic.id} topic={topic} />
        ))}
      </div>
      {id === 2 && (
        <div className="md:hidden flex justify-center items-center">
          <img
            src={image}
            alt="pic"
            className="rounded-md hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      )}
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
