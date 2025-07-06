'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FORM_OPTIONS } from '@/lib/constants'
import { isValidEmail } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { trackFormSubmission, trackEvent } from '@/components/analytics/Analytics'

interface ContactFormProps {
  onClose?: () => void
}

interface FormData {
  companyName: string
  name: string
  email: string
  challenge?: string
  timing?: string
  message?: string
}

interface FormErrors {
  companyName?: string
  name?: string
  email?: string
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    email: '',
    challenge: '',
    timing: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showExtendedForm, setShowExtendedForm] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = '会社名を入力してください'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      trackEvent('form_validation_error', {
        form_type: 'contact',
        errors: Object.keys(errors),
      })
      return
    }

    setIsSubmitting(true)

    // Track form submission attempt
    trackFormSubmission('contact', {
      has_extended_fields: showExtendedForm,
      company_name: formData.companyName,
      challenge: formData.challenge,
      timing: formData.timing,
    })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Track successful submission
      trackEvent('form_submit_success', {
        form_type: 'contact',
        has_extended_fields: showExtendedForm,
      })
      
      setIsSubmitted(true)
    } catch (error) {
      // Track submission error
      trackEvent('form_submit_error', {
        form_type: 'contact',
        error: 'submission_failed',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className="bg-white rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">送信完了しました</h3>
        <p className="text-gray-600 mb-6">
          お問い合わせありがとうございます。<br />
          担当者より2営業日以内にご連絡させていただきます。
        </p>
        {onClose && (
          <Button variant="outline" onClick={onClose}>
            閉じる
          </Button>
        )}
      </motion.div>
    )
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">無料相談のお申し込み</h3>

      {/* Basic Form (3 fields) */}
      <div className="space-y-4">
        <div>
          <label htmlFor="companyName" className="label">
            会社名 <span className="text-semantic-error">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={cn(
              "input",
              errors.companyName && "border-semantic-error focus:border-semantic-error focus:ring-semantic-error/10"
            )}
            placeholder="例：株式会社〇〇"
          />
          {errors.companyName && (
            <p className="error-message">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="name" className="label">
            お名前 <span className="text-semantic-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "input",
              errors.name && "border-semantic-error focus:border-semantic-error focus:ring-semantic-error/10"
            )}
            placeholder="例：山田 太郎"
          />
          {errors.name && (
            <p className="error-message">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            メールアドレス <span className="text-semantic-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "input",
              errors.email && "border-semantic-error focus:border-semantic-error focus:ring-semantic-error/10"
            )}
            placeholder="例：yamada@example.com"
          />
          {errors.email && (
            <p className="error-message">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Toggle for extended form */}
      {!showExtendedForm && (
        <button
          type="button"
          onClick={() => setShowExtendedForm(true)}
          className="text-sm text-secondary hover:text-secondary-dark mt-4"
        >
          + 詳細情報を入力する（任意）
        </button>
      )}

      {/* Extended Form (additional 2 fields for A/B testing) */}
      {showExtendedForm && (
        <motion.div 
          className="space-y-4 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <label htmlFor="challenge" className="label">
              現在の課題
            </label>
            <select
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              className="input"
            >
              <option value="">選択してください</option>
              {FORM_OPTIONS.challenges.map(challenge => (
                <option key={challenge} value={challenge}>
                  {challenge}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timing" className="label">
              希望相談時期
            </label>
            <select
              id="timing"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              className="input"
            >
              <option value="">選択してください</option>
              {FORM_OPTIONS.consultationTiming.map(timing => (
                <option key={timing} value={timing}>
                  {timing}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="mt-8 space-y-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          無料相談を申し込む
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          送信いただいた情報は、SSL暗号化通信により保護されます。<br />
          個人情報は適切に管理し、営業目的での使用は一切いたしません。
        </p>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </motion.form>
  )
}

export default ContactForm