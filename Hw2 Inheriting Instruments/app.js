import Tone from 'tone';
let currentInstrument = 0;
class Instrument{
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }
    listen(duration){
        console.log(this.family + this.verb + " at " + this.loudness + ".");
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("B6", duration);
    }
    playNext(){
        instruments[currentInstrument].listen(.5);
        currentInstrument++;
    }


}
class Woodwind extends Instrument{
    constructor(loudness, family, verb){
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}
class Percussion extends Instrument{
    constructor(loudness, family, verb){
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}
class String extends Instrument{
    constructor(loudness, family, verb){
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}
let instruments = [];
instruments[0] = new Woodwind(4, "woodwind", "blow");
instruments[1] = new Percussion(10, "percussion", "beat");
instruments[2] = new String(6, "string", "pluck");

instruments.forEach((instrument) => {
    instrument.playNext();
})
