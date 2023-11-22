import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllSpots, useSpots } from '../../store/spots'
import { PreviewImage, ScrollContainer } from '../../components'
import './Home.css'

export default function Home() {
  const dispatch = useDispatch()
  const spots = useSpots()

  useEffect(() => {
    dispatch(getAllSpots())
  }, [dispatch])

  return (
    <>
      <ScrollContainer />
      <div className="spot-grid">
        {spots.map(spot => (
          <PreviewImage key={spot.id} {...spot} />
        ))}
      </div>
    </>
  )
}
