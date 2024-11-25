import React from "react";
import Container from "./Container";
const NewLetters = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8 items-start newLetters__bg border border-neutral-200 rounded-lg px-8 py-10 ">
          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-2xl font-semibold text-black font-heading">
              Newsletter
            </h4>
            <p className="text-base font-normal text-neutral-500">
              Sign Up for Our Newsletter to get Latest Updates and Offers.
              Subscribe to receive <br /> news in your inbox.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-5 py-2.5 w-[302px] border border-blue-300 rounded-lg placeholder:text-sm placeholder:text-neutral-500"
            />
            <button className="bg-blue-500 text-neutral-50 px-5 py-2.5 rounded-lg text-center">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewLetters;