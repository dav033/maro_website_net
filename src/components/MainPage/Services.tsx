import React from "react";
import "../../styles/servicesMP.scss";
import ServiceItem from "./ServiceItem";
import { TbTrowel } from "react-icons/tb";
import { AiFillFormatPainter } from "react-icons/ai";
import { RiPaintBrushLine } from "react-icons/ri";
import { BsHouseAdd } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";

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
          name="Lath & Plastering "
          icon={trowelIcon}
          link="lathplastering"
        />
        <ServiceItem name="Painting" icon={paintIcon} link="painting" />
        <ServiceItem
          name="Waterproofing"
          icon={waterIcon}
          link="waterproofing"
        />
        <ServiceItem
          name="New Construction"
          icon={buildingIcon}
          link="newconstruction"
        />
        <ServiceItem
          name="Room Additions"
          icon={housePlusIcon}
          link="roomadditions"
        />
        <ServiceItem
          name="Kitchen & Bathroom"
          icon={kitchenIcon}
          link="kitchenbathroom"
        />
      </div>
    </div>
  );
}
