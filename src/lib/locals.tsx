import { useRouter } from 'next/router';
import { SAFlag } from '@/components/icons/flags/SAFlag';
import { CNFlag } from '@/components/icons/flags/CNFlag';
import { USFlag } from '@/components/icons/flags/USFlag';
import { DEFlag } from '@/components/icons/flags/DEFlag';
import { RUFlag } from '@/components/icons/flags/RUFlag';
import { KKFlag } from '@/components/icons/flags/KKFlag';
import { ILFlag } from '@/components/icons/flags/ILFlag';
import { ESFlag } from '@/components/icons/flags/ESFlag';

import { SAFlagRound } from '@/components/icons/flags/SAFlagRound';
import { CNFlagRound } from '@/components/icons/flags/CNFlagRound';
import { DEFlagRound } from '@/components/icons/flags/DEFlagRound';
import { KKFlagRound } from '@/components/icons/flags/KKFlagRound';
import { RUFlagRound } from '@/components/icons/flags/RUFlagRound';
import { ESFlagRound } from '@/components/icons/flags/ESFlagRound';
import { USFlagRound } from '@/components/icons/flags/USFlagRound';
import { ILFlagRound } from '@/components/icons/flags/ILFlagRound';

const localeRTLList = ['ar', 'he'];
export function useIsRTL() {
  const { locale } = useRouter();
  if (locale && localeRTLList.includes(locale)) {
    return { isRTL: true, alignLeft: 'right', alignRight: 'left' };
  }
  return { isRTL: false, alignLeft: 'left', alignRight: 'right' };
}

export let languageMenu = [
  {
    id: 'ar',
    name: 'عربى',
    value: 'ar',
    icon: <SAFlag width="20px" height="15px" />,
    iconMobile: <SAFlagRound />,
  },
  {
    id: 'zh',
    name: '中国人',
    value: 'zh',
    icon: <CNFlag width="20px" height="15px" />,
    iconMobile: <CNFlagRound />,
  },
  {
    id: 'en',
    name: 'English',
    value: 'en',
    icon: <USFlag width="20px" height="15px" />,
    iconMobile: <USFlagRound />,
  },
  {
    id: 'de',
    name: 'Deutsch',
    value: 'de',
    icon: <DEFlag width="20px" height="15px" />,
    iconMobile: <DEFlagRound />,
  },
  {
    id: 'kk',
    name: 'Қазақша',
    value: 'kk',
    icon: <KKFlag width="20px" height="15px" />,
    iconMobile: <KKFlagRound />,
  },
  {
    id: 'ru',
    name: 'Русский',
    value: 'ru',
    icon: <RUFlag width="20px" height="15px" />,
    iconMobile: <RUFlagRound />,
  },
  {
    id: 'he',
    name: 'rעברית',
    value: 'he',
    icon: <ILFlag width="20px" height="15px" />,
    iconMobile: <ILFlagRound />,
  },
  {
    id: 'es',
    name: 'Español',
    value: 'es',
    icon: <ESFlag width="20px" height="15px" />,
    iconMobile: <ESFlagRound />,
  },
];
