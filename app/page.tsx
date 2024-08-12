"use client";
import { useState } from "react";
import Organism from "@organism";
import Molecule from "@molecule";
import Keychains from "./_assets/products/keychains.png";
import Sticker from "./_assets/products/sticker-set.png";
import Tshirts from "./_assets/products/t-shirts.png";
import Tumbler from "./_assets/products/tumbler.png";
import UnderConstruction from "./_assets/under-construction.png";
import Image from "next/image";
import { Modal } from "antd";

export default function Home() {
  const [isModalOpen] = useState(
    typeof window !== "undefined" &&
      window.location.href !== "http://localhost:3000/"
  );

  const handleOk = () => {
    console.log("Sorry, this feature is under construction.");
  };

  const handleCancel = () => {
    console.log("Sorry, this feature is under construction.");
  };

  const UnderConstructionModal = () => {
    return (
      <Modal
        title="Under Construction"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex items-center flex-col gap-5">
          <Image src={UnderConstruction} width={200} alt="Under Maintenance" />
          <div className="text-2xl font-light text-center">
            Purrintables is under construction. Some links might be broken. In
            the mean time you can message us over at
            <a href="https://www.instagram.com/purrintables" target="_blank">
              Instagram
            </a>{" "}
            or
            <a href="https://www.facebook.com/purrintables" target="_blank">
              Facebook
            </a>
            !
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <main>
      <UnderConstructionModal />
      <div className="mb-10"></div>
      <div className="container px-5 mx-auto mb-16">
        <Organism.Carousel />
      </div>
      <Organism.Jumbotron title="Welcome to Purrintables!">
        <div className="space-y-3">
          <p className="leading-10">
            Purrintables is a small business based in the Philippines. Here you
            can support all sorts of our products ranging from
            <span className="font-bold text-[#df56c0]"> prints</span> and
            <span className="font-bold text-[#df56c0]"> stickers</span> to
            <span className="font-bold text-[#df56c0]"> T-shirts</span> and
            <span className="font-bold text-[#df56c0]"> Merch sets</span>.
          </p>
          <p className="leading-10">
            Please read our{" "}
            <span className="font-bold text-[#df56c0]">FAQ</span> pages before
            making a purchase!
          </p>
        </div>
      </Organism.Jumbotron>
      <Organism.Shop title="Featured Products">
        <Molecule.Product
          thumbnail={Keychains}
          title="Keychains"
          price={200}
          isSoldOut={false}
          link="/shop/keychains"
        />
        <Molecule.Product
          thumbnail={Sticker}
          title="Sticker Set"
          price={150}
          isSoldOut={false}
          link="/shop/stickers"
        />
        <Molecule.Product
          thumbnail={Tshirts}
          title="T-shirts"
          price={600}
          isSoldOut={false}
          link="/shop/tshirts_hoodies"
        />
        <Molecule.Product
          thumbnail={Tumbler}
          title="Tumbler"
          price={400}
          isSoldOut={false}
          link="/shop/tumbler_mugs"
        />
      </Organism.Shop>
    </main>
  );
}
