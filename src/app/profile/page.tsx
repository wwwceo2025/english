'use client';

import { useState } from 'react';
import Link from 'next/link';

interface UserStats {
  totalWords: number;
  masteredWords: number;
  listeningHours: number;
  readingArticles: number;
  streak: number;
}

const sampleUserStats: UserStats = {
  totalWords: 150,
  masteredWords: 75,
  listeningHours: 12,
  readingArticles: 8,
  streak: 7
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleSave = () => {
    if (!username.trim() || !email.trim()) {
      alert('用户名和邮箱不能为空');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('请输入有效的邮箱地址');
      return;
    }

    try {
      setIsEditing(false);
    } catch (error) {
      console.error('保存失败:', error);
      alert('保存失败，请稍后重试');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Personal Information
              </h1>
              <button
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
                className="text-sm font-medium bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{username}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Learning Statistics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Vocabulary Mastery
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400">
                    Total Words: {sampleUserStats.totalWords}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mastered: {sampleUserStats.masteredWords}
                  </p>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{
                        width: `${(sampleUserStats.masteredWords / sampleUserStats.totalWords) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Listening Practice
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Total Listening Hours: {sampleUserStats.listeningHours}
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Reading Comprehension
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Articles Read: {sampleUserStats.readingArticles}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Learning Streak
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-4 bg-yellow-400 rounded-full transition-all duration-500"
                    style={{ width: `${(sampleUserStats.streak / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {sampleUserStats.streak} Days Streak
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}