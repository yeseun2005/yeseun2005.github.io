interface Props {
  bigText: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ bigText, title, description }: Props) {
  return (
    <div className="relative mb-10">
      <span className="pointer-events-none absolute -top-8 left-0 select-none text-6xl font-extrabold uppercase text-gray-100 md:text-8xl">
        {bigText}
      </span>
      <h2 className="relative text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="relative mt-2 text-sm text-gray-500">{description}</p>}
    </div>
  );
}