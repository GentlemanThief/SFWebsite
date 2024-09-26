import Image from "next/image";

export default function MembersCard({
  membersImage,
  membersName,
  membersDescription,
}) {
  return (
    <div className="bg-base-100">
      <Image
        src={membersImage}
        className="object-cover w-full h-50"
        alt={membersName}
        loading="lazy"
      />
      <div className="col-span-1 md:col-span-3">
        <h2 className="mb-1 text-xl font-bold leading-snug">
          <a className="text-primary text-sm px-5 flex justify-center">
            {membersName}
          </a>
        </h2>
        <p className="text-xs font-normal text-base-content px-5">
          {membersDescription}
        </p>
      </div>
    </div>
  );
}
