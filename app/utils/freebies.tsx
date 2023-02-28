import PocketOscillator from 'public/images/pocket-oscillator.webp';
import Modular808 from 'public/images/modular-808.webp';

export const freebies = [
  {
    id: 1,
    name: 'Modular 808',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>Modular 808</span> is a powerful
          collection of Analog Oscillator samples jam packed into an easy-to-use
          plug-in interface.
        </div>
        <div>
          Designed with flexibility in mind, you get 3 basic controls, Attack,
          Release, and Glide. Allowing for anything from quick kick hits to long
          massive portamento sub-bass lines.
        </div>
        <div>
          If you already have a sampler in mind, don't worry, we got you
          covered. All sounds source samples are included and named to be ready
          for import to your favorite apps.
        </div>
      </div>
    ),
    link: 'https://calicolive.gumroad.com/l/modular808',
    img: Modular808,
  },
  {
    id: 2,
    name: 'Pocket Oscillator',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>Pocket Oscillator</span> is a macOS,
          Windows, and iOS compatible stereo capable oscilllator. Designed for
          VST3, AU, AUv3, and stand-alone use.
        </div>
        <div>
          Complete with oscilloscope and controllable Wave, Frequency, & Volume.
          Test all your gear with Sine, Square, Saw, and Noise, oscillators.
          Plug-in GUI resizable and automatable parameters designed to recall
          with your various sessions.
        </div>
        <div>iOS coming soon!</div>
      </div>
    ),

    link: 'https://oscaudio.gumroad.com/l/PocketOscillator?layout=profile',
    img: PocketOscillator,
  },
];
