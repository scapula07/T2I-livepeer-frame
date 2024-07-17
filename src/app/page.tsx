
import type { Metadata } from "next";


const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

export const metadata: Metadata = {
  title: "Price Feed Farcaster Frame",
  description: "ETH & BTC Price Feed Farcaster Frame",
  openGraph: {
      title: "Price Feed Farcaster Frame",
      description: "ETH & BTC Price Feed Farcaster Frame",
      images: [
        "https://livepeer-frame.vercel.app/background.png"
      ],
      
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://livepeer-frame.vercel.app/background.png",
    "fc:frame:image:aspect_ratio":"1:1",
    "fc:frame:post_url": ``,
    "fc:frame:button:1": "Let's start",
},
};

export default function Home() {
  return (
     <></>
  );
}
