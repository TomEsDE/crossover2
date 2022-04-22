import React from 'react';
import SolutionInfo from './SolutionInfo';
import './style/solutions.scss';

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="solutions w-full text-center font-noto flex flex-col gap-0 color-primary"
    >
      <div className="technology">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-20 pb-12 font-bold">
          Solutions
        </h2>
        {/* row */}
        <SolutionInfo
          imgLeft={true}
          imgUrl="https://i.ytimg.com/vi/PBtgQU8Gvqk/maxresdefault.jpg"
          title="Gas to Liquid"
        >
          Converts natural gas into high-quality liquid products. Reduces
          Nitrogen Oxide (NOx) emissions by 5-37%, and Particulate Matter (PM)
          emissions by 10-38%
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={false}
          imgUrl="https://www.clariant.com/-/media/Images/Business-Units/Oil-and-Mining-Services/Refinery-Services/hero-terminal-fuel-additives.jpg"
          title="Hydrogen Fuel Additives"
        >
          Improving the fuel combustion cycle in existing vehicles through
          hydrogen additives. Increases fuel efficiency, whilst reducing
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
          Studio Roosegarde developed an air purifying tower which sucks in
          pollution and expels clean air. The extracted pollution is, somewhat
          bizarrely, turned into pieces of jewellery!
        </SolutionInfo>
      </div>

      <div className="whatcanyoudo pt-4 sm:pt-5 lg:pt-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-20 pb-12 font-bold">
          What can you do?
        </h2>
        {/* row */}
        <SolutionInfo
          imgLeft={true}
          imgUrl="https://thecityfix.com/wp-content/uploads/2022/02/14512064975_0d0294b660_c-1-640.jpg"
          title="bike or walk whenever possible"
        >
          Carpool, use public transportation, bike, or walk whenever possible
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={false}
          imgUrl="https://assets.taraenergy.com/wp-content/uploads/2021/01/energy-conservation-definition-lightbulb-energy-image.jpg"
          title="Conserve energy"
        >
          Conserve energy - at home, at work, everywhere
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={true}
          imgUrl="https://www.neponset.org/wp-content/uploads/2017/11/Leaf-pile-2-e1509567633308-1024x552.jpg"
          title="compost leaves and yard waste"
        >
          Mulch or compost leaves and yard waste
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={false}
          imgUrl="https://cdn-vzn.yottaa.net/544ac22dea2e0c2fbf000041/www.power.com/v~4b.9c/sites/default/files/inline_images/eu_energy_label.jpg?yocs=8_b_"
          title="Look for the ENERGY STAR label"
        >
          Look for the ENERGY STAR label when buying home or office equipment
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={true}
          imgUrl="https://www.heatilator.com/-/media/images/product-images/gas-logs/fireside-grand-oak/fireside-grand-oak_1920x738.jpg?rev=d52dcf5fe373410d9c5e258e9583115d"
          title="gas logs instead of wood"
        >
          Consider using gas logs instead of wood
        </SolutionInfo>
        {/* row */}
        <SolutionInfo
          imgLeft={false}
          imgUrl="https://www.burohappold.com/wp-content/uploads/2017/08/Traffic-jam_06.jpg"
          title="minimize car usage"
        >
          Reduce the number of trips you take in your car.
        </SolutionInfo>
      </div>
    </section>
  );
}
