import { useState } from "react";
import { photos } from "../data/photos";
import { Dialog } from "./Dialog";

export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const photo = photos[active ?? 0];
  const move = (step: number) =>
    setActive((index) => ((index ?? 0) + step + photos.length) % photos.length);
  return (
    <section className="gallery-section section wrap" id="gallery">
      <div className="section-head">
        <div>
          <p className="eyebrow">A CLOSER LOOK</p>
          <h2>
            Room to <em>imagine.</em>
          </h2>
        </div>
        <p>
          Photo gallery
          <br />
          <span className="muted">
            A glimpse of the homes and spaces we love.
          </span>
        </p>
      </div>
      <div className="gallery-grid" id="gallery-grid">
        {photos.map((item, index) => (
          <button
            key={item.file}
            className="gallery-photo"
            hidden={!expanded && index > 4}
            aria-label={`View ${item.alt}`}
            onClick={() => setActive(index)}
          >
            <img
              src={`assets/${item.file}`}
              alt={item.alt}
              loading="lazy"
              width="1024"
              height="682"
            />
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="gallery-foot">
        <span className="small">PHOTOGRAPHY FROM MARCI’S ORIGINAL GALLERY</span>
        <button
          className="text-link"
          id="gallery-all"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show fewer photos −" : "View all 7 photos ＋"}
        </button>
      </div>
      <Dialog
        id="lightbox"
        label="Photo gallery"
        open={active !== null}
        onClose={() => setActive(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <button
          className="lightbox-close"
          aria-label="Close gallery"
          onClick={() => setActive(null)}
        >
          ×
        </button>
        <img id="lightbox-image" src={`assets/${photo.file}`} alt={photo.alt} />
        <div className="lightbox-controls">
          <button aria-label="Previous photo" onClick={() => move(-1)}>
            ←
          </button>
          <span aria-live="polite">
            {(active ?? 0) + 1} / {photos.length}
          </span>
          <button aria-label="Next photo" onClick={() => move(1)}>
            →
          </button>
        </div>
      </Dialog>
    </section>
  );
}
