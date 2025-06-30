import dynamic from "next/dynamic";
const FadeIn = dynamic(() => import("./FadeIn"), { ssr: false });

export default function TitleHeader({ title }) {
  return (
    <div>
      <h1 className="text-5xl font-black text-base-primary p-5 bg-base-100 flex justify-center mx-auto border-y-2">
        <div>
          <FadeIn>{title}</FadeIn>
        </div>
      </h1>
    </div>
  );
}
