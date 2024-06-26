"use client";
import Table from "./components/table.jsx";
import DisplayImage from "./components/displayImage.jsx";
import BackArrow from "./components/backarrow.jsx";
import Next from "./components/next.jsx";
import Back from "./components/back.jsx";
import "../page.css";

export default function SpaceshipPage() {
  return (
    <div className=" min-h-screen text-white flex justify-center items-center flex-col gap-8 ">
      <BackArrow />
      <DisplayImage />
      <Table />
      <Next />
      <Back />
    </div>
  );
}
