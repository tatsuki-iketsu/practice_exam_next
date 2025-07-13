// src/app/page.tsx
'use client'; // クライアントコンポーネントとしてマーク

import React, { useState } from 'react';

const App = () => {
  // ログイン状態を管理するステート
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // ユーザー名を管理するステート
  const [username, setUsername] = useState('');
  // パスワードを管理するステート
  const [password, setPassword] = useState('');
  // ログインエラーメッセージを管理するステート
  const [loginError, setLoginError] = useState('');

  // ログイン処理のハンドラ
  const handleLogin = (e) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ

    // ここでは簡易的な認証ロジックを実装
    // 実際のアプリケーションでは、API連携やFirebase認証などを使用します
    if (username === 'testuser' && password === 'password') {
      setIsLoggedIn(true);
      setLoginError(''); // エラーメッセージをクリア
    } else {
      setLoginError('ユーザー名またはパスワードが間違っています。');
    }
  };

  // ログアウト処理のハンドラ
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  // ログインしていない場合、ログイン画面を表示
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">ログイン</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                ユーザー名
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ユーザー名を入力してください"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="パスワードを入力してください"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-xs italic mb-4">{loginError}</p>
            )}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out w-full"
              >
                ログイン
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm mt-6">
            アカウントをお持ちでないですか？ <a href="#" className="text-blue-600 hover:underline">新規登録</a>
          </p>
        </div>
      </div>
    );
  }

  // ログインしている場合、メインの学習画面を表示
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row font-inter">
      {/* Left Sidebar - Progress & Stats */}
      <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6 lg:p-8 flex flex-col items-center lg:items-start rounded-lg lg:rounded-none lg:rounded-l-lg m-4 lg:m-0">
        <div className="text-2xl font-bold text-blue-600 mb-6">資格試験サイト</div>
        <div className="flex items-center mb-6 w-full">
          <img
            src="https://placehold.co/40x40/007bff/ffffff?text=U"
            alt="User Avatar"
            className="rounded-full mr-3"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/007bff/ffffff?text=U"; }}
          />
          <span className="text-lg font-semibold text-gray-800">学習者Aさん</span>
          <button
            onClick={handleLogout}
            className="ml-auto px-3 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
          >
            ログアウト
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-6">
          <h3 className="text-md font-semibold text-gray-700 mb-2">試験進捗</h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">65% 完了 (32/50問)</p>
        </div>

        {/* Learning Stats */}
        <div className="w-full mb-6">
          <h3 className="text-md font-semibold text-gray-700 mb-2">学習統計</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>正答率: <span className="font-bold text-green-600">85%</span></li>
            <li>平均解答時間: <span className="font-bold">45秒</span></li>
            <li>総学習時間: <span className="font-bold">12時間30分</span></li>
          </ul>
        </div>

        {/* Achievements/Badges */}
        <div className="w-full mb-6">
          <h3 className="text-md font-semibold text-gray-700 mb-2">アチーブメント</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-200 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">初学者マスター</span>
            <span className="bg-purple-200 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">連続学習5日</span>
            <span className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">ITパスポート合格</span>
          </div>
        </div>

        {/* Question List (Mock) */}
        <div className="w-full">
          <h3 className="text-md font-semibold text-gray-700 mb-2">問題リスト</h3>
          <div className="grid grid-cols-5 gap-1 text-xs">
            {[...Array(50)].map((_, i) => (
              <span
                key={i}
                className={`w-6 h-6 flex items-center justify-center rounded-sm
                  ${i < 30 ? 'bg-green-200 text-green-800' : i < 35 ? 'bg-red-200 text-red-800' : 'bg-gray-200 text-gray-600'}`}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content - Question Area */}
      <main className="flex-1 bg-white shadow-lg rounded-lg lg:rounded-none lg:rounded-r-lg p-6 lg:p-8 m-4 lg:m-0">
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">ITパスポート試験 - 問題演習</h2>
          <span className="text-md font-bold text-blue-600">問題 33 / 50</span>
        </header>

        <div className="mb-6">
          <p className="text-lg text-gray-900 leading-relaxed">
            問33. 企業が情報セキュリティ対策を講じる際に、最初に実施すべき活動として最も適切なものはどれか。
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md p-3 text-base text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            A. セキュリティソフトウェアを導入する。
          </button>
          <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md p-3 text-base text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            B. 情報セキュリティポリシーを策定する。
          </button>
          <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md p-3 text-base text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            C. 従業員へのセキュリティ教育を実施する。
          </button>
          <button className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md p-3 text-base text-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
            D. ネットワーク機器の脆弱性診断を実施する。
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button className="px-5 py-2 bg-gray-300 text-gray-800 rounded-md shadow hover:bg-gray-400 transition duration-200 ease-in-out">
            前の問題
          </button>
          <div className="flex space-x-3">
            <button className="px-5 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-200 ease-in-out">
              解答
            </button>
            <button className="px-5 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition duration-200 ease-in-out">
              解説を見る
            </button>
          </div>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200 ease-in-out">
            次の問題
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
