import { PHOTOS } from "@/data/photos";

export function PhotoRail() {
  if (PHOTOS.length === 0) return null;

  return (
    <aside
      className="hidden md:block sticky top-12 h-[calc(100vh-6rem)] self-start overflow-hidden"
      aria-hidden
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="photo-rail-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col gap-3 pb-3">
            {PHOTOS.map((shot) => (
              <img
                key={`${copy}-${shot.src}`}
                src={shot.src}
                alt=""
                className="aspect-[3/4] w-full shrink-0 object-cover bg-[var(--bg-secondary)] hover:opacity-50 transition-opacity duration-400"
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
