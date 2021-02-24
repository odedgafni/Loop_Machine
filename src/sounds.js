import stutter_breakbeats from './samples/stutter_breakbeats.mp3';
import drums from './samples/drums.mp3';
import guitar from './samples/electric_guitar.mp3';
import future_beats from './samples/future_beats.mp3';
import organ_synth from './samples/organ_synth.mp3';
import percussions from './samples/percussions.mp3';
import stompy_drums from './samples/stompy_drums.mp3';
import bass from './samples/bass_groove.mp3';
import tangu_groove from './samples/tangu_groove.mp3';

export const sounds = [
  {
    name: "Breaks",
    audio: new Audio(stutter_breakbeats),
    isActive: false,
    id: 1
  },
  {
    name: "Drum 1",
    audio: new Audio(drums),
    isActive: false,
    id: 2
  },
  {
    name: "Guitar",
    audio: new Audio(guitar),
    isActive: false,
    id: 3
  },
  {
    name: "Future",
    audio: new Audio(future_beats),
    isActive: false,
    id: 4
  },
  {
    name: "Organ",
    audio: new Audio(organ_synth),
    isActive: false,
    id: 5
  },
  {
    name: "Effects",
    audio: new Audio(percussions),
    isActive: false,
    id: 6
  },
  {
    name: "Drum2",
    audio: new Audio(stompy_drums),
    isActive: false,
    id: 7
  },
  {
    name: "Bass",
    audio: new Audio(bass),
    isActive: false,
    id: 8
  },
  {
    name: "African",
    audio: new Audio(tangu_groove),
    isActive: false,
    id: 9
  }
]
