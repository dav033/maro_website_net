import "../../styles/serviceItem.scss";
import { FiArrowRight } from "react-icons/fi";

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

      <span>{name}</span>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas
        corporis eligendi reiciendis illo obcaecati architecto voluptate.
      </p>

      <a href={`/services?option=${link}`}>
        Learn More <FiArrowRight />
      </a>
    </div>
  );
}
