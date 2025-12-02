import * as Icons from './icons';

const SoftwareIcon = ({ iconName, color, size = 24 }) => {
  // Get icon from barrel export (includes all Si, Fa, Vsc, and Custom icons)
  const Icon = Icons[iconName] || Icons.FiPackage;

  return (
    <Icon
      size={size}
      style={{ color: color || '#6B7280', flexShrink: 0 }}
    />
  );
};

export default SoftwareIcon;
