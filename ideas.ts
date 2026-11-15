type Sampler = (at: number) => [left: number, right: number];

type Keys = "CMaj" | "CMin" | "C#Maj" | "C#Min"; // ....

// all numbers are times relative to the 'source' frame
// Sources are raw songs that are manipulated from withing the song's "frame"
type Source<BPM extends number, Key extends Keys> = {
  metadata: { artist: string, title: string, album?: string };
  bpm: number;
  key: Key;
  beat: (index: number, position: "start" | "end" = "start") => number;
  segment: (start: number, end: number) => Source<BPM, Key>;
  // using web demucs
  seperated: Record<"drums" | "bass" | "vocals" | "other", Source>;
  override: () => {}
} & Sampler

import pegate from "pegate.mp3"; // Source<..., ...> the moment an mp3 is added to a workspace it is analyzed and entry is added

type StudioSampler = () => {
    
}

const source = (file: string) => null as any as {
    beat: (index: number, position: "start" | "end" = "start") => number;
    segment: () => {},
    seperate: () => {}
};

const segment = (source: ReturnType<typeof source>, start: number, end: number) => null as any as {

}

const beat = (source: ReturnType<typeof source>, index: number, position: "start" | "end" = "start") => null as any as {

} 

// length: 3:23
// bpm: 128
// key: A#
// ^ offered through intellisense
const baby = source("baby.mp3");

const intro = segment(baby, baby.beat(20))

// Each file has an internal sense of time

const serial = () => null as any;
const parallel = () => null as any;

// 
const split = () => {};

const _ = [
    intro,
    intro,
    intro, 
    intro,
    segment(baby, baby.beat())
]

const x  = () => <Intro>
