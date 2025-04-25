const PortfolioCard = ({ project }) => {
  const { pic, date, heading, desc } = project;
  return (
    <div className="flex flex-col gap-4 md:gap-5 w-[380px]">
      <img src={pic} alt="project-image" width={'380px'} className="rounded" />
      <div className="bg-blue-400 rounded p-2 mt-3 text-xs w-fit">{date}</div>
      <h2 className="font-semibold text-2xl">{heading}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );s
};

export default PortfolioCard;
