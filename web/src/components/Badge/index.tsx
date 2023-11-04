import { BadgeProps } from "./interface";
import { BaseStyledBadge } from "./styled";

function Badge(props: BadgeProps): JSX.Element {
  return <BaseStyledBadge {...props} />;
}

export { Badge };
