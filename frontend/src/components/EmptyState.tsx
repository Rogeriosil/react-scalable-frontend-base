import { Button } from "./Button";

type Props = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ title, description, actionLabel, onAction }: Props) {
  return (
    <div className="card cardPad" role="status" aria-live="polite">
      <h3 style={{ margin: 0 }}>{title}</h3>
      {description ? <p className="muted" style={{ marginTop: 8 }}>{description}</p> : null}
      {actionLabel && onAction ? (
        <div style={{ marginTop: 12 }}>
          <Button variant="ghost" onClick={onAction}>{actionLabel}</Button>
        </div>
      ) : null}
    </div>
  );
}
