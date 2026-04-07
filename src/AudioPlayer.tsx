"use client";

import React, { useRef, useState } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX } from 'lucide-react';

export interface AudioPlayerProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  // カスタムプロパティが必要な場合はここに追加します
}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  // Audioタグのイベントをフックしつつ、親から渡されたハンドラも呼び出す
  const { onTimeUpdate, onLoadedMetadata, onPlay, onPause, onVolumeChange, ...restProps } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setCurrentTime(e.currentTarget.currentTime);
    if (onTimeUpdate) onTimeUpdate(e);
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setDuration(e.currentTarget.duration);
    if (onLoadedMetadata) onLoadedMetadata(e);
  };

  const handlePlay = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(true);
    if (onPlay) onPlay(e);
  };

  const handlePause = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsPlaying(false);
    if (onPause) onPause(e);
  };

  const handleVolumeChange = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setIsMuted(e.currentTarget.muted);
    if (onVolumeChange) onVolumeChange(e);
  };

  const skipTime = (amount: number) => {
    if (ref.current) {
      ref.current.currentTime += amount;
    }
  };

  const toggleMute = () => {
    if (ref.current) {
      ref.current.muted = !ref.current.muted;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md p-4 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      {/* 実体のaudioタグ（画面には表示しない） */}
      <audio
        ref={ref}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onVolumeChange={handleVolumeChange}
        {...restProps}
      />

      {/* コントローラ */}
      <div className="flex items-center justify-between">
        {/* 左側：再生コントロール */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => skipTime(-10)}
            aria-label="10秒巻き戻し"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={togglePlay}
            aria-label={isPlaying ? '一時停止' : '再生'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white leading-none" />
            ) : (
              <Play className="w-6 h-6 text-white leading-none ml-1" />
            )}
          </button>

          <button
            type="button"
            className="p-2 hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => skipTime(30)}
            aria-label="30秒先送り"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>

        {/* 右側：時間表示とミュート */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium tabular-nums min-w-[80px] text-center text-gray-300">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button
            type="button"
            className="p-2 hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMute}
            aria-label={isMuted ? 'ミュート解除' : 'ミュート'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-red-500" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-200" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

AudioPlayer.displayName = 'AudioPlayer';
