import Image from "next/image";

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <span className="inline-flex items-center bg-[#DAF0E7] px-3 py-1">
      <Image
        src="/digiepages-logo.svg"
        alt="DigiePages"
        width={112}
        height={80}
        priority
        className="w-auto"
        style={{ height: size }}
      />
    </span>
  );
}