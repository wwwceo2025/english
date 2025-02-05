'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  content: string;
  difficulty: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const sampleArticle: Article = {
  id: 1,
  title: 'The Benefits of Learning a New Language',
  content: `Learning a new language is one of the most rewarding experiences a person can have. It opens up new opportunities for communication, cultural understanding, and personal growth. Research has shown that bilingual individuals often have better cognitive abilities and memory compared to those who speak only one language.

Moreover, in today's interconnected world, knowing multiple languages can significantly enhance career prospects. Many companies operate globally and value employees who can communicate with international clients and partners. Learning a new language also helps in developing empathy and cultural sensitivity, as it provides insight into how different people express their thoughts and emotions.

While the process of learning a new language can be challenging, the benefits far outweigh the difficulties. Modern technology and resources have made language learning more accessible than ever before. Whether through apps, online courses, or traditional classroom settings, there are numerous ways to embark on your language learning journey.`,
  difficulty: 'Intermediate',
  questions: [
    {
      id: 1,
      question: 'According to the text, what is one benefit of learning a new language?',
      options: [
        'It makes you more popular',
        'It improves cognitive abilities',
        'It makes you richer',
        'It helps you sleep better'
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'How does knowing multiple languages benefit career prospects?',
      options: [
        'It guarantees a high salary',
        'It allows working fewer hours',
        'It helps in communicating with international clients',
        'It makes office work easier'
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: 'What does the text say about modern language learning?',
      options: [
        'It is more expensive than before',
        'It is more difficult than before',
        'It is only possible in classrooms',
        'It is more accessible than ever'
      ],
      correctAnswer: 3
    }
  ]
};

export default function ReadingPage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return sampleArticle.questions.reduce((score, question, index) => {
      return score + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            阅读理解
          </h1>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {sampleArticle.title}
                </h2>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {sampleArticle.difficulty}
                </span>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                {sampleArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowQuestions(!showQuestions)}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {showQuestions ? '隐藏理解测试' : '开始理解测试'}
              </button>
            </div>

            {showQuestions && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  理解测试
                </h3>
                {sampleArticle.questions.map((question, questionIndex) => (
                  <div key={question.id} className="space-y-4">
                    <p className="text-gray-900 dark:text-white">
                      {question.question}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                          className={`w-full text-left p-3 rounded-lg ${selectedAnswers[questionIndex] === optionIndex
                            ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                            : 'bg-gray-100 dark:bg-gray-700'
                            } hover:bg-blue-50 dark:hover:bg-blue-800 transition-colors`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {!showResults && (
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                    disabled={selectedAnswers.length !== sampleArticle.questions.length}
                  >
                    提交答案
                  </button>
                )}

                {showResults && (
                  <div className="bg-green-100/80 dark:bg-green-900/30 backdrop-blur-xl p-6 rounded-xl border border-green-200/50 dark:border-green-700/50">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      测试结果
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      得分: {calculateScore()} / {sampleArticle.questions.length}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}