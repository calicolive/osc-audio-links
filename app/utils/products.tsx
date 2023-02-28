import BFM from 'public/images/bfm.webp';
import Oscilloscope from 'public/images/oscilloscope.webp';
import PlateVerb from 'public/images/plateverb.webp';
import SpringVerb from 'public/images/springverb.webp';

export const products = [
  {
    id: 1,
    name: 'BFM - Big F*ing  Meters',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>BFM </span>or Big F*ing Meters is a macOS,
          Windows, and soon to be iOS compatible Metering plug-in designed
          exactly how the name sounds... really f*ing big. With the main goal of
          readability, we wanted to bring a meter that you can see from across
          the studio and keep your records clip-free.
        </div>
        <div>
          BFM currently offers 5 Modes with RMS, LUFs, Peak, and Peak Hold
          values, to give you a variety of views to keep your signal under
          control. The Text, Bars, Waves, VU Meters, Spectrum let you decide how
          you want to keep track of your signal.
        </div>
      </div>
    ),
    link: 'https://oscaudio.gumroad.com/l/BFM?layout=profile',
    img: BFM,
  },
  {
    id: 2,
    name: 'Oscilloscope',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>Oscilloscope</span> is a Mac/PC compatible
          stereo capable oscilloscope tool for audio nerds. Complete with
          RMS/Peak meter and controllable Vertical and Horizontal Offset. As
          well as separate Voltage and Gain controls, coupled with visual
          controls like Line Thickness and Rotation for a complete experience.
        </div>
        <div>
          This tool is great for checking your custom built oscillators,
          plug-ins, or just visualizing your audio.
        </div>
        <div>VST3, AU, & Stand-alone compatible.</div>
      </div>
    ),

    link: 'https://oscaudio.gumroad.com/l/Oscilloscope?layout=profile',
    img: Oscilloscope,
  },
  {
    id: 3,
    name: 'plateVerb',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>plateVerb</span> is a macOS, Windows, and
          soon to be iOS compatible stereo plate reverb. Designed for VST3, AU,
          AUv3, and stand-alone use.
        </div>
        <div>
          Loaded with a High Pass Filter, Low Pass Filter, and controllable
          Decay of the convolution. plateVerb's versatility can bring life to
          any source.
        </div>
        <div>
          All settings can be saved and loaded in your sessions as well as
          crossplatform presets. All parameters offer automation control to get
          the most expressive sound.
        </div>
      </div>
    ),

    link: 'https://oscaudio.gumroad.com/l/plateVerb?layout=profile',
    img: PlateVerb,
  },
  {
    id: 4,
    name: 'springVerb',
    description: (
      <div className='flex flex-col space-y-4'>
        <div>
          <span className='font-bold'>springVerb </span> is a macOS, Windows,
          and soon to be iOS compatible stereo multi-mode spring reverb.
          Designed for VST3, AU, AUv3, and stand-alone use.
        </div>
        <div>
          Spring reverb has a long history, making debut on organ sounds and
          really getting noticed when being built into some of the most famous
          guitar amps known to man. In today's musical world, spring reverb is
          now pretty much used on anything that could use just a touch of
          ambience.
        </div>
        <div>
          springVerb is packed with 3 spring modes to give you a wide range of
          sounds to bring to your mix.
        </div>
      </div>
    ),

    link: 'https://oscaudio.gumroad.com/l/springVerb?layout=profile',
    img: SpringVerb,
  },
];
