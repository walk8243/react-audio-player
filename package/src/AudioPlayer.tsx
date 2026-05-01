"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX } from 'lucide-react';
import styles from './audio-player.module.css';

export interface AudioPlayerProps extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'> {
  // カスタムプロパティが必要な場合はここに追加します
}

export const AudioPlayer = (props: AudioPlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);

  // Audioタグのイベントをフックしつつ、親から渡されたハンドラも呼び出す
  const { onTimeUpdate, onLoadedMetadata, onPlay, onPause, onVolumeChange, className, src, style, ...restProps } = props;
  if ('controls' in restProps) {
    delete restProps.controls;
  }

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
    if (ref.current) {
      setDuration(ref.current.duration);
    }
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

  useEffect(() => {
    ref.current?.pause();
    setIsPlaying(false);
    setDuration(0);
    setCurrentTime(0);
  }, [src]);

  return (
    <div className={className} style={style}>
      <div className={styles.container}>
        {/* 実体のaudioタグ（画面には表示しない） */}
        <audio
          ref={ref}
          controls={false}
          src={src || undefined}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handlePlay}
          onPause={handlePause}
          onVolumeChange={handleVolumeChange}
          {...restProps}
        />

        {/* コントローラ */}
        <div className={styles.controls}>
          {/* 左側：再生コントロール */}
          <div className={styles.controlsLeft}>
            <button
              type="button"
              className={styles.skipBackButton}
              onClick={() => skipTime(-10)}
              disabled={!src}
              aria-label="10秒巻き戻し"
            >
              <RotateCcw className={styles.skipBackButtonIcon} />
            </button>

            <button
              type="button"
              className={isPlaying ? styles.pauseButton : styles.playButton}
              onClick={togglePlay}
              disabled={!src}
              aria-label={isPlaying ? '一時停止' : '再生'}
            >
              {isPlaying ? (
                <Pause className={styles.pauseButtonIcon} />
              ) : (
                <Play className={styles.playButtonIcon} />
              )}
            </button>

            <button
              type="button"
              className={styles.skipForwardButton}
              onClick={() => skipTime(10)}
              disabled={!src}
              aria-label="10秒先送り"
            >
              <RotateCw className={styles.skipForwardButtonIcon} />
            </button>
          </div>

          {/* 右側：時間表示とミュート */}
          <div className={styles.controlsRight}>
            <span className={styles.time}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <button
              type="button"
              className={styles.muteButton}
              onClick={toggleMute}
              aria-label={isMuted ? 'ミュート解除' : 'ミュート'}
            >
              {isMuted ? (
                <VolumeX className={styles.muteButtonIconX} />
              ) : (
                <Volume2 className={styles.muteButtonIcon2} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

AudioPlayer.displayName = 'AudioPlayer';
