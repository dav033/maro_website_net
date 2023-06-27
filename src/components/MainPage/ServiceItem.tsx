import "../../styles/serviceItem.scss";

interface ServiceItemProps {
  name: string;
  icon: string;
  link?: string;
}

import React from "react";

export default function ServiceItem(props: ServiceItemProps) {
  const { name, icon, link } = props;

  return (
    <div className="service-item">
      <div>
        <object data={icon} type="image/svg+xml" className="icon" />
      </div>

      <a href={`/services?option=${link}`}>{name}</a>
    </div>
  );
}
