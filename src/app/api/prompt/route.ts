import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest): Promise<NextResponse> {

      try{
        return new NextResponse(`
                    <div>
                    <Head>
                    <title>Price Feed Farcaster Frame</title>

                    <meta property="og:title" content="Price Feed Farcaster Frame" />
                  
                    <meta property="og:image" content="http://localhost:3002/background2.png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="fc:frame" content="vNext" />
                    <meta name="fc:frame:image" content="http://localhost:3002/background2.png" />
                    <meta name="fc:frame:image:aspect_ratio" content="1:1" />
                    <meta name="fc:frame:input:text" content="Input" />
                    <meta name="fc:frame:post_url" content="" />
                    <meta name="fc:frame:button:1" content="Generate" />
                    </Head>
        
                    </div>
                </div>
         `,{ headers: { 'Content-Type': 'text/html' } })
         
    
       }catch(e){

       }

}



export const dynamic = "force-dynamic";