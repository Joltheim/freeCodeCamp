import Cev from './assets/Cev_H2.mp3'
import Dsc_Oh from './assets/Dsc_Oh.mp3'
import Heater1 from './assets/Heater-1.mp3'
import Heater2 from './assets/Heater-2.mp3'
import Heater3 from './assets/Heater-3.mp3'
import Heater4 from './assets/Heater-4.mp3'
import Heater5 from './assets/Heater-5.mp3'
import KicknHat from './assets/Kick_n_Hat.mp3'
import Kick1 from './assets/Kick-1.mp3'

export const soundClips = [
    {name: 'Cev', audio: Cev},
    {name: 'Dsc_Oh', audio: Dsc_Oh },
    {name: 'Heater-1', audio: Heater1},
    {name: 'Heater-2', audio: Heater2},
    {name: 'Heater-3', audio: Heater3},
    {name: 'Heater-4', audio: Heater4},
    {name: 'Heater-5', audio: Heater5},
    {name: 'KicknHat', audio: KicknHat },
    {name: 'Kick-1', audio: Kick1},
]

  // console.log(soundClips[0].audio)

  // useEffect(() => {
  //   const playSound = (value) => {
  //     const audio = new Audio(soundClips[value].audio);
  //     audio.play();
  //   }
  //   playSound()
  // }, [])