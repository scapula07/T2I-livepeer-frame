import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";


const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const metadata: Metadata = {
  title: "Livepeer generative AI frame",
  description: "",
  openGraph: {
      title: "Livepeer generative AI frame",
      description: "",
      images: [
        "/background.png"
      ],
      
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/background.png",
    "fc:frame:image:aspect_ratio":"1:1",
    "fc:frame:input:text":'A cool cat on the beach',
    "fc:frame:post_url": ``,
    "fc:frame:button:1": "Let's start",
},
};

export default function Home() {
  return (
     <></>
  );
}
