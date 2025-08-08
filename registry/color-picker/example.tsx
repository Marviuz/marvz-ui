import {
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSlider,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerLabel,
  ColorPickerPortal,
  ColorPickerPositioner,
  ColorPickerProvider,
  ColorPickerRoot,
  ColorPickerSwatch,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
} from './color-picker';

export function ColorPickerExample() {
  return (
    <ColorPickerProvider>
      <ColorPickerRoot>
        <ColorPickerLabel>Color</ColorPickerLabel>
        <ColorPickerControl>
          <ColorPickerTrigger>
            <ColorPickerTransparencyGrid />
            <ColorPickerSwatch />
          </ColorPickerTrigger>
          <ColorPickerChannelInput channel="hex" />
          <ColorPickerChannelInput channel="alpha" />
        </ColorPickerControl>
        <ColorPickerPortal>
          <ColorPickerPositioner>
            <ColorPickerContent>
              <ColorPickerArea>
                <ColorPickerAreaBackground />
                <ColorPickerAreaThumb />
              </ColorPickerArea>

              <ColorPickerChannelSlider channel="hue">
                <ColorPickerChannelSliderTrack channel="hue" />
                <ColorPickerChannelSliderThumb channel="hue" />
              </ColorPickerChannelSlider>

              <ColorPickerChannelSlider channel="alpha">
                <ColorPickerTransparencyGrid size="12px" />
                <ColorPickerChannelSliderTrack channel="alpha" />
                <ColorPickerChannelSliderThumb channel="alpha" />
              </ColorPickerChannelSlider>
            </ColorPickerContent>
          </ColorPickerPositioner>
        </ColorPickerPortal>
      </ColorPickerRoot>
    </ColorPickerProvider>
  );
}
