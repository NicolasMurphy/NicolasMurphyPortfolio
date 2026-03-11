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

export const getRandomTrack = async (setTrack, setIsLoading) => {
  try {
    setIsLoading(true);
    let track = null;

    while (!track) {
      const wordRes = await fetch("https://random-word-api.herokuapp.com/word");
      const wordData = await wordRes.json();
      const searchTerm = wordData[0];

      const res = await fetch(
        `/api/getDeezerTrack?q=${encodeURIComponent(searchTerm)}`,
      );
      const data = await res.json();

      const result = data.data?.[0];
      if (result?.preview) {
        track = result;
      }
    }

    setTrack(track);
    setIsLoading(false);
  } catch (error) {
    console.error("Error retrieving random track:", error);
    setIsLoading(false);
  }
};
