export default function SocialIcon({ href, icon: IconComponent, color = "primary", ariaLabel }) {
  const colorClasses = {
    primary: "hover:fill-primary hover:border-primary",
    accent: "hover:fill-accent hover:border-accent", 
    secondary: "hover:fill-secondary hover:border-secondary",
  };

  return (
    <a href={href} aria-label={ariaLabel}>
      <IconComponent 
        className={`fill-current border border-base-content p-3 ${colorClasses[color]} transition-transform duration-300 ease-in-out hover:-translate-y-1`}
        width="50"
        height="50"
      />
    </a>
  );
}