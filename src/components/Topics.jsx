const Topics = ({ topic }) => {
  const { heading, description, pic } = topic;
  return (
    <div className="flex mt-6">
      <img src={pic} alt="fist-image" className="w-11 h-11 me-3 " />
      <div>
        <h3 className="text-[1.2rem] pb-1">{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Topics;
