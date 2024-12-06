import CodeBox from "@/components/Shared/Codebox/CodeBox";
import Image from "next/image";

const Card18 = () => {
  const cardData = [
    {
      id: 1,
      bgImage:
        "https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png",
      iconImage:
        "https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png",
      title: "Application Name 1",
      description: "Description Lorem Ipsum 1",
    },
    {
      id: 2,
      bgImage:
        "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
      iconImage:
        "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
      title: "Application Name 2",
      description: "Description Lorem Ipsum 2",
    },
    {
      id: 3,
      bgImage:
        "https://styde.net/wp-content/uploads/2017/02/vue-img-destacada-x2.png",
      iconImage:
        "https://styde.net/wp-content/uploads/2017/02/vue-img-destacada-x2.png",
      title: "Application Name 3",
      description: "Description Lorem Ipsum 3",
    },
  ];
  return (
    <>
      <CodeBox
        stringCode={`
const Card = ()=> {
    const cardData = [
        {
          id: 1,
          bgImage:
            "https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png",
          iconImage:
            "https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png",
          title: "Application Name 1",
          description: "Description Lorem Ipsum 1",
        },
        {
          id: 2,
          bgImage:
            "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
          iconImage:
            "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
          title: "Application Name 2",
          description: "Description Lorem Ipsum 2",
        },
        {
          id: 3,
          bgImage:
            "https://styde.net/wp-content/uploads/2017/02/vue-img-destacada-x2.png",
          iconImage:
            "https://styde.net/wp-content/uploads/2017/02/vue-img-destacada-x2.png",
          title: "Application Name 3",
          description: "Description Lorem Ipsum 3",
        },
    ];

    return (
        <div>
            {cardData.map((card) => (
            <div
              key={card.id}
              className="relative p-3 bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
              style={{
                backgroundSize: 600,
                backgroundImage: \`url(\${card.bgImage})\`,
              }}
            >
              <img
                alt="image"
                className={
                  "z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
                }
                height={20}
                width={20}
                src={card.iconImage}
              />
              <div className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <img
                  alt="image"
                  className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
                  height={64}
                  width={64}
                  src={card.iconImage}
                />
                <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                  <div
                    className="relative text-md font-semibold text-gray-100 cursor-pointer 
                          after:transition-[width] after:ease-in-out after:duration-700 
                          after:absolute after:bg-gradient-to-r after:from-gray-100/30
                          after:via-gray-100/10 after:to-transparent after:origin-left 
                          after:h-[2px] after:w-0 group-hover:after:w-full 
                          after:bottom-0 after:left-0"
                  >
                    {card.title}
                  </div>
                  <p className="text-xs text-gray-50/70 text-balance">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default Card;
`}
      >
        <div className="flex justify-center items-center gap-x-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="relative p-3 bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
              style={{
                backgroundSize: 600,
                backgroundImage: `url(${card.bgImage})`,
              }}
            >
              <Image
                alt="image"
                className={
                  "z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
                }
                height={20}
                width={20}
                src={card.iconImage}
              />
              <div className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <Image
                  alt="image"
                  className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
                  height={64}
                  width={64}
                  src={card.iconImage}
                />
                <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                  <div
                    className="relative text-md font-semibold text-gray-100 cursor-pointer 
                          after:transition-[width] after:ease-in-out after:duration-700 
                          after:absolute after:bg-gradient-to-r after:from-gray-100/30
                          after:via-gray-100/10 after:to-transparent after:origin-left 
                          after:h-[2px] after:w-0 group-hover:after:w-full 
                          after:bottom-0 after:left-0"
                  >
                    {card.title}
                  </div>
                  <p className="text-xs text-gray-50/70 text-balance">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CodeBox>
    </>
  );
};
export default Card18;
