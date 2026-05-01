"use client";

import { useState } from "react";
import { AudioPlayer } from "@walk8243/react-audio-player";
import "@walk8243/react-audio-player/styles.css";

export default function Home() {
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-8 text-black dark:text-white">
      <main className="flex flex-col w-full max-w-2xl items-center justify-center p-12 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl transition-all border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          AudioPlayer Example
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center leading-relaxed">
          これは <code>@walk8243/react-audio-player</code> のシンプルなデモです。<br />
          デフォルトのcontrolsを表示し、Adobe Stockの音源を再生しています。
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-2 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-6 shadow-inner">
          <select
            className="w-full bg-transparent outline-none cursor-pointer"
            onChange={(e) => setAudioSrc(e.target.value)}>
            <option value={undefined}>未選択</option>
            <option value="https://audios.ftcdn.net/03/53/73/13/48K_353731386.m4a">Free And Happy</option>
            <option value="https://audios.ftcdn.net/20/04/71/65/48K_2004716573.m4a">The Sands of Intrigue</option>
            <option value="https://audios.ftcdn.net/19/85/61/84/48K_1985618492.m4a">Endless Summer</option>
            <option value="https://audios.ftcdn.net/20/04/71/74/48K_2004717428.m4a">Ambient Medieval Documentary</option>
          </select>
          <AudioPlayer
            src={audioSrc}
            className="w-full max-w-md outline-none"
          />
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
          使用音源: <a href="https://stock.adobe.com/jp/search/audio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adobe Stock</a>
        </p>
      </main>
    </div>
  );
}
