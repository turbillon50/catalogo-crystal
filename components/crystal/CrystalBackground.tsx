/** Fondo del kit Crystal — mesh vivo + grano + viñeta. Uno por página. */
export function CrystalBackground() {
  return (
    <>
      <div className="cr-mesh">
        <div className="cr-blob a" />
        <div className="cr-blob b" />
        <div className="cr-blob c" />
        <div className="cr-blob d" />
      </div>
      <div className="cr-grain" />
      <div className="cr-vignette" />
    </>
  );
}
