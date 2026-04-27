"use client";

import { AudioPlayer } from "@walk8243/react-audio-player";
import "@walk8243/react-audio-player/styles.css";

export default function Home() {
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

        <div className="w-full flex justify-center p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-6 shadow-inner">
          <AudioPlayer
            src="https://audios.ftcdn.net/03/53/73/13/48K_353731386.m4a"
            className="w-full max-w-md outline-none"
          />
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
          使用音源: <a href="https://stock.adobe.com/jp/search/audio?k=485146083" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Adobe Stock (485146083)</a>
        </p>
      </main>
    </div>
  );
}
