import Image from "next/image";

export default function PerspectiveCard({
  src,
  alt,
}: {
  src: any;
  alt: string;
}) {
  return (
    <div className="relative w-full h-full">
      <div className="relative origin-top-right rotate-2 -skew-x-8 skew-y-2 sm:scale-100 overflow-hidden transform-3d perspective-origin-bottom-left group transition-all duration-300 backdrop-blur-sm rounded-xl shadow-xl border-2 border-gray-300 p-2 translate-y-1/2 inset-0 z-5">
        <Image src={src} alt={alt} className="object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  );
}
