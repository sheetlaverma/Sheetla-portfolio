type SectionTitleProps = {
  label: string;
  title: string;
};

export default function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <header className="section-head">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </header>
  );
}
