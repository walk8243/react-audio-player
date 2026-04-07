import { AudioPlayer } from "@walk8243/react-audio-player/src/AudioPlayer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 p-8 text-black dark:text-white">
      <main className="flex flex-col w-full max-w-2xl items-center justify-center p-12 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl transition-all border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          AudioPlayer Example
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center leading-relaxed">
          これは <code>@walk8243/react-audio-player</code> のシンプルなデモです。<br />
          デフォルトのcontrolsを表示し、DOVA-SYNDROMEの音源を再生しています。
        </p>

        <div className="w-full flex justify-center p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-6 shadow-inner">
          <AudioPlayer
            src="https://dova-worker.tracks-cid.workers.dev?filepath=bgm%2Faudio%2Ff7fd4619-1059-43f3-87a9-b5961b7e0a68.mp3&expires=1775493328&token=3a5e6c86cbe8666f3dc25cd82141225be01fe63cbe5c2716863d6c89f17cb70d"
            className="w-full max-w-md outline-none"
          />
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
          使用音源: <a href="https://dova-s.jp/bgm/detail/23239" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DOVA-SYNDROME (23239)</a>
        </p>
      </main>
    </div>
  );
}
