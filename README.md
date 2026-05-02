# @walk8243/react-audio-player

React用のシンプルでカスタマイズ可能なオーディオプレイヤーコンポーネントです。

## 特徴

- 🎵 シンプルでモダンなUI
- 🎨 CSS Variables（カスタムプロパティ）による容易なスタイルのカスタマイズ
- ⏩ 10秒スキップ（進む/戻る）機能
- 🔇 ミュートトグル機能
- 📦 依存関係が少なく軽量 (アイコンに `lucide-react` を使用)

## デモページ

https://walk8243.github.io/react-audio-player/

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
    <div>
      <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}
```

詳細は [GitHub Registryのパッケージ情報](https://github.com/walk8243/react-audio-player/pkgs/npm/react-audio-player) を参照ください。

## 開発

このリポジトリは、パッケージ本体(`package/`)と動作確認用のNext.jsアプリ(`example/`)で構成されています。

```bash
# パッケージのビルド（ウォッチモード）
cd package
npm run build:watch

# サンプルアプリの起動
cd example
npm run dev
```
