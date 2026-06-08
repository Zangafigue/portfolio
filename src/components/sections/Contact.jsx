import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

// Clés publiques EmailJS (côté client par conception).
const SERVICE_ID  = 'service_4ql99i9'
const TEMPLATE_ID = 'template_blt15sm'
const PUBLIC_KEY  = '7AH4sKqrSGytPWXzC'

const inputStyle = {
  width:           '100%',
  padding:         '12px 16px',
  backgroundColor: 'rgba(255,255,255,0.04)',
  border:          '1px solid rgba(255,255,255,0.1)',
  borderRadius:    '8px',
  color:           '#ffffff',
  fontSize:        '0.9rem',
  fontFamily:      'Inter, sans-serif',
  outline:         'none',
  transition:      'border-color 0.2s',
}

const labelStyle = {
  display:      'block',
  fontSize:     '0.8rem',
  color:        'rgba(255,255,255,0.5)',
  fontFamily:   'JetBrains Mono, monospace',
  marginBottom: '6px',
}

function ContactLink({ item }) {
  const { href, label, value } = item

  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'rgba(0,180,216,0.4)'
  }
  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display:         'flex',
        alignItems:      'center',
        gap:             '1rem',
        textDecoration:  'none',
        padding:         '12px 16px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border:          '1px solid rgba(255,255,255,0.07)',
        borderRadius:    '8px',
        transition:      'border-color 0.2s',
      }}
    >
      <span style={{
        fontSize:   '0.75rem',
        color:      '#00B4D8',
        fontFamily: 'JetBrains Mono, monospace',
        minWidth:   '80px',
      }}>
        {label}
      </span>
      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
        {value}
      </span>
    </a>
  )
}

function Contact() {
  const { t } = useTranslation()
  const formRef = useRef()
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    from_name:  '',
    from_email: '',
    message:    '',
  })

  const contactLinks = [
    { label: t('contact.linkGithub'),  value: 'github.com/Zangafigue',      href: 'https://github.com/Zangafigue' },
    { label: t('contact.linkTwitter'), value: '@Zanga286',                  href: 'https://x.com/Zanga286' },
    { label: t('contact.linkEmail'),   value: 'mathiastraore08@gmail.com',  href: 'mailto:mathiastraore08@gmail.com' },
  ]

  const handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#00B4D8'
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  formData.from_name,
          from_email: formData.from_email,
          message:    formData.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'
  const isError   = status === 'error'

  return (
    <section
      id="contact"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%' }}>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display:       'flex',
            alignItems:    'center',
            gap:           '1rem',
            marginBottom:  '3rem',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            color:      '#00B4D8',
            fontSize:   '0.9rem',
          }}>
            {t('contact.n')}
          </span>
          <h2 style={{
            fontSize:   'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color:      '#ffffff',
          }}>
            {t('contact.title')}
          </h2>
          <div style={{
            flex:            1,
            height:          '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginLeft:      '1rem',
          }} />
        </motion.div>

        {/* Grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '3rem',
          alignItems:          'start',
        }}>

          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              color:        'rgba(255,255,255,0.6)',
              lineHeight:   1.8,
              fontSize:     '0.95rem',
              marginBottom: '2rem',
            }}>
              {t('contact.intro')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map((item) => (
                <ContactLink key={item.value} item={item} />
              ))}
            </div>
          </motion.div>

          {/* Colonne droite — Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>{t('contact.name')}</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder={t('contact.namePlaceholder')}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={labelStyle}>{t('contact.email')}</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder={t('contact.emailPlaceholder')}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>{t('contact.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  placeholder={t('contact.messagePlaceholder')}
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width:           '100%',
                  padding:         '12px',
                  backgroundColor: isLoading ? 'rgba(0,180,216,0.4)' : '#00B4D8',
                  color:           '#0a0a1a',
                  border:          'none',
                  borderRadius:    '8px',
                  fontWeight:      600,
                  fontSize:        '0.95rem',
                  fontFamily:      'Inter, sans-serif',
                  cursor:          isLoading ? 'not-allowed' : 'pointer',
                  transition:      'opacity 0.2s',
                }}
              >
                {isLoading ? t('contact.sending') : t('contact.send')}
              </button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop:  '1rem',
                    color:      '#22c55e',
                    fontSize:   '0.85rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    textAlign:  'center',
                  }}
                >
                  {t('contact.success')}
                </motion.p>
              )}

              {isError && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop:  '1rem',
                    color:      '#ef4444',
                    fontSize:   '0.85rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    textAlign:  'center',
                  }}
                >
                  {t('contact.error')}
                </motion.p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
