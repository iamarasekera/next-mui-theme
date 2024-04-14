import Image from 'next/image'
import styles from './page.module.css'
import HeroBanner from '../components/HeroBanner';
import AboutBears from '../components/AboutBears';

export default function Home() {
  return (
    <div>
    <HeroBanner />
    <AboutBears />
  </div>
  )
}
