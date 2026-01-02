import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface YouTubeProfile {
  avatar: string | null;
  name: string | null;
  handle: string;
}

const CACHE_KEY = "youtube_profiles_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CacheEntry {
  data: YouTubeProfile;
  timestamp: number;
}

type ProfileCache = Record<string, CacheEntry>;

const getCache = (): ProfileCache => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
};

const setCache = (handle: string, data: YouTubeProfile) => {
  try {
    const cache = getCache();
    cache[handle] = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore cache errors
  }
};

const getCachedProfile = (handle: string): YouTubeProfile | null => {
  const cache = getCache();
  const entry = cache[handle];
  if (entry && Date.now() - entry.timestamp < CACHE_DURATION) {
    return entry.data;
  }
  return null;
};

export const useYouTubeProfile = (channelHandle: string | undefined) => {
  const [profile, setProfile] = useState<YouTubeProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!channelHandle) {
      setProfile(null);
      return;
    }

    const cleanHandle = channelHandle.replace("@", "").replace("https://www.youtube.com/", "");

    // Check cache first
    const cached = getCachedProfile(cleanHandle);
    if (cached) {
      setProfile(cached);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase.functions.invoke("fetch-youtube-profile", {
          body: { channelHandle: cleanHandle }
        });

        if (fetchError) {
          throw fetchError;
        }

        const profileData: YouTubeProfile = {
          avatar: data?.avatar || null,
          name: data?.name || null,
          handle: cleanHandle
        };

        setProfile(profileData);
        setCache(cleanHandle, profileData);
      } catch (err: any) {
        console.error("Error fetching YouTube profile:", err);
        setError(err.message);
        setProfile({ avatar: null, name: null, handle: cleanHandle });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [channelHandle]);

  return { profile, loading, error };
};

// Batch fetch multiple profiles
export const useYouTubeProfiles = (handles: (string | undefined)[]) => {
  const [profiles, setProfiles] = useState<Record<string, YouTubeProfile>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validHandles = handles.filter((h): h is string => !!h);
    if (validHandles.length === 0) return;

    const fetchAll = async () => {
      setLoading(true);
      const results: Record<string, YouTubeProfile> = {};

      await Promise.all(
        validHandles.map(async (handle) => {
          const cleanHandle = handle.replace("@", "").replace("https://www.youtube.com/", "");
          
          // Check cache first
          const cached = getCachedProfile(cleanHandle);
          if (cached) {
            results[cleanHandle] = cached;
            return;
          }

          try {
            const { data } = await supabase.functions.invoke("fetch-youtube-profile", {
              body: { channelHandle: cleanHandle }
            });

            const profileData: YouTubeProfile = {
              avatar: data?.avatar || null,
              name: data?.name || null,
              handle: cleanHandle
            };

            results[cleanHandle] = profileData;
            setCache(cleanHandle, profileData);
          } catch {
            results[cleanHandle] = { avatar: null, name: null, handle: cleanHandle };
          }
        })
      );

      setProfiles(results);
      setLoading(false);
    };

    fetchAll();
  }, [handles.join(",")]);

  return { profiles, loading };
};
