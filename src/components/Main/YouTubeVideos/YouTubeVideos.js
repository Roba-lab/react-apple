
import React, { useState,useEffect } from 'react'





function YouTubeVideos() {
const [youTubeVideos,setVideos]=useState([]);

useEffect(()=>{
fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=8`
)
  .then((res) => res.json())
  .then((data) => {
    const youTubevideos = data.items;
    setVideos(youTubevideos);
  });
},[]);

  console.log(youTubeVideos) 
  return (
    <div className="allVideosWrapper"> 
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <div className="title-wraper">
            Latest Videos<br/><br/>
          </div>
        </div>
        {youTubeVideos?.map((singleVideo,i)=>{
          let vidId=singleVideo.id.videoId;
          let vidLink=`https://www.youtube.com/watch?v=${vidId}`
          let videoWrapper = (
            <div key={i} className="col-sm-12 col-md-6 col-lg-4">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="/">
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                  
                    />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="/">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
    return videoWrapper;
        })}
        </div>
        </div>
    </div>
  );
}


export default YouTubeVideos;
// API_Key = "AIzaSyAYZJ-8v-2fcFo58gHb37I6zHPXpEc5Kuc"
//      Channel_id="UCE_M8A5yxnLfW0KghEeajjw"

// https://www.googleapis.com/youtube/v3
// /search? 
// key={YOUR_API_KEY}
// &channelId={channel_id_here}
// &part=snippet,id
// order=date&maxResults={number}

// // https://www.googleapis.com/youtube/v3/search?key=
// {YOUR_API_KEY}&channelId={channel_id_here}&part=snippet,id&
// order=date&maxResults={number}


// https://www.googleapis.com/youtube/v3/search?key=
//  AIzaSyAYZJ-8v-2fcFo58gHb37I6zHPXpEc5Kuc&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id
// &order=date&maxResults=8
// ** A Format:on how to request to get the channel_id
// // https://www.googleapis.com/youtube/v3/channels?
// key={YOUR_API_KEY}&forUsername={CHANNEL_NAME}&part=id

// https://www.googleapis.com/youtube/v3/
// channels?key=AIzaSyAYZJ-8v-2fcFo58gHb37I6zHPXpEc5Kuc&forUsername=Apple&part=id