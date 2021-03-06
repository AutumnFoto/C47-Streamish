const baseUrl = "/api/video";

//get all videos with the comments
export const getAllVideos = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const getVideo = (id) => {
  return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

//This module contains functions for getting all videos and addinga new video
