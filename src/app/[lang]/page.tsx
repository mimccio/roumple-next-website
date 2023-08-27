import { Trans } from 'react-i18next/TransWithoutContext'

import workflowImg from '@/assets/workflow.png'
import orderCompletedImg from '@/assets/order-completed.png'
import successImg from '@/assets/success.png'
import { useTranslation } from '@/app/i18n'

import { Cta } from '../components/cta'
import { Footer } from '../components/footer'
import { HomeSection } from '../components/home-section'
import { PresentationImage } from '../components/presentation-image'
import { PresentationText } from '../components/presentation-text'
import { Title } from '../components/title'
import { Header } from '../components/header'

interface Props {
  params: { lang: string }
}

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang, ['nav', 'home'])

  return (
    <>
      <Title lang={lang} />

      <HomeSection>
        <PresentationImage img={workflowImg} />
        <PresentationText
          title={t('create.title', { ns: 'home' })}
          description={t('create.description', { ns: 'home' })}
        />
      </HomeSection>

      <HomeSection>
        <PresentationText title={t('follow.title', { ns: 'home' })}>
          <p className="font-semibold text-gray-500">
            <Trans i18nKey="follow.description" ns="home" t={t}>
              <span className="text-indigo-700">Daily</span>, <span className="text-sky-700">weekly</span> and
              <span className="text-purple-700">monthly</span> routines
            </Trans>
          </p>
        </PresentationText>
        <PresentationImage img={orderCompletedImg} />
      </HomeSection>

      <HomeSection>
        <PresentationImage img={successImg} />
        <PresentationText title={t('done.title', { ns: 'home' })} description={t('done.description', { ns: 'home' })} />
      </HomeSection>

      <Cta lang={lang} />
    </>
  )
}
