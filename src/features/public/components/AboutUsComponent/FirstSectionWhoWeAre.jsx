import ServiceForYouNumberCount from "../ServiceForYouSection/ServiceForYouNumberCount";
import pexelsFauxels from "../../../../assets/About us/pexels-fauxels.png";

const FirstSectionWhoWeAre = ({ show, pBarRef }) => {
  return (
    <section>
      <div className=" flex   justify-between items-center ">
        {/* left */}
        <div className=" w-[628px] flex flex-col gap-5">
          <div className=" w-[520px] flex flex-col gap-5">
            <div className=" flex flex-col font-semibold  font-sans text-[48px] leading-[53px] text-neutral-700">
              <h1 className=" ">Who We Are</h1>
              <h1>and What Drives Us</h1>
            </div>
            <div>
              <span className=" text-base text-neutral-500 font-normal font-heading">
                A team of passionate professionals committed to delivering
                exceptional services and making a positive impact in the
                community.We believe our success is intertwined with the
                communities we serve.{" "}
              </span>
            </div>
          </div>
          <div
            ref={pBarRef}
            className=" gap-[25px] flex items-center justify-between"
          >
            {show && (
              <>
                <ServiceForYouNumberCount num={8} Text={"Available Property"} />
                <ServiceForYouNumberCount num={6} Text={"Sold Property"} />
                <ServiceForYouNumberCount num={2} Text={"Trusted Clients"} />
              </>
            )}
          </div>
        </div>
        {/* right */}
        <div>
          <div>
            <img className=" rounded-sm" src={pexelsFauxels} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSectionWhoWeAre;
