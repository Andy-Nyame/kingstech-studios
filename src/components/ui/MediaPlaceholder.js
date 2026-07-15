import styles from "./MediaPlaceholder.module.css";

export default function MediaPlaceholder({
  label,
  className = "",
  aspectRatio = "16 / 10",
  tone = "light",
}) {
  const toneClass = tone === "dark" ? styles.dark : styles.light;

  return (
    <div
      className={`${styles.placeholder} ${toneClass} ${className}`.trim()}
      style={{ "--placeholder-aspect-ratio": aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className={styles.window} aria-hidden="true">
        <div className={styles.windowBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.windowBody}>
          <span className={styles.lineLong} />
          <span className={styles.lineShort} />
          <div className={styles.panels}>
            <span />
            <span />
          </div>
        </div>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
