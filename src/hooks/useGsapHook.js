import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useGsapHook = () => {
  return { useGSAP, gsap, ScrollTrigger };
};

export default useGsapHook;
