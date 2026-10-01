import Image from "next/image";

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <span className="inline-flex items-center rounded-2xl bg-[#DAF0E7] px-4 py-2.5">
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