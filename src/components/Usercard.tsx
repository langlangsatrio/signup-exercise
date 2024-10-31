"user client";

interface IUsercard {
  name: string;
  phonenumber: string;
  imgsrc: string;
}

const Usercard: React.FC<IUsercard> = ({ name, phonenumber, imgsrc }) => {
  const avatar = `https://robohash.org/${imgsrc}`;
  return (
    <div className="flex py-3 px-4 gap-4 items-center rounded-md shadow-sm bg-slate-100 my-3 hover:bg-slate-200">
      <div>
        <img src={avatar} className="rounded-full shadow-sm w-14 h-14" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-black">{name}</h3>
        <p className="font-medium text-gray-700">{phonenumber}</p>
      </div>
    </div>
  );
};

export default Usercard;
