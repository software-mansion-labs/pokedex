import { Audio } from 'expo';

export const playTheJingleAsync = async () => {
  try {
    await Audio.setIsEnabledAsync(true);
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS
    });
    this.sound = await Audio.Sound.create(
      require('../assets/pokemon_long.mp3'),
      { shouldPlay: true }
    );
  } catch (error) {
    console.error(error);
  }
}
