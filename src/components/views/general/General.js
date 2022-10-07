import UpButton from '../../common/upButton/UpButton'
import CharacterList from './characterList/CharacterList'
import './General.scss'

function General() {
  return (
    <div className='general'>
      <div className='general-title'>Characters</div>
      <CharacterList />
      <UpButton />
    </div>
  )
}

export default General
