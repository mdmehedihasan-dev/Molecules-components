import Image from "../components/Image";
import Image2 from "../assets/laptop.jpg";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Price from "../components/Price";

const ProductCart = () => {
  return (
    <div className="w-[300px] h-[500px] shadow-xl bg-gray-400 rounded-xl px-4 hover:scale-105 transition-all duration-300 ease-in-out ">
      <Image url={Image2} altText="Product image" style="w-48 h-48 mx-auto p-2 rounded-lg" />
      <Title text="hp 2020"/>

      <Paragraph style="px-2 text-sm font-mono text-white mb-10"
        description="Processor Type. - Intel Celeron ,Generation - Not Applicable,RAM - 4GB,Storage - 128GB eMMC,Graphics Memory - Shared,Display Size (Inch) - 10.1"
      />

  <div className="flex justify-between items-center">
    <Price price="250$" />
  <Button text="Add Cart"  style="bg-gray-200 inline-block px-4 py-2 hover:bg-green-300 hover:text-red-600 cursor-pointer rounded-xl " iconaligment="right" />
  </div>
    </div>
  );
};

export default ProductCart;
