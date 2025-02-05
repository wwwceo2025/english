'use client';

import { useState } from 'react';
import Link from 'next/link';
import { vocabularyData } from '@/data/vocabulary';

type Category = 'all' | 'business' | 'daily' | 'phone' | 'email';

export default function VocabularyPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredWords = selectedCategory === 'all'
    ? vocabularyData
    : vocabularyData.filter(word => word.category === selectedCategory);

  const currentWord = filteredWords[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % filteredWords.length);
    setShowMeaning(false);
  };

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: '全部' },
    { value: 'business', label: '外贸词汇' },
    { value: 'daily', label: '日常交际' },
    { value: 'phone', label: '电话沟通' },
    { value: 'email', label: '邮件写作' }
  ];

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentWordIndex(0);
    setShowMeaning(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← 返回首页
          </Link>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500 mb-8 text-center">
            单词学习
          </h1>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-5xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                {currentWord.english}
              </h2>
              <p className="text-lg text-gray-600/90 dark:text-gray-400/90 mb-4 font-medium">
                {currentWord.pronunciation}
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowMeaning(!showMeaning)}
                className="mb-4 text-sm font-medium bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
              >
                {showMeaning ? '隐藏释义' : '显示释义'}
              </button>

              {showMeaning && (
                <div className="space-y-4">
                  <p className="text-xl text-gray-900 dark:text-white">
                    {currentWord.chinese}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    {currentWord.example}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handleNextWord}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md w-full md:w-auto"
              >
                下一个单词
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            学习进度
          </h2>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-4 bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${((currentWordIndex + 1) / filteredWords.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            已学习 {currentWordIndex + 1} / {filteredWords.length} 个单词
          </p>
        </div>
      </div>
    </div>
  );
}