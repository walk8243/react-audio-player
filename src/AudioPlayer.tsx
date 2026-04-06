import React, { forwardRef } from 'react';

export interface AudioPlayerProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  // カスタムプロパティが必要な場合はここに追加します
}

export const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(
  (props, ref) => {
    return <audio controls ref={ref} {...props} />;
  }
);

AudioPlayer.displayName = 'AudioPlayer';
