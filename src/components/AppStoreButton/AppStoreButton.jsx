const AppStoreButton = () => {
  return (
    <button className="bg-black text-white flex w-fit px-3 py-1 rounded gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="apple"
        className="h-7"
      >
        <g fillRule="evenodd" fill="#ffffff" className="color000000 svgShape">
          <path
            d="M11.6218,4.7571c-0.0193291,-2.02332 1.65317,-2.99846 1.72865,-3.04467c-0.939167,-1.37684 -2.40442,-1.56532 -2.92624,-1.58735c-1.24564,-0.125075 -2.431,0.734352 -3.06342,0.734352c-0.630702,0 -1.60726,-0.7153 -2.63953,-0.694961c-1.35921,0.0188997 -2.61125,0.789063 -3.31105,2.00483c-1.41025,2.44865 -0.360481,6.07511 1.01479,8.0616c0.671226,0.970026 1.47351,2.06429 2.52553,2.02476c1.0148,-0.0397892 1.39689,-0.654453 2.62078,-0.654453c1.22488,0 1.56888,0.654453 2.64224,0.634268c1.08898,-0.0196037 1.78139,-0.990762 2.44848,-1.96475c0.771157,-1.12822 1.0887,-2.22035 1.10719,-2.27707c-0.0234604,-0.0085233 -2.12539,-0.815491 -2.14743,-3.23655v0Z"
            transform="translate(.745 3.743)"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
          <path
            d="M2.49696,2.55553c0.559066,-0.677623 0.934193,-1.61793 0.831414,-2.55553c-0.804695,0.031969 -1.78039,0.537152 -2.3568,1.21266c-0.51813,0.599437 -0.97158,1.55665 -0.848624,2.47462c0.897671,0.0697992 1.81466,-0.455431 2.37401,-1.13175v0Z"
            transform="translate(7.857)"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </g>
      </svg>
      <div className="flex flex-col">
        <span className="text-xs">Download on the</span>
        <span className="text-xl leading-5">AppStore</span>
      </div>
    </button>
  );
};

export default AppStoreButton;
