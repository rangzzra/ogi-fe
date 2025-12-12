export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-16 z-20 overflow-visible">
      {children}
    </div>
  );
}