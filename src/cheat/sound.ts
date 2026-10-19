/** Short square-wave "power-up" arpeggio, generated with the Web Audio API (no audio files). */
export function playPowerUp(up = true) {
  try {
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = up ? [523.25, 659.25, 783.99, 1046.5] : [783.99, 659.25, 523.25, 392];
    const gain = ctx.createGain();
    gain.gain.value = 0.06;
    gain.connect(ctx.destination);
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = freq;
      osc.connect(gain);
      const start = ctx.currentTime + i * 0.09;
      osc.start(start);
      osc.stop(start + 0.085);
    });
    setTimeout(() => ctx.close(), notes.length * 90 + 200);
  } catch {
    // Audio is a bonus; ignore failures (autoplay policies, old browsers).
  }
}
