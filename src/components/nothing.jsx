import image from "../assets/images/nothing.gif";

export const Nothing = () => {
  return (
    <section className="w-full h-80 grid place-content-center">
      <div>
        <img src={image} alt="nothing" width={120} className="mb-4"/>
        <span className="text-xl -ml-3">Nothing to Show</span>
      </div>
    </section>
  );
};
