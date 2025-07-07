export default function AngledSpacer() {
  return (
    <div
      className="h-[110px]"
      style={{
        backgroundColor: "hsl(var(--b2))",
        backgroundImage:
          "repeating-linear-gradient(45deg, hsl(var(--b1)), hsl(var(--b1)) 15px, transparent 15px, transparent 30px)",
      }}
    />
  );
}

