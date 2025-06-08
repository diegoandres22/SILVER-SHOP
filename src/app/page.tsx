"use client"
import { Start } from "@/components/1-screens";
import { Spinner } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex gap-4 w-screen h-screen justify-evenly items-center ">
      {/* <Spinner color="white" label="white" labelColor="foreground" />
      <Spinner color="primary" label="Primary" labelColor="primary" />
      <Spinner color="secondary" label="Secondary" labelColor="secondary" />
      <Spinner color="success" label="Success" labelColor="success" />
      <Spinner color="warning" label="Warning" labelColor="warning" />
      <Spinner color="danger" label="Danger" labelColor="danger" /> */}
      <Start></Start>
    </div>
  );
}
