import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ProfileRequest {
  channelHandle: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { channelHandle }: ProfileRequest = await req.json();
    
    if (!channelHandle) {
      console.error("Missing channelHandle parameter");
      return new Response(
        JSON.stringify({ error: "Channel handle is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Fetching profile for channel: ${channelHandle}`);

    // Clean the handle - remove @ if present
    const cleanHandle = channelHandle.replace("@", "");
    
    // Fetch the YouTube channel page to extract the profile image
    const channelUrl = `https://www.youtube.com/@${cleanHandle}`;
    const response = await fetch(channelUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    if (!response.ok) {
      console.error(`Failed to fetch channel page: ${response.status}`);
      return new Response(
        JSON.stringify({ error: "Channel not found", avatar: null }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const html = await response.text();
    
    // Extract the channel avatar from meta tags or JSON-LD
    // YouTube uses og:image meta tag for channel thumbnail
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
    
    let avatarUrl = null;
    if (ogImageMatch && ogImageMatch[1]) {
      avatarUrl = ogImageMatch[1];
      // Get higher quality version
      avatarUrl = avatarUrl.replace(/=s\d+/, "=s176");
      console.log(`Found avatar URL: ${avatarUrl}`);
    } else {
      console.log("Could not find avatar in page");
    }

    // Also try to get channel name
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
    const channelName = titleMatch ? titleMatch[1] : null;

    return new Response(
      JSON.stringify({ 
        avatar: avatarUrl,
        name: channelName,
        handle: cleanHandle
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error fetching YouTube profile:", error);
    return new Response(
      JSON.stringify({ error: error.message, avatar: null }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
