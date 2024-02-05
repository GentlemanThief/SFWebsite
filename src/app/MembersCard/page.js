import Image from "next/image";

export default function MembersCard({
  membersImage,
  membersName,
  membersDescription,
}) {
  return (
    <div>
      <div class="bg-base-100">
        <Image
          src={membersImage}
          class="object-cover w-full h-50"
          alt={membersName}
          loading="lazy"
        ></Image>
        <div class="col-span-1 md:col-span-3">
          <h2 class="mb-1 text-xl font-bold leading-snug">
            <a class=" text-primary text-sm px-5 flex justify-center">
              {membersName}
            </a>
          </h2>
          <p class="text-xs font-normal text-base-content px-5">
            {membersDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
