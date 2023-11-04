function WorkCard(props) {
  const { thumbnail, title, description, points, link } = props;
  return (
    <div className="w-full flex gap-8 items-center">
      <div className="h-[32.375rem]">
        <img src={thumbnail} className="w-full h-full rounded-2xl" />
      </div>
      <div className="max-w-[30rem]">
        <h2 className="text-secondary font-normal font-grotesque text-[2.75rem] leading-[3.5rem] mb-2">
          {title}
        </h2>
        <p className="font-inter text-lg mb-[1.125rem]">{description}</p>
        <ul className="font-inter text-lg capitalize flex gap-2 flex-col list-inside list-disc mb-8">
          {points.map((p, i) => (
            <li key={p + i}>{p}</li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="font-grotesque text-[#279EFF] border-b-[2px] text-[2rem] leading-[2.625rem] font-bold"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
