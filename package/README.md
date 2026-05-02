# @walk8243/react-audio-player

React用のシンプルでカスタマイズ可能なオーディオプレイヤーコンポーネントです。

## 特徴

- 🎵 シンプルでモダンなUI
- 🎨 CSS Variables（カスタムプロパティ）による容易なスタイルのカスタマイズ
- ⏩ 10秒スキップ（進む/戻る）機能
- 🔇 ミュートトグル機能
- 📦 依存関係が少なく軽量 (アイコンに `lucide-react` を使用)

## インストール

npmを使用する場合:

```bash
npm install @walk8243/react-audio-player
```

## 使い方

コンポーネントとスタイルシートをインポートして使用します。

```tsx
import React from 'react';
import { AudioPlayer } from '@walk8243/react-audio-player';
import '@walk8243/react-audio-player/styles.css';

export default function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}
```

## カスタマイズ

CSS Variables（カスタムプロパティ）を使用して、プレイヤーの色をカスタマイズすることができます。
独自のCSSファイルで、以下の変数を上書きしてください。

```css
:root {
  /* 背景色 */
  --audio-player-bg-color: #1f2937;
  
  /* メインテキストのカラー */
  --audio-player-text-color: #f9fafb;
  
  /* サブテキスト（時間表示など）のカラー */
  --audio-player-sub-text-color: #9ca3af;
  
  /* アクセントカラー（再生ボタン、プログレスバーなど） */
  --audio-player-main-color: #2563eb;
}
```

## プロパティ

`AudioPlayer` コンポーネントは、標準の `<audio>` 要素が受け取るほとんどのプロパティ（`src`, `autoPlay`, `loop`, イベントハンドラなど）を受け取ります。

※ `controls` プロパティは無効化され、本コンポーネント独自のUIが提供されます。

## ライセンス

MIT License
