import './PodcastFiles.css'


function PodcastFiles({pod,getPodcastData,index}) {
  if (!pod) {
    return <div>No Podcast selected</div>;
  }
  return (
    <div className="podcast-container" onClick={()=>getPodcastData(pod,index)}>
        <h4 className='podcast-name'>{pod.name}</h4>
        </div>
  )
}

export default PodcastFiles