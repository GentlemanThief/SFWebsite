export default function TitleHeader({ title }) {
  return (
    <div>
      <h1 class="text-5xl font-black text-base-primary p-5 bg-base-100 flex justify-center mx-auto border-y-2">
        {title}
      </h1>
    </div>
  );
}