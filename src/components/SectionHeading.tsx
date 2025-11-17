import type { ReactNode } from 'react';
import './SectionHeading.scss';

type Props = {
  label: string;
  eyebrow?: string;
  action?: ReactNode;
};

export function SectionHeading({ label, eyebrow, action }: Props) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
        <h2>{label}</h2>
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  );
}
