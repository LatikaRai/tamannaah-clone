import heroVideo from '../../assets/videos/casual.mp4'

const HomeVideo = () => {
  return (
    <video autoPlay muted loop playsInline
    className='w-full h-screen object-cover'>
        <source src={heroVideo}/>
    </video>
  )
}

export default HomeVideo
