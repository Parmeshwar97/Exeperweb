const Channel = ({ data }) => {
  const { Icon, desc, name } = data;
  return (
    <div className="flex gap-5">
      <div className="bg-white p-5 rounded-md w-fit">
        <Icon color="#2563EB" size='30'/>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-[#9CA3AF]">{desc}</p>
      </div>
    </div>
  );
};

export default Channel;
