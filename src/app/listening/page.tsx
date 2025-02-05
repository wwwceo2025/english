'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AudioLesson {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  transcript: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

const sampleLesson: AudioLesson = {
  id: 1,
  title: 'Business Call - Product Inquiry',
  description: '学习外贸业务电话沟通的常用对话',
  audioUrl: '/sample-audio.mp3',
  transcript: 'Sales: Hello, this is John from ABC Trading. How may I help you?\nClient: Hi, I\'m interested in your latest product line. I saw it on your website.\nSales: Thank you for your interest. Which specific products would you like to know more about?\nClient: I\'m looking for information about your LED light series, particularly the pricing and MOQ.\nSales: I\'d be happy to help you with that. Our minimum order quantity for LED lights is 1000 pieces, and I can send you a detailed quotation by email.\nClient: That would be great. Could you also include information about the delivery time?\nSales: Of course. The current lead time is about 30-45 days. I\'ll include all the specifications and shipping terms in the email.',
  questions: [
    {
      id: 1,
      question: 'What is the client interested in?',
      options: ['Company information', 'LED light series', 'Shipping services', 'Payment methods'],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'What is the MOQ for LED lights?',
      options: ['500 pieces', '1000 pieces', '1500 pieces', '2000 pieces'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'What is the lead time mentioned?',
      options: ['15-20 days', '20-30 days', '30-45 days', '45-60 days'],
      correctAnswer: 2
    }
  ]
};

export default function ListeningPage() {
  const [showTranscript, setShowTranscript] = useState(false);
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
    return sampleLesson.questions.reduce((score, question, index) => {
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

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            听力练习
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {sampleLesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {sampleLesson.description}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <audio
                controls
                className="w-full mb-4"
                src={sampleLesson.audioUrl}
              >
                Your browser does not support the audio element.
              </audio>

              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {showTranscript ? '隐藏文本' : '显示文本'}
              </button>

              {showTranscript && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <pre className="whitespace-pre-wrap text-gray-600 dark:text-gray-400">
                    {sampleLesson.transcript}
                  </pre>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                理解测试
              </h3>
              {sampleLesson.questions.map((question, questionIndex) => (
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
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={selectedAnswers.length !== sampleLesson.questions.length}
                >
                  提交答案
                </button>
              )}

              {showResults && (
                <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    测试结果
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    得分: {calculateScore()} / {sampleLesson.questions.length}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}