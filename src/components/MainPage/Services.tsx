import React from "react";
import "../../styles/servicesMP.scss";
import ServiceItem from "./ServiceItem";

import buildingIcon from "../../assets/icons/building.svg";
import paintIcon from "../../assets/icons/paint.svg";
import waterIcon from "../../assets/icons/water-drop.svg";
import trowelIcon from "../../assets/icons/trowel.svg";
import housePlusIcon from "../../assets/icons/house-plus.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";

export default function Services() {
  return (
    <div className="services-container">
      <h4>Our services</h4>

      <div className="services">
        <ServiceItem
          name="Concrete Repair"
          icon={trowelIcon}
          link="lathplastering"
        />
        {/* <ServiceItem
          name="Driveways and Sidewalks"
          icon={paintIcon}
          link="painting"
        />
        <ServiceItem
          name="Waterproofing"
          icon={waterIcon}
          link="waterproofing"
        />
        <ServiceItem
          name="Remodeling"
          icon={buildingIcon}
          link="newconstruction"
        /> */}
      </div>
    </div>
  );
}
