import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer singleVideo={exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        {/* <div exampleVideoData={exampleVideoData}><h5><em>video List</em> view goes here</h5></div> */}
        <VideoList videos={exampleVideoData}/>
    </div>
  </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
