'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Word {
  id: number;
  english: string;
  chinese: string;
  pronunciation: string;
  example: string;
}

const sampleWords: Word[] = [
  {
    id: 1,
    english: 'quotation',
    chinese: '报价单',
    pronunciation: '/kwəʊˈteɪʃn/',
    example: 'Could you please send me a quotation for these items?'
  },
  {
    id: 2,
    english: 'negotiate',
    chinese: '谈判，协商',
    pronunciation: '/nɪˈɡəʊʃieɪt/',
    example: 'We need to negotiate the terms of the contract.'
  },
  {
    id: 3,
    english: 'shipment',
    chinese: '货运，装运',
    pronunciation: '/ˈʃɪpmənt/',
    example: 'The shipment will arrive at the port next week.'
  },
  {
    id: 4,
    english: 'inquiry',
    chinese: '询盘，询价',
    pronunciation: '/ɪnˈkwaɪəri/',
    example: 'We received an inquiry about our new product line.'
  },
  {
    id: 5,
    english: 'payment terms',
    chinese: '付款条件',
    pronunciation: '/ˈpeɪmənt tɜːmz/',
    example: 'Our standard payment terms are 30% deposit and 70% before shipment.'
  },
  {
    id: 6,
    english: 'follow up',
    chinese: '跟进',
    pronunciation: '/ˈfɒləʊ ʌp/',
    example: 'I will follow up with you regarding the order status.'
  },
  {
    id: 7,
    english: 'available',
    chinese: '可用的，有货的',
    pronunciation: '/əˈveɪləbl/',
    example: 'These items are currently available in stock.'
  },
  {
    id: 8,
    english: 'lead time',
    chinese: '交货期，生产周期',
    pronunciation: '/liːd taɪm/',
    example: 'The lead time for this order is about 15-20 days.'
  }
];

export default function VocabularyPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const currentWord = sampleWords[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % sampleWords.length);
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
              style={{ width: `${((currentWordIndex + 1) / sampleWords.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            已学习 {currentWordIndex + 1} / {sampleWords.length} 个单词
          </p>
        </div>
      </div>
    </div>
  );
}