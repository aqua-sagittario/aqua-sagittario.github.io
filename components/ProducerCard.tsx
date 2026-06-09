import Image from "next/image";

type ProducerCardProps = {
  name: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProducerCard({ name, subtitle, description, imageSrc, imageAlt }: ProducerCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[1.35rem] border border-white/18 bg-white/10 p-7 text-white shadow-soft backdrop-blur">
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full border border-sagittarius-water/30" />
      <div className="relative z-10">
        <div className="overflow-hidden rounded-[1.15rem] border border-white/12 bg-white/8">
          <div className="relative aspect-[4/3] w-full">
            <Image alt={imageAlt} className="object-cover" fill sizes="(min-width: 1024px) 720px, 100vw" src={imageSrc} />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sagittarius-water">
          生産者
        </p>
        <h3 className="serif-heading mt-5 text-3xl font-semibold">{name}</h3>
        <p className="mt-3 text-sm font-medium tracking-[0.08em] text-sagittarius-gold">
          {subtitle}
        </p>
        <p className="mt-5 text-sm leading-8 text-white/78">{description}</p>
      </div>
    </article>
  );
}
