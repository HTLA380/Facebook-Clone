import Icon from "@/components/lucideIcon/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import React from "react";

const iconMapping: { [key: string]: { icon: string; color: string } } = {
  Friend: {
    icon: "user",
    color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)",
  },
  Group: { icon: "users", color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Like: { icon: "thumbs-up", color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Comment: { icon: "message-circle", color: "linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)" },
  Share: { icon: "forward", color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(108,170,240,1) 100%)" },
  Tag: { icon: "user", color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Event: { icon: "calendar", color: "#2196f3" },
  Status: { icon: "trending-up", color: "#2196f3" },
  Mention: { icon: "at-sign", color: "linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)" },
  Message: {
    icon: "message-circle-more",
    color: "linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)",
  },
  Birthday: { icon: "cake", color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)" },
  "Birthday Reminder": { icon: "cake", color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)" },
  Reminder: { icon: "lightbulb", color: "linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)" },
};

interface GenerateIconInterface {
  notificationType: string;
}

const GenerateIcon: React.FC<GenerateIconInterface> = ({ notificationType }) => {
  const { icon, color } = iconMapping[notificationType] || {};

  return (
    <span
      className={`block p-1.5 text-sm rounded-full text-gray-100`}
      style={{
        background: color,
      }}>
      <Icon name={icon as keyof typeof dynamicIconImports} size={15} />
    </span>
  );
};

export default GenerateIcon;
