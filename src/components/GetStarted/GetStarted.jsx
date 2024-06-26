import { useRef, useState } from "react";
import useGsapHook from "../../hooks/useGsapHook.js";
import { Modal, Box } from "@mui/material";
import TestWindow from "./TestWindow.jsx";

const GetStarted = () => {
  const section = useRef();
  const [show, setShow] = useState(false);
  const { useGSAP, gsap } = useGsapHook();
  useGSAP(
    () => {
      gsap.fromTo(
        ".grow_animate",
        { scale: 0 },
        {
          scale: 1,

          duration: 1,
          ease: "back(0.5)",
          scrollTrigger: section.current,
        }
      );
    },

    { scope: section }
  );
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setShow(false);

  return (
    <section
      ref={section}
      className=" min-h-[650px] mx-5 2xl:mx-0  flex justify-center items-center text-center flex-col px-10"
    >
      <p className="font-medium text-md ps-1">We take privacy seriously</p>
      <h1 className="text-3xl font-bold leading-tight tracking-wide my-3	">
        Before you get started
      </h1>
      <p className="font-medium text-gray-600 text-xl px-0 md:px-9 max-w-2xl">
        &ldquo;We won&apos;t share your answers with anyone (and won&apos;t ever
        tell you which friends said what about you)&rdquo;
      </p>
      <p className="font-medium text-secondaryFontColor text-lg my-8">
        with love,
      </p>
      <button
        onClick={() => setShow(true)}
        className="grow_animate rounded-full bg-black text-white py-3 px-4 text-sm"
      >
        Start a test
      </button>
      <p className=" text-gray-600 text-xs mt-4 font-medium">
        Take only 5 minutes
      </p>
      <Modal open={show} onClose={handleClose}>
        <Box style={style}>
          <TestWindow close={handleClose} />
        </Box>
      </Modal>
    </section>
  );
};

export default GetStarted;
