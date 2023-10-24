export const refreshAccessToken = async (setAccessToken) => {
  try {
    const response = await fetch("/api/getAccessToken");

    if (response.ok) {
      const data = await response.json();
      setAccessToken(data.access_token);
    } else {
      console.error("Error refreshing access token:", response.status);
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
};

export const getRandomTrack = async (
  accessToken,
  setTrack,
  setIsLoading,
  resetAudio
) => {
  try {
    setIsLoading(true);
    let randomTrack = null;

    while (!randomTrack || !randomTrack.preview_url) {
      const searchTerm = await fetch(
        "https://random-word-api.vercel.app/api?words=1"
      )
        .then((response) => response.json())
        .then((data) => data[0]);

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchTerm
        )}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const tracks = data.tracks.items;

        if (tracks.length > 0) {
          randomTrack = tracks[0];
        }
      } else {
        console.error("Error retrieving random track:", response.status);
        setIsLoading(false);
        return;
      }
    }

    setTrack(randomTrack);
    resetAudio();
    setIsLoading(false);
  } catch (error) {
    console.error("Error retrieving random track:", error);
    setIsLoading(false);
  }
};
