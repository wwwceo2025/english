import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">英语学习平台</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/vocabulary" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">单词学习</Link>
              <Link href="/listening" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">听力练习</Link>
              <Link href="/reading" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">阅读理解</Link>
              <Link href="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">个人中心</Link>
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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">单词学习</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">科学的单词记忆方法，配合智能复习系统</p>
            <Link href="/vocabulary" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              开始学习
            </Link>
          </div>

          {/* 听力练习卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">听力练习</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">丰富的听力材料，提升听力理解能力</p>
            <Link href="/listening" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              开始练习
            </Link>
          </div>

          {/* 阅读理解卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">阅读理解</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">精选阅读文章，提高阅读理解能力</p>
            <Link href="/reading" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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
