import { memo } from 'react';

import Icon from '../Icon';

import type { IconName } from '../Icon';

import './styles.css';

interface Props {
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHasPopUp?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaPressed?: boolean;
  buttonColor?: string;
  iconColor?: string;
  iconName: IconName;
  isDisabled: boolean;
  onClick: () => any;
}



const IconButton = ({
  ariaDescribedBy,
  ariaExpanded,
  ariaHasPopUp,
  ariaLabel,
  ariaLabelledBy,
  ariaPressed,
  buttonColor = 'transparent',
  iconColor,
  iconName,
  isDisabled = false,
  onClick,
}: Props) => {
  let color = '#6c6c72';

  if (iconColor) {
    color = iconColor;
  } else if (isDisabled) {
    color = '#b4b3b6';
  }

  return (
    <button
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopUp}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-pressed={ariaPressed}
      className='iconButton'
      onClick={onClick}
      disabled={isDisabled}
      style={{ backgroundColor: buttonColor }}
    >
      <Icon name={iconName} fill={color} />
    </button>
  );
};

export default memo(IconButton);
