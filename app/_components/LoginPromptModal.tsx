'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import Link from 'next/link'
import { FaTimes, FaRocket, FaBookmark, FaHeart, FaShieldAlt } from 'react-icons/fa'

interface LoginPromptModalProps {
  isOpen: boolean
  onClose: () => void
  featureType: 'bookmark' | 'thanks'
}

export default function LoginPromptModal({ isOpen, onClose, featureType }: LoginPromptModalProps) {
  const getFeatureInfo = () => {
    switch (featureType) {
      case 'bookmark':
        return {
          icon: <FaBookmark className="text-4xl text-amber-500" />,
          title: 'ブックマーク機能',
          description: '気になる授業をブックマークして、後で確認することができます。自分だけの授業リストを作成しましょう。',
          color: 'from-amber-500 to-amber-600'
        }
      case 'thanks':
        return {
          icon: <FaHeart className="text-4xl text-red-500" />,
          title: 'ありがとう機能',
          description: '役に立ったレビューに「ありがとう」を送って、レビュアーに感謝の気持ちを伝えることができます。',
          color: 'from-red-500 to-red-600'
        }
      default:
        return {
          icon: <FaRocket className="text-4xl text-green-500" />,
          title: '便利な機能',
          description: 'ログインすると様々な便利機能を利用できます。',
          color: 'from-green-500 to-green-600'
        }
    }
  }

  const featureInfo = getFeatureInfo()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      ariaHideApp={false}
    >
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-100 relative overflow-hidden animate-fade-in">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-green-100/30 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-green-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-200 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>

        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
        >
          <FaTimes className="text-gray-400 hover:text-gray-600" />
        </button>

        {/* コンテンツ */}
        <div className="relative z-10">
          {/* アイコンとタイトル */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gray-50 rounded-full">
                {featureInfo.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {featureInfo.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {featureInfo.description}
            </p>
          </div>

          {/* ログイン促進メッセージ */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 mb-6 border border-green-200/50">
            <div className="flex items-center justify-center mb-3">
              <FaShieldAlt className="text-green-600 text-xl mr-2" />
              <h3 className="text-lg font-bold text-green-800">ログインが必要です</h3>
            </div>
            <p className="text-green-700 text-center font-medium">
              ログインすると利用することができます
            </p>
          </div>

          {/* ログイン機能の魅力 */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                ✏️
              </div>
              <span className="text-gray-700 font-medium">レビューの編集</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white text-sm">
                🔖
              </div>
              <span className="text-gray-700 font-medium">ブックマーク登録</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-sm">
                ❤️
              </div>
              <span className="text-gray-700 font-medium">ありがとう機能</span>
            </div>
          </div>

          {/* アクションボタン */}
          <div className="space-y-3">
            <Link href="/auth/signin" onClick={onClose}>
              <button className={`w-full px-6 py-4 bg-gradient-to-r ${featureInfo.color} text-white font-bold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaRocket className="mr-2 group-hover:animate-bounce" />
                <span className="relative">ログインする</span>
              </button>
            </Link>

            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-2xl hover:bg-gray-200 transition-colors duration-200"
            >
              後で
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}