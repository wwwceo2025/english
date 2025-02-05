import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 导航栏 */}
      <nav className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-500">英语学习平台</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/vocabulary" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">单词学习</Link>
              <Link href="/listening" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">听力练习</Link>
              <Link href="/reading" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">阅读理解</Link>
              <Link href="/profile" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">个人中心</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* 欢迎区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">开始你的英语学习之旅</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">专业的学习平台，助你轻松掌握英语</p>
        </div>

        {/* 功能卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 单词学习卡片 */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">单词学习</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">科学的单词记忆方法，配合智能复习系统</p>
            <Link href="/vocabulary" className="inline-flex items-center justify-center w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
              开始学习
            </Link>
          </div>

          {/* 听力练习卡片 */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">听力练习</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">丰富的听力材料，提升听力理解能力</p>
            <Link href="/listening" className="inline-flex items-center justify-center w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
              开始练习
            </Link>
          </div>

          {/* 阅读理解卡片 */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">阅读理解</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">精选阅读文章，提高阅读理解能力</p>
            <Link href="/reading" className="inline-flex items-center justify-center w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md">
              开始阅读
            </Link>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 英语学习平台. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
