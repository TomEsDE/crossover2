import React from 'react';
import SolutionInfo from './SolutionInfo';
import './style/solutions.scss';

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="solutions w-full text-center font-noto flex flex-col gap-0"
    >
      <h2 className="font-primary">Solutions</h2>
      {/* row */}
      <SolutionInfo
        imgLeft={true}
        imgUrl="https://i.ytimg.com/vi/PBtgQU8Gvqk/maxresdefault.jpg"
        title="Gas to Luquid"
      >
        converts natural gas into high-quality liquid products that would
        otherwise be made from crude oil. Reduces Nitrogen Oxide (NOx) emissions
        by 5-37%, and Particulate Matter (PM) emissions by 10-38%
      </SolutionInfo>
      {/* row */}
      <SolutionInfo
        imgLeft={false}
        imgUrl="https://www.clariant.com/-/media/Images/Business-Units/Oil-and-Mining-Services/Refinery-Services/hero-terminal-fuel-additives.jpg"
        title="Hydrogen Fuel Additives"
      >
        Improving the fuel combustion cycle in existing vehicles through the use
        of hydrogen additives. Increases fuel efficiency, whilst reducing
        emissions of NOx, PM, Hydrocarbons and Carbon Monoxide
      </SolutionInfo>
      {/* row */}
      <SolutionInfo
        imgLeft={true}
        imgUrl="https://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/daa1c9e7-850d-4c22-9e9a-cc0abebd5b97/gr1.jpg"
        title="Photo-catalytic materials"
      >
        Removing pollutants from the air in the presence of sunlight. Applying
        photo-catalytic treatment to roads is amongst the cheapest options to
        reduce PM and NOx pollution
      </SolutionInfo>
      {/* row */}
      <SolutionInfo
        imgLeft={false}
        imgUrl="https://www.tipe.com.cn/wp-content/uploads/2020/03/air-purification1.jpg"
        title="Air purification"
      >
        Removing pollutants from the air in the presence of sunlight. Applying
        photo-catalytic treatment to roads is amongst the cheapest options to
        reduce PM and NOx pollution
      </SolutionInfo>
    </section>
  );
}
