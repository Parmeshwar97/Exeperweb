const AboutCard = ({ data }) => {
  const { pic, name, description } = data;
  return (
    <div className="bg-white text-black flex relative flex-col w-[350px] h-[380px] rounded-3xl p-5">
      <div className="px-2 py-6">
        <h3 className="font-semibold text-lg my-4">{name}</h3>
        <p className="text-[#857DA1] mt-8 font-light break-words hyphens-auto">
          {description}
        </p>
      </div>
      <div className="absolute rounded-full border-5 border-amber-100 p-2 -top-10 left-5">
        <img src={pic} alt="picture" className=" size-15 " />
      </div>
    </div>
  );
};

export default AboutCard;
