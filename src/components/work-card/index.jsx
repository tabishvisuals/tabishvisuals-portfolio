function WorkCard(props) {
  const { thumbnail, title, description, link } = props;
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
      <div className="lg:h-[27.625rem] ">
        <img src={thumbnail} className="w-full h-full rounded-2xl" />
      </div>
      <div className="max-w-[39rem]">
        <h2 className="text-secondary font-normal font-grotesque lg:text-[2.75rem] md:text-4xl text-3xl lg:leading-[3.5rem] mb-2">
          {title}
        </h2>
        <p className="font-inter text-base lg:text-lg mb-[1.125rem] text-[#3A3D40]">
          {description}
        </p>
        {/* <ul className="font-inter text-base lg:text-lg capitalize flex gap-2 flex-col list-inside list-disc mb-4 lg:mb-8 text-[#3A3D40]">
          {points.map((p, i) => (
            <li key={p + i}>{p}</li>
          ))}
        </ul> */}

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-grotesque text-[#279EFF] border-b-[2px] text-lg font-bold"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
